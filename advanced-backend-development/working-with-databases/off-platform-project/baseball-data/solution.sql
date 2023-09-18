/*
HEAVIEST HITTERS AWARD
This award goes to the team with the highest average weight of its batters on a given year.
*/
SELECT ROUND(AVG(people.weight), 0) as "Average Weight",
       teams.name,
       batting.yearid
FROM batting
    LEFT JOIN public.people
        ON people.playerid = batting.playerid
    RIGHT JOIN public.teams
        ON batting.team_id = teams.id
WHERE batting.yearid = 2011 -- Select your year
GROUP BY batting.yearid, teams.name
ORDER BY "Average Weight" DESC
LIMIT 1;

/*
SHORTEST SLUGGERS
This award goes to the team with the smallest average height of its batters on a given year. This query should look very
similar to the one you wrote to find the heaviest teams.
*/
SELECT ROUND(AVG(people.height), 2) as "Average Height",
       teams.name,
       batting.yearid
FROM batting
    LEFT JOIN public.people
        ON people.playerid = batting.playerid
    RIGHT JOIN public.teams
        ON batting.team_id = teams.id
WHERE batting.yearid = 2011 -- Select your year
GROUP BY batting.yearid, teams.name
ORDER BY "Average Height" ASC
LIMIT 1;

/*
BIGGEST SPENDERS
This award goes to the team with the largest total salary of all players in a given year.
*/
SELECT sum(salaries.salary), salaries.yearid, teams.name
FROM salaries
    RIGHT JOIN public.teams
        ON salaries.team_id = teams.id
WHERE salaries.yearid = 2011 -- Select your year here
GROUP BY salaries.yearid, teams.name
ORDER BY 1 DESC
LIMIT 1;

/*
MOST BANG FOR THEIR BUCK IN 2010
This award goes to the team that had the smallest “cost per win” in 2010. Cost per win is determined by the total salary
of the team divided by the number of wins in a given year. Note that we decided to look at just teams in 2010 because
when we found this award looking across all years, we found that due to inflation, teams from the 1900s spent much less
money per win. We thought that looking at all teams in just the year 2010 gave a more interesting statistic.
*/
SELECT teams.name,
       SUM(salaries.salary) AS "total_salary",
       teams.w,
       (SUM(salaries.salary) / teams.w) AS "salary_per_win"
FROM salaries
         LEFT JOIN teams
                   ON salaries.team_id = teams.id
WHERE salaries.yearid = 1985 -- Select your year here
GROUP BY salaries.yearid, teams.name, teams.w
ORDER BY "salary_per_win" ASC
LIMIT 1;

/*
PRICIEST STARTER
This award goes to the pitcher who, in a given year, cost the most money per game in which they were the starting
pitcher. Note that many pitchers only started a single game, so to be eligible for this award, you had to start at least
10 games.
*/
SELECT p.namegiven, pitching.yearid, pitching.teamid, pitching.gs, s.salary, sum(s.salary / pitching.gs) as "cost per start"
FROM pitching
    RIGHT JOIN public.salaries s
        ON pitching.playerid = s.playerid
    LEFT JOIN public.people p
        ON pitching.playerid = p.playerid
WHERE pitching.gs >= 10 AND pitching.yearid = 2010
GROUP BY pitching.playerid, pitching.yearid, pitching.teamid, pitching.gs, s.salary, p.namegiven
ORDER BY "cost per start" DESC;