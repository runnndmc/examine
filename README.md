

## Project Title 

Examine 

### Description

A medical expense tracker for caregivers and patients to track the status of their medical bills. Each bill will be sorted into service sections that will total up the bills owed in that specific service. The Examine app will also allow the user to add new bills recieved, update the payments made to each of the bills and render notes for followup for each bill listed. Once the user has paid their medical bill, they will have an option to delete it from their list and see the remaining balance of debt owed. 

## Wireframe

 [My App Wireframe](https://imgur.com/a/WkBgSqm)

  [My Desktop Wireframe](https://imgur.com/a/tS4DAhO)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ service-totals/
      |__ service-list
      |__ service
      |__ services-total
|__ new-bill/
      |__ form
      |__ inputs
      |__ button
|__ service-details/
      |__ doctor
      |__ due-date
      |__ owed
      |__ notes
      |__ delete-payment
      |__ button
|__ components/
      |__ Header.js
      |__ Greeting.js
      |__ ServiceTotals.js
      |__ NewBill.js
      |__ ServiceDetails.jsx
      |__ Footer.js
```


### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Greeting  | static |   n   |   n   | _The greeting will provide the users name._       |
|   Service Totals    | functional |   y   |   y   | _The service totals will render new totals depending on the bills paid._      |
| New Bill Form  | functional |   y   |   n   | _The new bill form will render new information to the service details section._                 |
|    Service Details    | functional |   y   |   y   | _The service details will show info about bill specifics._ |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add New Bill Form    |    L     |     2 hrs      |           |         |
| Create Header    |    L     |     .5 hrs      |           |         |
| Add Footer    |    L     |     .5 hrs      |           |         |
| Create Service Details with CRUD|    H     |     5 hrs      |         | 
| Create Service Totals     |    H     |     4 hrs      |           |         |    TBD     |
| TOTAL               |          |     12 hrs      |         |     TBD     |

<br>

###  API

[This is my Airtable API](https://airtable.com/invite/l?inviteId=inv16imWZ25vk6d5V&inviteToken=9cb6db50560a8a8fe9b6058ca9b154c318228be262c14eed68b8a3938a46d4d4).


## MVP

- Have Service Detail components that can be created, updated and deleted 
- Have a New Bill page that can update the total price due 
- Be able to delete bills that have been paid from the service details section

## Post-MVP
- Have a page with service totals
- Create a bar at the bottom of each service to represent amounts still due
- Make the delete button have a timer and have the button read 'paid' when clicked and then remove the list item


### SWOT Analysis

- Strengths: Passing props from App to children and grand children
- Weaknesses: Updating the state
- Opportunities: Add new CSS features
- Threats: Having a Service Balance section as well as a detailed balance section.

### Code Showcase


