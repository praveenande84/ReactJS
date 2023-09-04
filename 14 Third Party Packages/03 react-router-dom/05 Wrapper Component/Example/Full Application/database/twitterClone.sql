
/* -----> See Tables <----- */

---  check all tables in Database
SELECT
    name, sql
FROM sqlite_master
    WHERE
        type='table';


--- user table
SELECT
    *
FROM
    user;

### follower table
SELECT
    *
FROM
    follower;


---  tweet table
SELECT
    *
FROM
    tweet;


---  reply table
SELECT
    *
FROM
    reply;


---  reply like
SELECT
    *
FROM
    like;


