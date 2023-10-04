/* Replace with your SQL commands */
ALTER TABLE actor
ADD COLUMN age integer DEFAULT floor(random() * (50 - 18 + 1) + 18)::integer;

