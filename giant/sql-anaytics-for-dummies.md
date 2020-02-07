# Using SQL for Dummies

## Introduction

This guide will show the basics of SQL using pgAdmin, agreggating the data to make it suitable for GIANT and the process of analysis when diving through the data. PostgreSQL is a powerful tool that allows creation of tables and views to help make charts on GIANT. Learning how to use this tool plays a key part in preparing the data for presenting.

## Basic Operators to know

### `Select` operator

 This operator allows the user to retrieve the data from a table in the database. Using **Select** can be used to retrive data from specific columns within your table or the entire table.

Example Syntax : 

`Select` **column_name** `from` **table_name** --> Retrieves data from a specific column within the table.

`Select` **column_name1**, **column_name2** `from` **table_name** --> Retrieves data from specific columns within the table.

`Select`  *  `from` **table_name** --> Retrieves data from all the columns within the table. 

Note: * in sql is known as **all**.

---

### `Where` operator

This operator allows the user to retrieve **specific** information from a table that only includes the information based on the `where` clause.

Example Syntax:

`Select` **column_name** `from` **table_name** `where` **condition** --> This will retrieve information from a column given the condition set.

`Select` * `from` **table_name** `where` **condition** --> This will retrieve information from all the columns given the condition set.

More specific example:

Say there are four columns in the table called **transaction**: 

- **type_of_product_bought** (string)

- **units_bought** (int) 

- **gender** (string)

- **name** (string)

What if the user only wanted to see information for male users?

`Select` * `from` **transaction** `where` **gender** = 'Male' --> Retrieves data from all the columns in **transaction** but only includes data about users who are of **gender**: Male.

In this case there is **gender** = 'Male' in quotation marks because **gender** is a type *string*. This will be different for other cases as it depends on the type of the column. There are also other operators that can be used such as: 

Greater than : **>**

Less than : **<**

Greater and equals to : **>=**

Less and equals to : **<=**

`Like` --> more information below

`in` --> more information below

`Between...and` --> more information below

---

### `Like` operator

This operator allows the user to retrieve data where a column value is similar to a specified character(s).

Example syntax:

`Select` **column_name** `from` **table_name** `where` **column_name** `like` 'value%' --> Finds values in the column that begin with **value**.

`Select` **column_name** `from` **table_name** `where` **column_name** `like` '%value' --> Finds values in column that ends with **value**.

`Select` **column_name** `from` **table_name** `where` **column_name** `like` '%value%' --> Finds values in column that includes **value**.

Note: **value** can represent **any** value.

More specific example:

`Select` * `from` **members** `where` **first_name** `like` 'S%' --> Retrieves all the columns from **members** but only includes data about users with a **first_name** that starts with S.

---

### `Between...And` operator

This operator allows the user to compare data in a range of values.

Example syntax:

`Select` **column_name** `from` **table_name** `where` **column_name** `between` value `and` value.

More specific example:

`Select` * `from` **members** `where` **age** `between` 20 `and` 30 --> Retrieves all columns from **members** but only includes data about members that are between the ages of 20 and 30.

---

### `In` operator

This operator allows the user to compare a column with more than one value. This is particularly useful when you have multiple values you need to extract data with.

Example syntax:

`Select` **column_name** `from` **table_name** `where` **column_name** `in` value.

More specific example:

`Select` * `from` **members** `where` **email** `in` ('gmail', 'yahoo') --> Retrieves all the columns from **members** but only includes data about members who have emails from gmail and yahoo.

---

### `Order by` operator

This operator is used within a `select` statement to sort results in descending or ascending order. This is useful when wanting more organised outputs to see the data more clearly.

Example syntax:

`Select` **column_name** `from` **table_name** `where` condition `Order by` **column_name** `desc` --> Orders data by **column_name** in descending order.

`Select` **column_name** `from` **table_name** `where` condition `Order by` **column_name** `asc` --> Orders data by **column_name** in ascending order.

More specific example:

`Select` * `from` **members** `where` age > 30 `Order by` **salary** Desc --> Retrieves all the columns from **members** but only includes data about users who are older than 30 ordered by their salary in descending order.

---

### `Group by` operator

This operator is used to group and organise the data together. This is useful when wanting more organised outputs to see the data more clearly.

