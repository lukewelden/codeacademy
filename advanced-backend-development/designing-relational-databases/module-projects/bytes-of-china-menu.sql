CREATE TABLE restaurant (
  id int PRIMARY KEY,
  name varchar(20), 
  description varchar(100),
  telephone varchar(12),
  hours varchar(100),
  ratings varchar(100)
);

CREATE TABLE address (
  restaurant_id int REFERENCES restaurant(id) UNIQUE,
  number varchar(5),
  street varchar(20),
  town varchar(20),
  state varchar(2),
  map varchar(50),
  zip varchar(10)
);

CREATE TABLE category (
  id varchar(2) PRIMARY KEY, 
  name varchar(20),
  description varchar(200)
);

CREATE TABLE dish (
  id int PRIMARY KEY, 
  name varchar(200),
  description varchar(200),
  spice bool
);

CREATE TABLE review (
  id int PRIMARY KEY,
  rating decimal,
  description varchar(200),
  reviewed date,
  restaurant_id int REFERENCES restaurant(id)
);

CREATE TABLE categories_dishes (
  category_id varchar(2) REFERENCES category(id),
  dish_id int REFERENCES dish(id),
  price money,
  PRIMARY KEY (category_id, dish_id)
);

/*
Verifying table constraints 
*/
SELECT
  constraint_name, 
  table_name, 
  column_name
FROM
  information_schema.key_column_usage;

  /* 
 *--------------------------------------------
 Insert values for restaurant
 *--------------------------------------------
 */
INSERT INTO restaurant VALUES (
  1,
  'Bytes of China',
  'Delectable Chinese Cuisine',
  '6175551212',
  'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm',
  3.9
);

/* 
 *--------------------------------------------
 Insert values for address
 *--------------------------------------------
 */
INSERT INTO address VALUES (
  1,
  '2020',
  'Busy Street',
  'Chinatown',
  'MA',
  'http://bit.ly/BytesOfChina',
  1
);

/* 
 *--------------------------------------------
 Insert values for review
 *--------------------------------------------
 */
INSERT INTO review VALUES (
  1,
  5.0,
  'Would love to host another birthday party at Bytes of China!',
  '05-22-2020',
  1
);

INSERT INTO review VALUES (
  2,
  4.5,
  'Other than a small mix-up, I would give it a 5.0!',
  '04-01-2020',
  1
);

INSERT INTO review VALUES (
  3,
  3.9,
  'A reasonable place to eat for lunch, if you are in a rush!',
  '03-15-2020',
  1
);

/* 
 *--------------------------------------------
 Insert values for category
 *--------------------------------------------
 */
INSERT INTO category VALUES (
  'C',
  'Chicken',
  null
);

INSERT INTO category VALUES (
  'LS',
  'Luncheon Specials',
  'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice  between 11:00 am and 3:00 pm from Monday to Friday.'
);

INSERT INTO category VALUES (
  'HS',
  'House Specials',
  null
);

/* 
 *--------------------------------------------
 Insert values for dish
 *--------------------------------------------
 */
INSERT INTO dish VALUES (
  1,
  'Chicken with Broccoli',
  'Diced chicken stir-fried with succulent broccoli florets',
  false
);

INSERT INTO dish VALUES (
  2,
  'Sweet and Sour Chicken',
  'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers',
  false
);

INSERT INTO dish VALUES (
  3,
  'Chicken Wings',
  'Finger-licking mouth-watering entree to spice up any lunch or dinner',
  true
);

INSERT INTO dish VALUES (
  4,
  'Beef with Garlic Sauce',
  'Sliced beef steak marinated in garlic sauce for that tangy flavor',
  true
);

INSERT INTO dish VALUES (
  5,
  'Fresh Mushroom with Snow Peapods and Baby Corns',
  'Colorful entree perfect for vegetarians and mushroom lovers',
  false
);

INSERT INTO dish VALUES (
  6,
  'Sesame Chicken',
  'Crispy chunks of chicken flavored with savory sesame sauce',
  false
);

INSERT INTO dish VALUES (
  7,
  'Special Minced Chicken',
  'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.',
  false
);

INSERT INTO dish VALUES (
  8,
  'Hunan Special Half & Half',
  'Shredded beef in Peking sauce and shredded chicken in garlic sauce',
  true
);

