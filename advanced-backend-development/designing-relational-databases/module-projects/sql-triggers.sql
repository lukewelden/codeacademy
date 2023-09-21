/* Set up the database */
CREATE TABLE customers (
  customer_id int PRIMARY KEY,
  first_name varchar(20),
  last_name varchar(20),
  email_address varchar(50),
  home_phone varchar(12),
  city varchar (15),
  state_name varchar(12),
  years_old int
);

CREATE TABLE customers_log (
  changed_by varchar(10),
  time_changed date, 
  change_type varchar(10)
)

INSERT INTO customers (first_name,	last_name, email_address,	home_phone,	city,	state_name,	years_old)
VALUES  ('Edward',	'Lewis',	'Edward.Lewis@example.com',	'202-555-0264',	'Pittsburgh',	'Pennsylvania',	82),
        ('Frances',	'Campbell',	'Frances.Campbell@example.com',	'202-555-0073',	'North Las Vegas	Nevada',	10),
        ('Dennis',	'Hall',	'Dennis.Hall@example.com',	'202-555-0424',	'Chula Vista	California',	21);

/* Get and idea of the database*/
SELECT * FROM customers ORDER BY customer_id;
SELECT * FROM customers_log;

/*
Your boss has tasked you with creating a trigger to log anytime someone updates the customers table. There is already a procedure to insert into the customers_log table called log_customers_change(). This function will create a record in customers_log and we want it to fire anytime an UPDATE statement modifies first_name or last_name. Give the trigger an appropriate name. Are there other situations you might suggest creating triggers for as well?
*/
CREATE TRIGGER log_customer_update_change
  BEFORE UPDATE ON customers
  FOR EACH ROW 
  WHEN (NEW.first_name <> OLD.first_name OR NEW.last_name <> OLD.last_name)
  EXECUTE PROCEDURE log_customers_change();

/*
Can you confirm your trigger is working as expected? Remember, it should only create a log for changes to first_name and/or last_name. We know what the state of the customers and customers_log tables are from our previous check so we can go directly to testing your trigger.
*/
UPDATE customers SET first_name = 'Tedward' WHERE customer_id = 1;
UPDATE customers SET email_address = 'Tedward.Lewis@example.com'WHERE customer_id = 1; -- testing first_name/last_name column update constraint

SELECT * FROM customers ORDER BY customer_id;
SELECT * FROM customers_log; 

/*
You suggested to your boss that INSERT statements should also be included (you had also suggested DELETE and TRUNCATE be covered as well, but legal thought this wasn’t needed for some reason). They agreed, but thought that tracking every row for inserts wasn’t necessary — a single record of who did the bulk insert would be enough. Create the trigger to call the log_customers_change procedure once for every statement on INSERT to the customers table. Call it customer_insert.
*/
CREATE TRIGGER log_customer_insert_change
  AFTER INSERT ON customers
  FOR EACH STATEMENT
  EXECUTE PROCEDURE log_customers_change(); 

INSERT INTO customers (first_name,	last_name, email_address,	home_phone,	city,	state_name,	years_old)
VALUES ('Steve', 'Madden', 'smadden@madden.com', '111-222-3333', 'New York City', 'New York', '25'),
       ('John', 'Sheridan', 'jshez@oafc.com', '111-222-3333', 'Oldham', 'Manchester', '55');

SELECT * FROM customers ORDER BY customer_id;
SELECT * FROM customers_log; 

/*
Your boss has changed their mind again, and now has decided that the conditionals for when a change occurs should be on the trigger and not on the function it calls.

In this example, we’ll be using the function override_with_min_age(). The trigger should detect when age is updated to be below 13 and call this function. This function will assume this was a mistake and override the change and set the age to be 13.
*/
CREATE TRIGGER below_min_age
  BEFORE UPDATE ON customers
  FOR EACH ROW 
  WHEN (NEW.years_old < 13)
  EXECUTE PROCEDURE override_with_min_age();

UPDATE customers SET years_old = 2 WHERE customer_id = 1;
UPDATE customers SET years_old = 14 WHERE customer_id = 2;


SELECT * FROM customers ORDER BY customer_id;
SELECT * FROM customers_log; 

/*
What would happen if you had an update on more columns at once, say modifications to the first_name and years_old in the same query? Try this now then run your check on customers (with the order we have been using) and customers_log.
*/
UPDATE 
  customers 
SET 
  years_old = 2,
  last_name = 'Slewis' 
WHERE 
  customer_id = 1;

SELECT * FROM customers ORDER BY customer_id;
SELECT * FROM customers_log;

/*
Though your trigger setting the years_old to never be under 13 is working, a better way to do the same thing would be with a constraint on the column itself. For now, let’s remove the trigger we created to set the minimum age.
*/
SELECT * FROM information_schema.triggers; -- show triggers before 
DROP TRIGGER below_min_age ON customers;
SELECT * FROM information_schema.triggers; -- show triggers after
