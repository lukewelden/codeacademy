/*
Database Normalization at Fred's Furniture
A new online furniture store named Fred’s Furniture has hired you as their very first data engineer. Congratulations!

Fred (the owner) knew when he started his business that he should be collecting data about orders, customers, and items. Unfortunately, Fred doesn’t have a background in database engineering, so he has been storing all of this information in a single database table. Now that his business is getting a little bigger, Fred is finding it harder and harder to maintain his database, so he’s hired you to help him redesign it.

Over the course of this project, you will normalize Fred’s database by creating a new set of tables that contain all of the same information. You’ll then have a chance to explore how data modifications and queries differ before and after normalization.

The provided database includes order, customer, and item data for Fred’s first month of business, which is contained in a table named store.
*/

/*
Fred’s database, which contains a single table named store, has been loaded for you. Write a query to select the first 10 rows and all columns from the store table and inspect the results. In order to normalize the database, which columns do you think should be moved to separate tables?

-- items, customers, and orders should all be in separate tables. There should also be a customers_orders table to link customer data to order ids. You could also link in item data too. 
*/
SELECT * FROM store LIMIT 5;

/*
Have any customers made more than one order? Copy and paste the following query into script.sql to calculate the number of distinct order_id values:
*/
SELECT COUNT(DISTINCT(order_id)) 
FROM store;

/*
Then, write another query using similar syntax to calculate the number of distinct customer_id values. You should see fewer customers than orders, suggesting that some customers have made more than one order!
*/
SELECT COUNT(DISTINCT(customer_id))
FROM store;

/*
Let’s inspect some of the repeated data in this table. Write a query to retutn the customer_id, customer_email, and customer_phone where customer_id = 1. How many orders did this customer make?
-- 2 orders 
*/
SELECT customer_id, customer_email, customer_phone
FROM store
WHERE customer_id = 1;

/*
There’s probably even more repeated data in the item-related columns! Write a query to return the item_1_id, item_1_name, and item_1_price where item_1_id = 4. How many orders include this item as item_1?
-- 3 orders
*/
SELECT item_1_id, item_1_name, item_1_price
FROM store
WHERE item_1_id = 4;

/*
Create a Normalized Version of the Database

Below is a database schema for a normalized version of this database:
orders  -> orders_items -> items 
        -> customers
freds furniture database with 4 tables: orders, customers, items, and orders_items
Use CREATE TABLE customers AS to create the customers table described in the schema by querying the original store table for the relevant columns. Make sure to only include one row per distinct customer_id.
*/
CREATE TABLE customers AS (
  SELECT DISTINCT(customer_id), customer_phone, customer_email
  FROM store
  ORDER BY customer_id  
);

SELECT * FROM customers LIMIT 5;

/*
Use the following syntax to designate the customer_id column as the primary key of your new customers table:

Note: You’ll need to use ALTER TABLE here because the customers table was created by querying an existing table; therefore, it was not possible to set a primary key constraint within the CREATE TABLE statement itself. You’ll also need to write this code AFTER the CREATE TABLE statement from the previous step because tables are deleted and re-created according to script.sql every time you press ‘Save’.
*/
ALTER TABLE customers
ADD PRIMARY KEY (customer_id);

/*
Use CREATE TABLE items AS to create the items table described in the normalized schema (diagram below) by querying the original store table for the relevant columns. Make sure to only include one row per distinct item_id.
*/
CREATE TABLE items AS
SELECT DISTINCT item_1_id as item_id, item_1_name as name, item_1_price as price 
FROM store
UNION
SELECT DISTINCT item_2_id as item_id, item_2_name as name, item_2_price as price
FROM store
WHERE item_2_id IS NOT NULL
UNION
SELECT DISTINCT item_3_id as item_id, item_3_name as name, item_3_price as price
FROM store
WHERE item_3_id IS NOT NULL;

SELECT * FROM items ORDER BY item_id LIMIT 5;

/*
Designate the item_id column of your new items table as the primary key.
*/
ALTER TABLE items
ADD PRIMARY KEY (item_id);

/*
Use CREATE TABLE orders_items AS to create the orders_items table described in the normalized schema (diagram below) by querying the original store table for the relevant columns. Each row should correspond to a unique instance of a particular item in a particular order.

freds furniture database with 4 tables: orders, customers, items, and orders_items
The first few rows of the orders_items table should look something like:

order_id	item_id
55	      1
43	      1
64	      2
98	      2

Note that this table will allow you to retain the many-to-many relationship between orders and items (each order can contain multiple items; each item can appear in multiple orders).
*/
CREATE TABLE orders_items AS
SELECT order_id, item_1_id as item_id 
FROM store
UNION ALL
SELECT order_id, item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT order_id, item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL;

SELECT * FROM orders_items ORDER BY order_id LIMIT 5;

/*
Use CREATE TABLE orders AS to create the orders table described in the normalized schema by querying the original store table for the relevant columns. Note that you will want to include customer_id in the orders table so that you can still link orders and customers back together.
*/
CREATE TABLE orders AS 
SELECT order_id, order_date, customer_id
FROM store; 

SELECT * FROM orders LIMIT 5;

/*
Designate the order_id column of the orders table as the primary key.
*/
ALTER TABLE orders
ADD PRIMARY KEY (order_id);

 /*
 Set the foreign keys for the orders table and the foreign keys for the orders_items table
 */
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) 
REFERENCES customers(customer_id);

ALTER TABLE orders_items
ADD FOREIGN KEY (item_id) 
REFERENCES items(item_id);

ALTER TABLE orders_items
ADD FOREIGN KEY (order_id) 
REFERENCES orders(order_id);

/*
Congratulations! You now have sets of database tables that contain the same information. The first has a single database table named store. The second has four database tables: orders, orders_items, items, and customers.

Due to the constraints of the learning environment on Codecademy, all of these tables are currently stored in the same database; however, for the remainder of this project, we are going to imagine them as separate databases (one that’s not normalized and one that is normalized) so that we can compare them.

Query the original store table to return the emails of all customers who made an order after July 25, 2019.
*/
SELECT customer_email FROM store WHERE order_date > '2019-07-25';

/*
Now, query your normalized database tables to return the emails of all customers who made an order after July 25, 2019 (the normalized database tables are: orders, orders_items, customers, and items). Is this easier or more difficult to do with the normalized database tables?
-- more difficult as you have to perform joins 
*/
SELECT c.customer_email
FROM orders AS o  
JOIN customers AS c
ON o.customer_id = c.customer_id
WHERE order_date > '2019-07-25';

/*
Query the original store table to return the number of orders containing each unique item (for example, two orders contain item 1, two orders contain item 2, four orders contain item 3, etc.)

Hint: you’ll need to use UNION ALL twice to stack the three item id columns on top of each other, then use the WITH key word to query the results of your union table using COUNT and GROUP BY.
*/
WITH all_items AS (
SELECT item_1_id as item_id 
FROM store
UNION ALL
SELECT item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL
)
SELECT item_id, COUNT(*)
FROM all_items
GROUP BY item_id
ORDER BY item_id;

/*
Query your normalized database tables to return the number of orders containing each unique item. Is this easier or more difficult to do with the normalized database tables?
-- much easier 
*/
SELECT item_id, COUNT(*)
FROM orders_items
GROUP BY item_id
ORDER BY item_id;




