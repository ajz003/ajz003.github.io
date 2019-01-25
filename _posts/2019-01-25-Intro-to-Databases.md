---
layout: post
title: Introduction to Databases (Part 1)
categories: [Database]
tags: [Programming, MOOC, database, SQL, relational algebra]
---

# Preface

So, I'm taking a course from Stanford's online Lagunita titled [Databases](https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about), the self-paced series. the Databases course is comprised of 14 "mini-courses." It is up to the learner which mini-courses to take, and you are welcome to mix and match. However, they do give suggestions on which set of mini-courses to take, depending on what your goals are:

* Do you just want to learn the bare basics and start doing SQL? Take their *Practical Relational Databases and SQL* pathway, which suggests two core mini-courses.

* Do you want to just learn about semistructured data? Take the *Semistructured Data* pathway, which suggests the *XML DATA* and *JSON DATA* mini-courses.

* Do you want the full database course? Take all of the mini-courses!

Personally, I'm following their **Relational Databases and SQL: Foundations and Practice** pathway, which includes:

* *Introduction and Relational Databases (the topic of this post)*
* Relational Algebra
* SQL
* Relational Design Theory
* Unified Modeling Language (UML)
* Indexes and Transactions
* Constraints and Triggers
* Views and Authorization
* On-line Analytical Processing
* Recursion in SQL

I'm going to give **a bunch of bullet points** and notes about what I've learned. Here we go!

------
# Introduction and Relational Databases

<img class="img-fluid img-adjust mx-auto d-block" src="https://lagunita.stanford.edu/c4x/DB/2014/asset/databases.png" />

* **DBMS stands for Database Management System.** They are:
    * Massive: On the scale of terabytes of data, daily
    * Persistent: Your data continues to exist after the programs have done executing upon it
    * Safe: Will survive through soft/hardware issues, won't cease to exist in power outages, resists malicious users
    * Multi-User: Many users can access and change the data **concurrently**
    * Convenient: **Physical data independence**, accessed by high level languages in a **declarative** way
    * Efficient: Can handle thousands of updates a second. "Performance, performance, performance."
    * Reliable: You better have 99.9999% uptime!

### Course Caveats

* Database application frameworks and middleware will not be discussed in the course.
* Not all data-intensive apps use DBMS (they can use text files, spreadsheets, etc.)

------
## Key Concepts

1. **Data Model**: Thought of as a set of records, XML, graph, etc.
2. **Schema vs. Data**
    * *Schema* sets up structure of the database: set up in the beginning, doesn't change much
    * *Data* is the actual data values in the schema: changes rapidly
3.  **Data Definition Language (DDL)**: Used to set up the schema
4. **Data Manipulation Language (DML)**: After schema is set up, DML is used to query and modify the database

------
## Key People

1. DBMS Implementer: Builds the system, not the focus of the course
2. **Database Designer**: Establishes the schema for the database. Can get *very* complicated
3. **Database Application Developer**: Makes programs that operate on the database
4. **Database Administrator**: 
    * Loads the data, gets the database running, and keeps it running
    * Manages tuning parameters
    * For large deployments, is the most important person in the entire process

------

# The Relational Model

* Popular
* Simple
* Queried with high-level languages
* Efficient

------

### Definitions

* A database is defined as a set of **relations** (or **tables**)
* Each relation has a set of named **attributes** (or **columns**)
* Each **tuple** (or **row**) has a value for each attribute
* Each attribute has a **domain** (or **type**)
    * Integers, strings, etc.
* **Schema:** Structural description of relations in database
* **Instance**: Actual contents at given point in time
* **NULL**: Special value for something unknown or undefined
    * Be careful when running queries over NULL values
* **Key**: Attribute of a relation where every value for that attribute is *unique*
    * Ex: Student IDs at a college, Social Security numbers, etc.
    * A set of attributes whose combined values are unique **is also a key**

------
# Querying Relational Databases

* **Steps**
    1. Design schema; create using DDL
    2. "Bulk load" initial data
    3. Execute queries and modifications to the database

------

* **Ad-hoc** queries in **high-level** languages
    * **Ad-hoc**: "Can pose queries that you didn't think of in advance, so you don't need to write programs for each query beforehand."
    * **High-level**: "You can write in a fairly compact fashion rather complicated queries and you don't have to write the algorithms that get the data out of the database."

------

* Some queries are easy to pose, some are harder.
* Some queries are easy to execute efficiently, some are harder.
* **Not correlated.** (Some easy to pose queries are hard to execute efficiently, and vice versa)

------

* **Queries return relations**
    * **Closed**: Getting back the same type of object that you query
    * **Compositionality**: When you can run a query over the result of a previous query

------

Query in English: *IDs of students with GPA > 3.7 applying to Stanford*. How do we translate this into the different query languages?

* **Query Languages:**
    * **Relational Algebra**: **Formal**
```
\project_{Student.ID} (
    \select_{GPA>3.7 and cName='Stanford'}
    (Student 
    \join Apply))
```
    * **SQL**: **Actual/Implemented**
```sql
SELECT Student.ID
FROM Student, Apply
WHERE Student.ID=Apply.ID
    AND GPA>3.7 
    AND college='Stanford'
```

------
# My thoughts

Not much to say, except that I'm excited to dig into databases!