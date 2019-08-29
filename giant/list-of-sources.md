# List of sources

## Introduction

### PostgreSQL:

Database : peter_8excite

### Tables:

`deal` --> Table that includes all the information about deals sold by 8excite e.g. **title**, **selling_price**, **category** etc. This table is unique to **id** which is the deal id. There may be repeated **deal titles** but they are repeated because they have different **id**s.

`member` --> Table that includes all the user information about members within 8excite e.g. **gender**, **age_group** etc. This table is unique to **id** which is the member id. 

`transaction` --> Table that includes all the information on 8excite member's transactions (what deals they have purchased on 8excite) e.g. **payment_made_at_date**, **status** etc. This table is unique to **id** which is transaction id. 

`takaful_transaction` --> Table that includes information about Takaful/8excite members renewing their insurance policies e.g. **receipt_number**, **loyalty_account_id** (Takaful's member id), **receipt_date** etc. This table is unique to **receipt_number** which is the the receipt number of the policy renewed.

`takaful_users` --> An agreggated table created from `deal`, `member`, `transaction` and `takaful_transaction`. This includes user information about takaful/8excite members e.g. **total_policy** (total policies renewed), **email**, **total_deal_purchase** etc. This table is unique to how many deals a user purchases so there will be repeated columns. 

### Views:

`member_takaful_transaction` --> Contains columns **loyalty_account_id** and **is_takaful_member_before** to create labels on dashboards to see how many members were brought in to takaful by 8excite and how many members were brought in to 8excite by takaful. Created from **member**.

`member_transaction_isnull` --> Contains columns **loyalty_account_id** and **transaction_id** to create labels on dashboards to show the amount of takaful users who use 8excite but do not make transactions on 8excite. Created from **member**, **transaction** and **takaful_transaction**.

`no_policies_renewed_genuine_takaful` --> Contains a single column **Count** that represents the number of policies renewed by **Genuine Takaful/8excite users**. Created from **takaful_users**.

`no_takaful_genuine_users` --> Contains a single column **loyalty_account_id** that shows the list of genuine takaful/8excite users. Created from **takaful_users**.

`takaful_agents` --> Contains the user information of Takaful/8excite users. Used to validate hypothesis of the existence of Takaful agents and to create charts on dashboards. Created from **takaful_users**.

`takaful_agents_policies_year` --> Contains columns on the policies renewed across years e.g. **loyalty_account_id**, **year**, **total_policy**, **email**. Used to create a line chart on total policies renewed over years GIANT. Created from **member** and **takaful_transaction**.

`takaful_genuine_deals` --> The purpose of this view was to show purchase information of the deals bought by genuine takaful/8excite users. This information was used for further analysis. It contains columns such as **total_deals_bought_by_takaful** and **total_unique_users_takaful** etc. Created from **takaful _users**.

`takaful_genuine_insurance_type` --> Shows the proportion of types of insurance policies that these genuine takaful/8excite users renew. Created from **takaful_transaction**.

`takaful_genuine_user_info_ratio_deals` --> This contains user information about the users who purchased the top 10 deals in order of **ratio**. Ratio is defined as number of deals bought/number of unique users buying the deal. This was used to create a data matrix to show the list of users who purchased the deals based on the criteria. Created from **takaful_users**.

`takaful_intervals` --> Contains columns **interval** which represents the renewal interval of insurance policies of users and **count** which represents the number of members. This was used to create a histogram. Created from **takaful_transaction**

`takaful_policy_groups` --> Contains information on deals purchased by users and assigned groups based on how many policies renewed. Includes columns such as **loyalty_account_id**, **total_policy**, **title** (deal title) etc. Used to create a segment in a dashboard on analysis of users of different policy groups. Created from **takaful_transaction** and **takaful_users**.

`tealive_deals__margins` --> Contains information about all the tealive deals available and their margins. Used for more specific analysis on tealive. Created from **deal**.

`tealive_deals_aug2018onwards` --> Contains information about the different tealive deals purchased from August 2018 onwards. Used to create a line graph on the number of tealive deals purchased over months from Aug 2018 onwards. Created from **transaction**.

`top6_deals_march_margins` --> Contains info on the margins of the top 6 deals purchased in 8excite. Used to create a line graph to show the margins over time. Created from **deal**.

`top_10_deals_aug2018_may2019` --> Contains info on the top 10 deals purchased between August 2018 to May 2019. Used to create a pie chart to show the proportion of deals purchased. Created from **deal** and **transaction**.

`top_10_deals_mayonwards` --> Contains info on the top 10 deals purchased from May 2019 onwards. Used to create a pie chart to show proportion of deals purchased from May 2019 onwards. Created from **deal** and **transaction**.

`top_16_deals_dec2018_jan2019` --> Contains info on the top 16 deals purchased within 8excite from December 2018 to January 2019. Used to create a data matrix to showcase these top 16 deals given their sales start and end date. Created using **deal** and **transaction**.

`top_16_deals_proportions_marchonwards` --> Contains info on the top 16 deals from march onwards. Used to create pie charts to show the proportion of both the category and deals contributing to sales from March onwards. Created from **transaction** and **deal**.


### Excel:

`Stationery sales` --> Contains information about different stationary items sold among region and stores. Mainly used for documentation and examples.

`dhl-profit-growth` --> A self made example data-set containing info about the profit growth of DHL Malaysia. Mainly used for documentation and examples.