Example syntax:

`Select` **column_name** `from` **table_name** `where` condition `group by` **column_name** 

More specific example:

`Select` * `from` **members** `group by` **age_group** --> Retrieves all the columns from **members** with the information of users and groups them by their age group e.g. millenials.

---

### `Create` operator

This operator can be used to create different views and tables within pgAdmin. 

Views are virtual tables where you can insert specific portions of data from tables within your database. This is particularly useful when creating charts on GIANT.

`Create` View **view_name** `as` (`Select` **column1**, **column2** `from` **Table_name**) --> Creates a view with columns selected from a given table.

More specific example:

`Create` View **profit_line-chart** `as` (`Select` **profit**, **year** `from` **company**) --> Creates a view named **profit_line-chart** from the columns **profit** and **year** from table: **company**.

It is useful to create views when making charts instead of connecting to the table source directly if the user does not want to use cross-chart to avoid confusion for the audience or if there is very specific data needed to create this chart.

---

### `Update` operator

This operator is used to modify existing rows within a given table.

Example syntax:

`Select` **table_name** `set` **column_name1** = value1, **column_name2** = value2 `where` condition

More specific example:

`Select` **members** `set` **age_group** = **birth_year** --> Changes the rows in **age_group** to replicate the same values in **birth_year**.

Why would we want to do this? If we wanted to create a derived column **age_group**. we need to derive it from **birth_year** first. Then we can combine the use of `Update` and `Case` in order to update the values in the column accordingly based on the set conditions.

--- 

### `Case` operator

This operator goes through conditions and then returns a value when the first condition is met. This operator is useful when changing values of a derived column.

Example syntax:

`Case` 
    `when` condition1 `then` result 1
    `when` condition2 `then` result 2
`End`

More specific example:

`Update` **members**

`Set` **age_group** = `Case` 

`When` **birth_year** >= 1981 `and` <= 1996 `then` 'Milennial' 

`End` 

This changes the values in the rows of column **age_group** to 'Milennial' given the condition that the user is born between 1981 and 1996 within the table **members**.


---

### `Inner Join` operator

This operator joins two tables if the records have matching values in both tables. This is especially useful when the columns needed are in different tables. Joining the tables help bring the columns together for both creating charts and further analysis.

Example syntax:

`Select` **column_name(s)** `from` **table_1** `inner join` **table_2** `on` **table_1.column_name** = **table_2.column_name**

More specific example:

`Select` **members.full_name**, **transactions.number_products_bought** `from` **members** `inner join` **transactions** `on` **members.member_id** = **transactions.member_id** 

- **full_name** is in the table **members**.

- **number_products_bought** is in the table **transactions**. 

This retrieves the two columns: **full_name** and **number_products_bought** from the two separate tables and **joins** them based on a similar column that contains similar data. This allows the user to view **full_name** and **number_products_bought**.  '

Note: `Inner join` only selects records that have matching values in both tables.

---

### `Left Join` operator

This operator returns all the records from the left table (table_1) and the matched records from the right table (table_2). If there is no match, the result will be null.

Example syntax:

`Select` **column_name(s)** `from` **table_1** `left join` **table_2** `on` **table_1.column_name** = **table_2.column_name**

Using `left join` is dependant on the data and what the objective is.

More specific example:

`Select` **members.full_name**, **transactions.number_products_bought** `from` **members** `left join` **transactions** `on` **members.member_id** = **transactions.member_id** 

In this case, this will retrieve **full_name** and **number_products_bought** but will include records of all the user's full names and the number of products bought even if there is a lack of data. E.g. If **John Crow** does not have the information of the number of products bought, the **joined** table will include **John Crow** but the number of products bought will be **null**.

---

### `Right Join` operator

This operator returns all the records from the right table (table_2) and the matched records from the left table (table_1). If there is no match, the result will be null.

Example syntax:

`Select` **column_name(s)** `from` **table_1** `right join` **table_2** `on` **table_1.column_name** = **table_2.column_name**

More specific example:

`Select` **members.full_name**, **transactions.transaction_id** `from` **members** `right join` **transactions** `on` **members.member_id** = **transactions.member_id**  

