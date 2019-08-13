## Advanced Embed

Advanced Embed is used when you want to restrict the data based on the parameters you set. The example use case I will be using is with stationary sales.

> When you have a dashboard that showcases the sales from the same company within different regions, you need embeded links to showcase the sales to specific branches within those regions. It does not make sense to show a branch within the east region the sales data of the west region because they wouldn't be interested in the information. Thus, we use advanced parameters to show our targeted users information they would be interested in. I will be using more examples such as item type and time to showcase the filtering system of advanced embed.

## Filtering by Region

Proceed with Advanced Embedding by clicking on the **Proceed to Advanced Embed Configuration** button.

![Step1-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-1.png)

A pop-up window should appear. Click on the **add** button to start setting your parameters.

![Step2-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-2.png)

First, fill in the **Filter Name**. In this case I want to filter by region to showcase info for the specific region I want.

![Step3-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-3.PNG)

Select the column you are filtering in order to generate the **Embed url**. In this case, it is "Region" because that is what we are filtering by.

![Step4-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-4.PNG)

Click the **generate** button to proceed with your advanced embedding.

![Step5-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-5.PNG)

The advanced embed URL's will then be generated based on the parameters you chose. In this case, we have 5 regions to show (North, South, East, West, Central). Thus, there are 5 embed links to show data specific to each region because that is what we chose to filter by. Copy and paste this link into your browser to view the dashboard with the given parameters.

![Step6-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-6.PNG)

The charts from the dashboard will be shown when you access the Advanced Embed URL. Data availability depends on the advanced embed parameters that you set for the dashboard.

### Data as Viewed in Dashboard

![Step7-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-before.PNG)

### Data as Viewed via Advanced Embed Links

![Step8-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-after.PNG)

As you can see, all the charts have changed to show the given info only in the **West region** based on the filtering we chose of our advanced parameters. The other embedded links will show the information displayed on the charts within different regions. 

## Filtering by Region & Item

If your targeted audience only wants to see data related to a specific region and a specific item being sold, they can configure the filters like this:

When adding a new advanced embed parameter, add your **Filter Set Name** according to everything you want to filter by. In this case, it is both Item and Region.

![Step9-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-7.PNG)

Since you need to filter the data by item, you have to add a parameter to filter by the item you want your targeted audience to view. In this case, we want the audience to view data related to "Erasers" only. We choose the column (Item) and the parameter (which is our chosen column) and the Default value (which is the item we want to filter by).

![Step10-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-8.PNG)

After this, create the unique URL's by value to get your embedded links. Since we want to filter by region, we choose to create URLs by **region**.

![Step11-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-4.PNG)

Do not forget to click the **generate** button!

![Step12-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-5.PNG)

This gives us the 5 embed links that is filtered by each region (North, South, East, West, Central). Each link is specified to different regions but only includes data about erasers being sold.

![Step12-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-9.PNG)

The normal dashboard before shows us the original data. The embedded dashboard shows us data filtered by the west region and by the item erasers. If our targeted audience was a branch store in the west and only cared about the sales of erasers, we would provide them this embedded link.

### Data as Viewed in Dashboard
![Step13-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-before.PNG)

### Data as Viewed via Advanced Embed Links
![Step14-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-after1.PNG)


## Filtering by Region, Item & Month

When adding an advanced embed filter set, since we are filtering by region, item & month, let's fill in the **Filter Set Name** by the given filters.

![Step15-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-10.PNG)

Add your parameter by what item you want to filter by. In this case, we want to filter by "Erasers" only.

![Step16-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-11.PNG)

Since we want to filter by month, we have to add a constant value. In this case, if our targeted audience only wants to see data from January to September, we would filter it by choosing the column **Month** and add a filter condition to exclude data from Oct, Nov and Dec.

![Step17-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-12.PNG)

Again, we are filtering the data also by region. Hence, we want to create the unique URL's by the column **Region**.

![Step18-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-4.PNG)

The advanced embed links shows only data linked to "Erasers" for the time period of January to September, restricted by each Region (North, South, East, West, Central). As you can see, data shown on the actual *Dashboard* and via the *Embed Dashboard* links is clearly different given the filters we chose. The embed link would be provided to an audience who would only be interested in data of overall sales of erasers in the selected region within the time period of January to September.

## Data as Viewed in Dashboard

![Step19-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-before.PNG)

## Data as Viewed via Advanced Embed Links

![Step20-advanced](images/embedding-giant-advanced-dashboard/advanced-embed-after2.PNG)
