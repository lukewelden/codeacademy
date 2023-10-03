/*
Book Store Indexes
We are running an online bookstore and need to keep track of what books we offer. We’ll be working with a database of three tables. The books table is created from the [top selling books of all time](https://en.wikipedia.org/wiki/List_of_best-selling_books). The customers and orders tables are randomly generated.
*/

/*
Existing Structure

Before we start having fun with the database, familiarize yourself with what we are starting with, look at the first 10 rows in each table; customers, orders, and books to get a feel for what is in each.
*/
select * from customers limit 10;
select * from books limit 10;
select * from orders limit 10;

/*
Before you make any changes to a database and its tables, you should know what you are working with. Examine the indexes that already exist on the three tables customers, books, and orders. Can you think of any right now that might be useful to add (check the hints for some of our ideas)?
*/
select * from pg_Indexes 
where 
  tablename = 'customers'
  OR tablename = 'books'
  OR tablename = 'orders';

  /*  
While looking over the history of the queries you have been running for the marketing and shipping departments over the last month, you notice that you are looking at the foreign keys in the orders table — customer_id and book_id — often enough that you think it might be a good idea to build an index on each of these columns. You do note that although they do sometimes ask for information on who placed an order and the specific book they ordered, most of the time they ask for only one of these at a time. Add the index(es) to help speed this process? Can you think of any dangers of this?
*/
create index orders_customer_id ON orders(customer_id);
create index orders_book_id ON orders(book_id);
select * from pg_Indexes where tablename = 'orders';

/*
Is a Multicolumn Index good here?
We are about to create a multicolumn index, but before we do let’s get some information prepared to make sure we are ready to analyze if it was a good or bad index to create.

Use EXPLAIN ANALYZE to check the runtime of a query searching for the original_language, title, and sales_in_millions from the books table that have an original_language of 'French'.
*/
explain analyze select original_language, title, sales_in_millions from books where original_language = 'French';
select pg_size_pretty (pg_total_relation_size('books'));

create index books_multiple ON books(original_language, title, sales_in_millions);
select * from pg_Indexes where tablename = 'books';

explain analyze select original_language, title, sales_in_millions from books where original_language = 'French';
select pg_size_pretty (pg_total_relation_size('books'));

/*
After running your site for a while, you find that you’re often inserting new books into your books table as new books get released. However, many of these books don’t sell enough copies to be worth translating, so your index has proven to be more costly than beneficial. Delete the multicolumn index we created above to make it so inserts into the books will run quickly.
*/
drop index books_multiple;
select * from pg_Indexes where tablename = 'books';

/*
Bulk Insert 
The company you work for has bought out a competitor bookstore. You will need to load all of their orders into your orders table with a bulk copy. Let’s see how long this bulk insert will take. Since the syntax on how to do this was not part of the lesson, here is the script that will take the data in the file orders_add.txt and insert the records into the orders table.
---
SELECT NOW();
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
SELECT NOW();
---
EXPLAIN ANALYZE doesn’t work on the COPY call, so we are using a timestamp before and after we load the information into the database. Make a note of the time difference between the two timestamps as they will get erased in the next task.
*/
SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();

/*
Now go back to your copy function and before you get the first timestamp, drop all of the indexes you have created so far on the orders table in this project. Then, after the second timestamp, recreate them. Look at the time to do the bulk load now. Why is it faster?

As a note, the Codecademy website clears and rebuilds the database you are working with every time you hit the save button. If you were to run this code on another database server you would hit duplicate insert errors since you would have already inserted the books from orders_add.txt once.

If you are interested, you can also put time stamps around the DROP and CREATE of the indexes to see how long these take to run as well.
*/