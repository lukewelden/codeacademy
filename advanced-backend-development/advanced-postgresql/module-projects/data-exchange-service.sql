/*
Data Exchange Service
This project will involve implementing a PostgreSQL database that’s suitable for storing data for a data sharing application. Imagine that your company has created a data platform that allows users to share datasets and the metadata (e.g. number of downloads, number of views, path to raw file).

A few select data publishers have been given access to your database and you’ve been tasked with setting up the permissions that allow these publishers to get relevant information about how users are interacting with the data they’ve uploaded.
*/

/*
Right now, the database has just one superuser. Write a query that allows you to determine the name of that role.
*/
SELECT rolname
FROM pg_roles
WHERE rolsuper = 't';

/*
What are the names of the other users in the database? What permissions do these roles have (e.g. rolcreaterole, rolcanlogin, rolcreatedb, etc.)?
*/
SELECT * FROM pg_roles;

/*
Now that you have the name of the superuser, check the name of the role you’re currently using. Is this role the superuser?
*/
SELECT current_user;

/*
Adding a Publisher 
In this section we’ll add a role for our first publisher, “ABC Open Data, Inc.”
First, let’s create a login role named abc_open_data without superuser permissions.
*/
CREATE ROLE abc_open_data WITH LOGIN NOSUPERUSER;

/*
Now let’s create a non-superuser group role named publishers and include abc_open_data as a member.
We can add multiple publishers to this group role and then manage their permissions by modifying this role.
*/
CREATE ROLE publishers WITH NOLOGIN ROLE abc_open_data;

/*
There’s a schema in the database named analytics. All publishers should have access to this schema. Grant USAGE on this schema to publishers
*/
GRANT USAGE 
ON SCHEMA analytics 
TO publishers;

/*
Now that publishers has USAGE, write the query that grants publishers the ability to SELECT on all existing tables in analytics.
*/
GRANT SELECT 
ON ALL TABLES
IN SCHEMA analytics
TO publishers;

/*
Check to see how PostgreSQL has recorded the changes to the schema permissions you just updated.
Query the information schema table table_privileges to check whether abc_open_data has SELECT on analytics.downloads.
Do you think abc_open_data or publishers will appear in this table?
*/
SELECT * FROM information_schema.table_privileges
WHERE grantee = 'abc_open_data' OR grantee = 'publishers';

/*
Let’s confirm that abc_open_data has the ability to SELECT on analytics.downloads through inheritance from publishers.
This is important because we’ll want to manage most publishers’ permissions through the group role publishers instead of the role for each publisher.
*/
SET ROLE abc_open_data;
SELECT * FROM analytics.downloads LIMIT 10;

/*
Granting a Publisher Access to Dataset Listings
There is a table named directory.datasets in the database with the following schema. SELECT from this table to see a few sample rows.
*/
SET ROLE ccuser; --switch back into ccuser as abc_open_data does not have permission to view this table 
SELECT * FROM directory.datasets LIMIT 10;

/*
Grant USAGE on directory to publishers. This statement should be almost identical to the way that we granted USAGE on analytics.
*/
GRANT USAGE 
ON SCHEMA directory
TO publishers;

/*
Let’s write a statement to GRANT SELECT on all columns in this table (except data_checksum) to publishers.
*/
GRANT SELECT (id, create_date, hosting_path,	publisher,	src_size)
ON TABLE directory.datasets
TO publishers;

/*
Let’s mimic what might happen if a publisher tries to query the dataset directory for all dataset names and paths.
Why is this query failing? Can you remove a column from this query so that it’s successful?
*/
SET ROLE abc_open_data;

SELECT id, publisher, hosting_path
FROM directory.datasets;

SET ROLE ccuser; -- setting super user for next task

/*
Adding Row Level Security on Downloads Data
Although we’re designing a collaborative data environment, we may want to implement some degree of privacy between publishers.
Let’s implement row level security on analytics.downloads. Create and enable policy that says that the current_user must be the publisher of the dataset to SELECT.
*/
CREATE POLICY row_level_security ON analytics.downloads
FOR SELECT TO publishers USING (owner=current_user);
ALTER TABLE analytics.downloads ENABLE ROW LEVEL SECURITY;

/*
Write a query to SELECT the first few rows of this table. Now SET your role to abc_open_data and re-run the same query, are the results the same?
*/
SELECT * FROM analytics.downloads LIMIT 10;

SET ROLE abc_open_data;

SELECT * FROM analytics.downloads LIMIT 10;