/*
 *--------------------------------------------
 Insert valus for cross-reference table, categories_dishes
 *--------------------------------------------
 */
INSERT INTO categories_dishes VALUES (
  'C',
  1,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'C',
  3,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  1,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  4,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  5,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  6,
  15.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  7,
  16.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  8,
  17.95
);

/*
Displaying all data in each table
*/
SELECT * FROM restaurant;
SELECT * FROM address;
SELECT * FROM review;
SELECT * FROM dish;
SELECT * FROM category;
SELECT * FROM categories_dishes;

/*
Type in a query that displays the restaurant name, its address (street number and name) and telephone number. Then, click SAVE to run the query.
*/
SELECT 
  restaurant.name AS "Restaurant Name", 
  address.number AS "Street Number",
  address.street AS "Street Name",
  restaurant.telephone AS "Telephone"
FROM 
  restaurant
INNER JOIN
  address
    ON restaurant.id = address.restaurant_id;

/*
Write a query to get the best rating the restaurant ever received. Display the rating as best_rating. Then, click SAVE to run the query.
*/
SELECT 
  MAX(review.rating) AS "best_rating"
FROM 
  review;

/*
Write a query to display a dish name, its price and category sorted by the dish name. Your results should have the following header:
---------------------------------
| dish_name	| price |	category  |
---------------------------------
*/
SELECT 
  dish.name AS "dish_name",
  categories_dishes.price AS "price",
  categories_dishes.category_id AS "category"
FROM 
  dish
INNER JOIN
  categories_dishes
    ON dish.id = categories_dishes.dish_id
ORDER BY dish.name;

/*
Instead of sorting the results by dish name, type in a new query to display the results as follows, sorted by category name.
---------------------------------
| category |	dish_name |	price |
---------------------------------
*/
SELECT 
  categories_dishes.category_id AS "category",
  dish.name AS "dish_name",
  categories_dishes.price AS "price"
FROM 
  dish
INNER JOIN
  categories_dishes
    ON dish.id = categories_dishes.dish_id
ORDER BY category;

/*
Next, type a query that displays all the spicy dishes, their prices and category. The header should look like this:
---------------------------------------
| spicy_dish_name |	category	| price |
---------------------------------------
*/
SELECT 
  dish.name AS "spicy_dish_name",
  categories_dishes.category_id AS "category",
  categories_dishes.price AS "price"
FROM 
  dish
INNER JOIN
  categories_dishes
    ON dish.id = categories_dishes.dish_id
WHERE 
  dish.spice = true
ORDER BY dish.name;

/*
In a complete menu, there will be dishes that belong to more than one category. In our sample menu, only Chicken with Brocolli is assigned to two different categories - Luncheon Specials and Chicken. How do we query the database to find dishes that span multiple categories?
*/
SELECT 
  dish_id, 
  COUNT(dish_id) AS "dish_count"
FROM 
  categories_dishes
GROUP BY
  dish_id
ORDER BY 
  dish_id;

/*
Great work! Try to adjust the previous query to display only the dish(es) from the categories_dishes table which appears more than once.
*/
SELECT 
  dish_id, 
  COUNT(dish_id) AS "dish_count"
FROM 
  categories_dishes
GROUP BY
  dish_id
HAVING 
  COUNT(dish_id) > 1
ORDER BY 
  dish_id;

/*
Excellent! The previous two queries only give us a dish_id which is not very informative. We should write a better query which tells us exactly the name(s) of the dish that appears more than once in the categories_dishes table. 
*/
SELECT 
  COUNT(dish_id) AS "dish_count",
  dish.name AS "dish_name"
FROM 
  categories_dishes
INNER JOIN
  dish
    ON categories_dishes.dish_id = dish.id
GROUP BY
  dish_id,
  dish_name
HAVING 
  COUNT(dish_id) > 1
ORDER BY 
  dish_id;

/*
Our last task is an improvement on Task 11 which was to display the highest rating from the review table using an aggregate function, MAX(column_name). Since the result returned only one column, it is not very informative.

| best_rating |————- | 5.0 |(1 row)

It would be better if we can also see the actual review itself. Write a query that displays the best rating as best_rating and the description too.
*/

SELECT 
  review.rating,
  review.description
FROM
  review
WHERE
  review.rating = (
    SELECT 
      MAX(review.rating) 
    FROM
      review
  ); 