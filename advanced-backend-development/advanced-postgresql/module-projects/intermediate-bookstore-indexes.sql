/*
Intermediate Book Store Indexes

In this project, we’ll look at how adding more complex indexes can help (or hurt!) your database. Let’s imagine we are running an online book store and need to keep track of what books we offer. We’ll be working with a database of three tables. The books table is created from the [top selling books of all time](https://en.wikipedia.org/wiki/List_of_best-selling_books). The customers and orders tables are randomly generated.
*/

/*
Before we start having fun with the database, familiarize yourself with what we are staring with, look at the first 10 rows in each table; customers, orders, and books to get a feel for what is in each.
*/
SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

/*
Before you make any changes to a database and it’s tables, you should know what you are working with. Examine the indexes that already exist on the three tables customers, books and orders. There are indexes of note — books_author_idx and books_title_idx. We will get to their use soon, but for fun can you guess what we will be using them for? It also appears that an index is missing, can you figure out what it is?
*/
SELECT * FROM pg_Indexes 
WHERE tablename = 'customers'
  OR tablename = 'orders'
  OR tablename = 'books';
-- used for indexing on the books.title and books.author columns 
-- customers_pkey is missing

/*
Partial Index

Your marketing team reaches out to you to request regular information on sales figures, but they are only interested in sales of greater than 18 units sold in an order to see if there would be a benefit in targeted marketing. They will need the customer_ids, and quantity ordered.

Perform an EXPLAIN ANALYZE when doing the SELECT function to get the information WHERE quantity > 18. Take note of how long this select statement took without an index.
*/
EXPLAIN ANALYZE 
  SELECT 
    customer_id,
    quantity
  FROM 
    orders
  WHERE 
    quantity > 18;

/*
Because we know they are only ever interested in orders where specifically more than 18 books were ordered we can build an index to improve the search time for this specific query.
*/
CREATE INDEX 
  orders_quantity_greater_than_eighteen_idx
ON
  orders(customer_id, quantity)
WHERE
  quantity > 18;

/*
Don’t forget to always verify that your index is doing what you are trying to accomplish. Write your EXPLAIN ANALYZE query again, this time after your new index to compare the before and after of the impact of this query. Can you explain the change? As more orders are placed, would this difference become greater or less noticeable?
*/
  EXPLAIN ANALYZE 
  SELECT 
    customer_id,
    quantity
  FROM 
    orders
  WHERE 
    quantity > 18;
  -- planning time has slightly increased but execution time has drastically been reduced. 
  -- the difference would become greater over time. However, the inserts may take longer due to the index. 

/*
Primary Key

At the start of the project, you were asked if you could find what index was missing. You may have noticed that the customers table is missing a primary key, and therefore its accompanying index. Let’s create that primary key now.

To check the effectiveness of this index, write a query that uses a WHERE clause targeting the primary key field. Run this query before and after creating the index. You can add EXPLAIN ANALYZE to these queries to see how long they take with and without the index. Make sure that these two queries are identical — you want to make sure you’re using the same measuring stick before and after the index is created.
*/
EXPLAIN ANALYZE 
  SELECT 
    first_name,
    last_name, 
    email_address
  FROM
    customers
  WHERE 
    customer_id = 22695;

CREATE UNIQUE INDEX ON customers (customer_id);

EXPLAIN ANALYZE 
  SELECT 
    first_name,
    last_name, 
    email_address,
    customer_id
  FROM
    customers
  WHERE 
    customer_id = 22695;

/*
You might have noticed that when you got the top 10 records from the customers table that they weren’t in numerical order by customer_id. This was intentionally done to simulate a system that has experienced updates, deletes, inserts from a live system. Use your new primary key to fix this so the system is ordered in the database physically by customer_id.

To verify this worked, you can query the first 10 rows of the customers table again to see the table organized by the primary key.
*/
SELECT * FROM customers LIMIT 10;

/*
No secondary lookup

Regular searches are done on the combination of customer_id and book_id on the orders table. You have determined (through testing) that this would be a good candidate to build a multicolumn index on. Let’s build this index!
*/
CREATE INDEX 
  orders_customer_id_book_id_idx 
ON
  orders (customer_id, book_id);

/*
You notice that your queries using the index you just built are also regularly asking for the quantity ordered as well.Drop your previous index and recreate it to improve it for this new information.
Don’t forget you can test your query before and after creation to see its impact.
*/
EXPLAIN ANALYZE
  SELECT
    customer_id,
    book_id, 
    quantity
  FROM
    orders
  WHERE
    quantity > 2;

DROP INDEX orders_customer_id_book_id_idx;

CREATE INDEX 
  orders_customer_id_book_id__quantity_idx 
ON
  orders (customer_id, book_id, quantity);

EXPLAIN ANALYZE
  SELECT
    customer_id,
    book_id, 
    quantity
  FROM
    orders
  WHERE
    quantity > 2;

/*
Combining Indexes
Recall the two indexes we investigated at the start of this project. They were built to try and improve the book overview page that allows users to search for a book by author or title. However, these searches are taking longer than you think they should. You already have indexes on the two main search criteria, author and title. What else could you do to improve the runtime (hint, you will be creating an index)?

Note, due to the size of the database tables we are working with in this example, the index you create will make little difference to runtime and is just a practice.
*/
-- we already have separate indexes so we could create a combined index like this
CREATE INDEX
  books_author_title_idx 
ON
  books (author, title);

/*
An Ounce of Prevention is worth a Pound of Cure

You notice the order history page taking longer than you would like for customer experiences. After some research, you notice the largest amount of time is spent calculating the total price the customer spent on each order. Let us set up a test. Write an EXPLAIN ANALYZE when looking for all the information on all orders where the total price (quantity * price_base) is over 100.
*/
EXPLAIN ANALYZE 
  SELECT * FROM orders
  WHERE (quantity * price_base) > 100;

/*
Create an index to speed this query up (recall, total price is quantity * price_base).
*/
CREATE INDEX
  orders_total_price_over_100
ON 
  orders (quantity, price_base)
WHERE 
  (quantity * price_base) > 100;

/*
You know what to do — investigate if your index has helped. Run your EXPLAIN ANALYZE again after your index is completed and compare the planning and execution times to see if this will help in this situation
*/
EXPLAIN ANALYZE 
  SELECT * FROM orders
  WHERE (quantity * price_base) > 100;