In this case, this will retrieve **full_name** and **transaction_id** but will include all the records from the **transactions** table, even if there are no matches in the **members** table. The joined table might include all the transaction id's but if there is no **full_name** that matches the row, it will be **null** instead.

---

## Sql functions

`Count` ( )

Example syntax:

`Select` `count`(**column_name**) `from` **table_name** `where` *condition* --> Counts the number of rows in a column within a table.

More specific example:

`Select` `count`(**transactions_id**) `from` **transactions** `where` **transaction_status = 'Success'** --> Counts the number of transactions which were succesful.

---

`Avg` ( )

Example syntax:

`Select` `Avg`(**column_name**) `from` **transactions** `where` *condition* --> Returns the average value of a numeric column.

More specific example:

`Select` `Avg`(**units_purchased**) `from` **transactions** --> Returns the average number of units purchased.

---

`Sum` ( )

Example syntax:

`Sum`(**column_name**) `from` **table_name** `where` *condition* --> Returns the sum value of a numeric column.

More specific example:

`Sum`(**amount**) `from` **transactions** `where` **year = 2019** --> Returns the sum of the amount (total revenue) within the year of 2019.

---

## How to use the data when using GIANT

When using GIANT, it is very important to understand the structure of the data when making charts within dashboards. GIANT already has many built-in functions that helps aggregate data.

If GIANT is unfamiliar, please refer to [giant-for-beginner.md](giant-for-beginner.md)

If creating charts within GIANT is unfamiliar, please refer to the [visual folder](../visual) for access to guides on how to create different charts.

[using-line-chart.md](../visual/using-line-chart.md) includes examples of using two different data structures which will give a better idea of data aggregation in GIANT.

---

## Process of analysis

When performing any type of analysis using sql, it is always important to explore the data in order to back up / create the insights. An example will give a clearer picture on the process.

Table:

**user_transactions** 

Columns:

**name**

**deal_title**

**category**

**number_purchased**

**points_balance**

**points_used**

**year_purchased**

Say we have a table called **user_transactions** that contains information about deals that users buy. First we start very general. 

- `Select` `count`(**name**) `from` **user_transactions**

- `Select` `count`(**deal_title**) `from` **user_transactions**

We start by finding out how many users are in the consumer base followed by the number of deals purchased by the users.

-  `Select` `count`(**deal_title**), **category** `from` **user_transactions** `group by` **category** `order by` `count`(**deal_title**) `desc`

Then, we find out which category is the most popular among the users.

-  `Select` **deal_title**, `count`(**deal_title**) `from` **user_transactions** `group by` **deal_title** `order by` `count`(**deal_title**) `desc`

Then, we find out what are the most popular deals.

-  `Select` **name**, **points_balance**, **points_used** `from` **user_transactions** `order by` **point_balance** `desc`

The next step is looking at the top 10 users who have a **high point balance but a low amount of points used**. We want this information so we can think of ways to get these users to use their points more to buy more deals. Here, our analysis becomes more specific. Say the query outputs a list and we pick out users from our data to fit the criteria:

- John 
- Jim
- Alex
- Gary
- Tim
- Daniel
- Cody
- Drake
- Karim
- Zac

Given this list of users, we want to find out what type of deals they purchase.

- `Select` * `from` **user_transactions** `where` **name** `in` (John, Jim, Alex, Gary, Tim, Daniel, Cody, Drake, Karim, Zac)

This will then give the user information from all the columns of the table for the top 10 users.
Based on the information we have collected so far, we can now come up with an insight. Based on the deal categories these users purchase we can push the top 10 popular deals by category to them. This will hopefully get these users who have a high point balance and low point usage to purchase more deals and use their points.

## Important points

- This is just one example of analysis. The process is heavily dependant on the data that is available.

- The general idea is to start the analysis from a bigger picture and then boiling it down to specifics. 

- What helps in continuing the analysis is to keep asking follow up questions related to the information the last query outputted. **What is the next step?** and **How does this contribute to the analysis?**

- When using PostgreSQL, **always** try to **minimize** the number of tables created when making charts on GIANT. Alternatively, if you need to make charts that require a lot of distinct data, it is better to create multiple views by extracting data from the tables available rather than creating multiple tables.







