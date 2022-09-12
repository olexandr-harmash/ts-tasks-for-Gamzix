CREATE TABLE currencies (
  id INT AUTO_INCREMENT,
  name VARCHAR(10),
  PRIMARY KEY (id)
);

INSERT INTO currencies (name) VALUES ("UAH");
INSERT INTO currencies (name) VALUES ("EUR");
INSERT INTO currencies (name) VALUES ("RUB");

CREATE TABLE currency_changes (
  id INT AUTO_INCREMENT,
  currency_id INT,
  created_at TIMESTAMP,
  rate DECIMAL (18, 6),
  FOREIGN KEY (currency_id) REFERENCES currencies(id),
  PRIMARY KEY (id)
);

INSERT INTO currency_changes (currency_id, rate) VALUES (1, 5);
INSERT INTO currency_changes (currency_id, rate) VALUES (1, 10);

--script get currency_changes by date if exist or closest less then date value
-- maybe use if - else in sql and check and return closest bigest then date value or return all results and finnd in program app
-- for simple stay string 35
SELECT id, created_at, rate 
FROM (
SELECT  currencies.id, 
        currency_changes.created_at, currency_changes.rate, currency_changes.currency_id
FROM    currencies   
        LEFT JOIN currency_changes 
            ON currencies.id = currency_changes.currency_id AND
                currency_changes.rate AND currency_changes.created_at
) AS result 
WHERE result.created_at = "2022-09-10 16:48:21" OR result.created_at < "2022-09-10 16:48:21" -- use date value maybe insert like template
ORDER BY result.created_at
LIMIT 1
--TESTING ON https://www.db-fiddle.com/f/5b4SdLVjdDV7N9bD6fRLrE/1