/*
Hacker News Moderating
Recent studies have found that online forums tend to be dominated by a small percentage of their users (1-9-90 Rule).
Is this true of Hacker News?
Is a small percentage of Hacker News submitters taking the majority of the points?
First, find the total score of all the stories.
*/
SELECT SUM(score) AS 'Total Score'
FROM hacker_news;

/*
Next, we need to pinpoint the users who have accumulated a lot of points across their stories.
Find the individual users who have gotten combined scores of more than 200, and their combined scores.
GROUP BY and HAVING are needed!
*/
SELECT user, SUM(score) AS 'Total Score'
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200;

/*
Then, we want to add these users’ scores together and divide by the total to get the percentage.
Add their scores together and divide it by the total sum. Like so:
`SELECT (1.0 + 2.0 + 3.0) / 6.0;`
So, is Hacker News dominated by these users?
*/
SELECT (517 + 309 + 304 + 282) / 6366.0 AS 'Percentage of top contributers';

/*
Oh no! While we are looking at the power users, some users are rickrolling — tricking readers into clicking on a link to a funny video and claiming that it links to information about coding.
The url of the video is:
https://www.youtube.com/watch?v=dQw4w9WgXcQ
How many times has each offending user posted this link?
*/
SELECT user, COUNT(*) AS 'No. Ricktrolls'
FROM hacker_news 
WHERE url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
GROUP BY user;

/*
Hacker News stories are essentially links that take users to other websites.
Which of these sites feed Hacker News the most:
GitHub, Medium, or New York Times?
*/
SELECT CASE
  WHEN url LIKE '%github%' THEN 'GitHub'
    WHEN url LIKE '%medium%' THEN 'Medium'
    WHEN url LIKE '%nytimes%' THEN 'NY Times'
    ELSE 'Other'
  END AS 'Source'
  , COUNT(*) AS 'No. Stories'
FROM hacker_news
GROUP BY 1;

/*
Every submitter wants their story to get a high score so that the story makes it to the front page, but…
What’s the best time of the day to post a story on Hacker News?
*/
SELECT strftime('%H', timestamp) AS 'Hour', 
  ROUND(AVG(score)) AS 'Average Score',
  COUNT(*) AS 'No. of stories'
FROM hacker_news
WHERE Hour IS NOT NULL
GROUP BY 1;
