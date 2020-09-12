CREATE TABLE "to do"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (250) NOT NULL,
    "priority" VARCHAR (10) NOT NULL,
    "complete" BOOLEAN
   
);
INSERT INTO "to do"
    ("name", "priority", "complete")
VALUES
    ('Clean bathroom', 'high', 'false'),
    ('Work out', 'moderate', 'false');
    