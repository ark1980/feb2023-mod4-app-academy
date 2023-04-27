-- Q1
SELECT * FROM puppies;

-- Q2
SELECT name, age_yrs, weight_lbs FROM puppies;

-- Q3
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE id = 5;

-- Q4
SELECT name, age_yrs, weight_lbs, microchipped FROM puppies
WHERE microchipped = 1;

-- Q5
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE weight_lbs > 25;

-- Q6
SELECT name, age_yrs, weight_lbs, microchipped FROM puppies
WHERE weight_lbs > 25 AND microchipped = TRUE;