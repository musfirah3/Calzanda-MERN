# Calzanda: A MERN Stack Ecommerce Shopping Mart

Calzanda: A MERN Stack Ecommerce Shopping Mart" is a comprehensive online shopping platform designed to cater to the needs of modern shoppers. This project brings together the power of the MERN (MongoDB, Express.js, React, Node.js) stack to create a seamless and user-friendly shopping experience. 

### Building Dynamic Web Applications:

 Powering Frontend with React.

 Backend with Express.

 Seamless Deployment using Cyclic Hosting.

#### Key Features:

Product Catalog: Browse through an extensive collection of products, including furniture, accessories,grocery items, and more.

User Accounts: Create personalized accounts to track order history,and manage shipping addresses.

Secure Checkout: Experience a secure and straightforward checkout process, with multiple payment options available.

Product Recommendations: Benefit from personalized product recommendations based on browsing and purchase history.

Admin Dashboard: Admins can manage products, inventory, orders, and user accounts through a dedicated dashboard.



## Demo

https://hungry-slacks-duck.cyclic.cloud/

### Frontend Routes
Frontend Routes
#### Users Routes
1.	Home Page
Path:'/'

Component:Home Page

Description: A Landing page of the application

2.	All Products Page

Path: '/products'

Component: A Product page

Description: List all available product in our platform

3.	Categories Page

 Path : '/products/category/:CategoryName'

Component: Category Page

Description:List of all items characterized  according to its category

4.	Single Product Page

Path:'/products/:productID'

Component: Single Product page

Description:Experience in-depth details, high-quality images, and customer reviews on the dedicated product page

5.	Profile Page

Path:'/checkout'

Component: Profile card

Description:Displays user information

6.	Not Found Page

  Path:'*
  Component: Error Page
  Description: Encounter our error page, a guiding light through unexpected turns

#### Guest Routes

1.	Guest Home Page

Path:'/'

Component:Home Page

Description: A Landing page of the users which are not logged in

2.	Categories Page

 Path : '/category-guest'
 
Component: Category Page

Description:List of all items characterized  according to its category for the guest users

3.	Login page

Path : '/login'

Component: Login Page

Description:To  give access users to personalized shopping experience

4.	SignUp page
Path : '/signIn'

Component: SignUp Page

Description:To create personalized account and embark on a tailored shopping journey.

5.	Navigator
  Path : '*'

  Component:Login Page

   Description:Navigate the guest to login page  to access personalized  account

#### Admin Panel

1.	 Home Page
Path:'/'

Component:Home Page

Description: A Landing page of the admin 

2.	Categories Page
 Path : '/category'

Component: Category Page

Description:List of all items characterized  according to its category for the admin

3.	Calendar
Path : '/calendar'

Component: calendar page

Description:One-stop calendar management hub for efficient scheduling and oversight in the admin panel

4.	SignUp page
Path : '/board'

Component: Trello Page

Description:One-stop control center for managing tasks, projects, and collaborations seamlessly with the Trello board page in the admin panel.

5.	Navigator
  Path : '*'

 Component:Home Page

 Description:Navigate the admi to Home page  




## API Reference

#### Users
##### Login User

```http
  POST /api/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Users email |
|`password`| `string`|**Required**. Users password
**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### SignUP

```http
  POST /api/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Username to sigin |
| `email`      | `string` | **Required**. Email to sigin |
| `password`      | `string` | **Required**. Username to sigin |

**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Get User by Id

```http
  GET /api/user/:userid
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to get information of a user |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`500`| `Internal Server Error`|

#### Get user's information from email

```http
  GET /api/userbyemail/:email
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email to find information of a user |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Delete User

```http
 DELETE /api/user/:userid
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to remove particular users information |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Update User

```http
 PUT /api/user/:userid
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to remove particular users information |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Products
#### All Products

```http
  POST /api/get-all-products
```


#### Get Product by Id

```http
  GET /api/product/:_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to get information of a products |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`500`| `Internal Server Error`|

#### Add Product

```http
  POST /api/product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Product Name |
| `description`      | `string` | **Required**. Description of a product  |
| `price`      | `Number` | **Required**. Price of a product |
| `discount percentage`      | `Number` | **Required**. To give discounts to the buyer |
| `category`      | `string` | **Required**. Category of a product |
| `brand`      | `string` | **Required**. Brand of a product |
| `thumbnail`      | `string` | **Required**. To ensure that is the product is in stock or not |
| `images`      | `Array` | **Required**. Multiple images of aproduct |



**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Delete Product

```http
 DELETE /api/product/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to remove particular products information |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Update Product

```http
 PUT /api/product/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to remove particular products information |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|

#### Get Product by category

```http
  GET /api/product-by-category/:category
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Category to get information of a product |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`500`| `Internal Server Error`|

#### Get Product by Brand

```http
  GET /api/-productby-brand/:brand
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `brand`      | `string` | **Required**. Brand name to get information of a products |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `200` | `The request has succeeded.` |
|`500`| `Internal Server Error`|

#### Orders
#### All Orders

```http
  POST /api/get-all-orders
```
#### Place Orders

```http
  POST /api/create-order
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `items`      | `string` | **Required**. Selected products for order placement |
| `customerAddress`      | `string` | **Required**. Address of a user to delievered order  |
| `totalBill`      | `Number` | **Required**. Price of a total items with DC |
| `customerContact`      | `Number` | **Required**. To call the customer  |
| `customerName`      | `string` | **Required**. To get information of a customer |
| `customerEmail`      | `string` | **Required**. For latest update |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
| `201` | `The request has succeeded.` |
|`500`| `Internal Server Error`|

#### Track Orders

```http
 GET /api/track-order/:_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `Number` | **Required**. Id to track the order |


**Responses**
| Status Code | Response  |
| :--------   | :---------- |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|


#### To Send Mail

```http
 PUT /api/place-order
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email to give information about the placed order |
| `customerName`      | `string` | **Required**. To get personal information |

**Responses**
| Status Code | Response  |
| :--------   | :---------- |
|`404`| `Requested page is not available`|
|`500`| `Internal Server Error`|
