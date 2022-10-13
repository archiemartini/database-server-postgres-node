-- psql -h 127.0.0.1
CREATE DATABASE database_server_test;
-- \q
-- psql database_server_test
CREATE TABLE keyvaluepairs(id SERIAL PRIMARY KEY, key VARCHAR(60), value VARCHAR(60));
INSERT INTO keyvaluepairs (key, value)
  VALUES ('fruit', 'apple'), ('fruit', 'banana');