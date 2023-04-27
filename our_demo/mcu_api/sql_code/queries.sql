-- SELECT * FROM characters;

-- SELECT name, alias 
-- FROM characters;

-- SELECT * FROM characters
-- WHERE popularity >= 80;

-- SELECT * FROM characters
-- WHERE name = 'Groot';

-- SELECT * FROM characters
-- WHERE affiliation = 'Avengers';

-- SELECT * FROM characters
-- WHERE affiliation = 'Avengers' OR popularity >= 80;

-- DELETE FROM characters
-- WHERE popularity < 35;

UPDATE characters
SET name = 'Robbie Reyes'
WHERE id = 9;

UPDATE characters
SET age = age + 100
WHERE name = 'Mantis';