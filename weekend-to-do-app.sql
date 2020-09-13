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
    ('Create checklist', 'High', 'false'),
    ('Create server', 'High', 'false'),
    ('Build interface', 'High', 'false'),
    ('Clientjs logic', 'High', 'false'),
    ('Routes', 'High', 'false'),
    ('Commit often', 'High', 'false'),
    ('Ajax', 'High', 'false'),
    ('Sanitize inputs', 'High', 'false'),
    ('Style with CSS', 'High', 'false'),
    ('Relax', 'High', 'false');
    