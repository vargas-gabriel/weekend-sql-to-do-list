CREATE TABLE "to do"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (250) NOT NULL,
    "priority" VARCHAR (10) NOT NULL,
    "complete" VARCHAR (10)
   
);
INSERT INTO "to do"
    ("name", "priority", "complete")
VALUES
    ('Clean bathroom', 'high', 'no'),
    ('Work out', 'moderate', 'no');
    