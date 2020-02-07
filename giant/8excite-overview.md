# 8excite overview

## Introduction

8excite is a company that sells vouchers/coupon codes to consumers. They only have a number of merchants that span over 5 categories: Beauty & Wellness, Food & Beverages, Leisure & Service, Shopping and Getaways. 8excite uses a point rewarding system that rewards users when coupons are purchased. This is a cost to 8excite as users can buy coupons and get discounts with these points. 

## Details:

- 8excite are very dependant on merchants as their performance depends on these merchants' performance. 8excite needs to have very good relationships with merchants who contribute most to their revenue/sales as they can potentially lose a large part of their success if these merchants decide to pull out.

- 8excite has a wide range of competitors. Consumers who already receive coupons and discounts from their preferred merchants have no reason/less incentives to use 8excite.

- 8excite competes with their own merchants who have their own loyalty program. For example, why would consumers of Fish & Co use 8excite to get discounts when they can just get their discounts at Fish & Co themselves.

- 8excite should aim to get the merchants who are the most popular but if the merchants are already doing well, using 8excite as a marketing platform is just a waste of resources.

- 8excite comes up with the prices of deals by making competitor comparisons and negotiating as 8excite also wants to maximise the gain from selling a coupon.

- 8excite runs promotional campaigns twice a week and is planned two months in advance. One of these campaigns are usually run on the 8th of every month whilst the other campaign is more for bigger events e.g. (Merdeka). Smaller campaigns are run every week e.g. (travel campaign)

- 8excite shares a 6 months - 1 year contract with their merchants.

- Within 8excite's consumer base, there exists both genuine users and resellers. Resellers are defined as those who purchase large amounts of the same coupon within a specific amount of time. Of course it depends what product this coupon is selling.

## Relationship with Takaful Malaysia

- Takaful Malaysia is an insurance company that is using 8excite as a marketing tool to get more people to purchase/renew insurance policies from them.

- Takaful provides 5 products: Motor, Travel, Life, Medical, Family insurance.

- Takaful Malaysia is known best for Motor insurance.

- Takaful members gain by receiving 8excite points everytime they renew a policy.

- Takaful Malaysia gains from getting members from 8excite's platform and more exposure to their insurance deals.

- 8excite gains from getting Takaful Users using their points and buying deals on their own platform.

- Between Takaful and 8excite's consumer base, there are both genuine users and Takaful agents. We classify these genuine users who buy 8excite deals in 2019 and own less than 3 types of policies. Takaful Agents are defined by the amount of policies they renew in a specified amount of time given the renewal interval period of the insurance type.

- Takaful users **do not use 8excite's platform** to buy insurance policies. Takaful gets a list of users who are both Takaful and 8excite users that have renewed policies. Takaful gives this list to 8excite to get them to reward these users with points. 

- When users click on Takaful deals on 8excite, they are redirected to Takaful's website. This means they purchase/renew Takaful policies on Takaful's website.

## Data Sources (All available on pgAdmin):

**deal** - Contains all the information about the details of 8excite deals including deal title, deal id, merchant name, selling price etc. 

**member** - Contains all the information about the members within 8excite's consumer base e.g. name, email, gender etc.

**transaction** - Contains all the information about the **transactions** 8excite members have made e.g. Time payment was made (payment_made_at_datetime), member id, deal title.

**takaful_transaction** - Contains the information about policies renewed by Takaful members e.g. Takaful member ID (loyalty_account_id), receipt date, type of insurance etc.








