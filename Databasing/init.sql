CREATE TABLE IF NOT exists flavors
(
    "address" text COLLATE pg_catalog."default" NOT NULL,
    "date" date,
    "location_index" integer NOT NULL,
    -- "Location_Name" text COLLATE pg_catalog."default" NOT NULL,
    "flavor" text COLLATE pg_catalog."default" NOT NULL
)
