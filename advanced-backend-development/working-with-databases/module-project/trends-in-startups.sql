/* 
Getting started, take a look at the startups table:
*/
SELECT * FROM startups;

/*
Calculate the total number of companies in the table.
*/
SELECT COUNT(*) FROM startups;

/*
We want to know the total value of all companies in this table.
*/
SELECT SUM(valuation) AS 'Highest Valuation' FROM startups;



/*
What is the highest amount raised by a startup?
*/
SELECT name, MAX(raised) AS 'Maximum Raised' FROM startups;

/*
Edit the query so that it returns the maximum amount of money raised, during ‘Seed’ stage.
*/
SELECT name, MAX(raised) AS 'Maxium Raised'
FROM startups
WHERE stage = 'Seed';

/*
In what year was the oldest company on the list founded?
*/
SELECT name, MIN(founded) AS 'Founded' FROM startups;

/*
Return the average valuation.
*/
SELECT AVG(valuation) AS 'Average Valuation' FROM startups;

/*
Return the average valuation, in each category.
*/
SELECT category, AVG(valuation) AS 'Average Valuation'
FROM startups
GROUP BY 1;

/*
Return the average valuation, in each category.
Round the averages to two decimal places.
*/
SELECT category, ROUND(AVG(valuation), 2) AS 'Average Valuation'
FROM startups
GROUP BY 1;

/*
Let's find out the valuations among different sectors:

Return the average valuation, in each category.
Round the averages to two decimal places.
Lastly, order the list from highest averages to lowest.
*/
SELECT category, ROUND(AVG(valuation), 2) AS 'Average Valuation'
FROM startups
GROUP BY 1
ORDER BY 'Average Valuation';

/*
What are the most competitive markets?
First, return the name of each category with the total number of companies that belong to it.
*/
SELECT category, COUNT(name) AS 'Number of companies'
FROM startups
GROUP BY category;

/*
Next, filter the result to only include categories that have more than three companies in them.
What are the most competitive markets?
*/
SELECT category, COUNT(*) AS 'Number of companies'
FROM startups
GROUP BY category
HAVING COUNT(*) > 3;

/*
Let's see if there's a difference in startups sizes among different locations:
What is the average size of a startup in each location?
*/
SELECT location, ROUND(AVG(employees)) AS 'No. Employees'
FROM startups
GROUP BY location;

/*
What is the average size of a startup in each location, with average sizes above 500?
*/
SELECT location, ROUND(AVG(employees)) AS 'No. Employees'
FROM startups
GROUP BY location
HAVING ROUND(AVG(employees)) > 500;
