# Mallory Furniture

![Mallory Furniture Logo](mockups/mallory-furniture-logo.png)

## Description
Mallory Furniture is a local vintage furniture retailer with a constantly changing selection. Their showroom has limited floor space so they initially wanted to build an ecommerce website to show all their inventory, including items in the warehouse.

They have obtained mockups for the site's design, and they have recently built a back-end API that contains their current listings. They now need to implement the front-end functionality. As a forward-looking company, they are interested in building the front-end in React to keep their views orderly and easily modifiable.

## Objectives

#### Learning Objectives
After completing this assignment you should be able to:
- Build a front-end React application from zero using `create-react-app`.
- Declare and style components in React.
- Use React methods to
  - Fetch data from a remote API and pass it as props.
  - Apply event listeners and manage state in a single React component.
  - Manage state across multiple React components.
- Use the React Router to determine what view is rendered and to navigate URLs.
- Query for data from an API in your React application.
- Manage events using React state in single components and across multiple components

## Project Requirements Summary
> **Make a React application that handles routes, fetches data, and renders components for Mallory Furniture's Front End.**

The site map should be structured like this:

```
/
/about
/terms
/all-products
/product/{product-id}
/category/{category-type}
```

- Users should be able to navigate the site from the navigation bar at the top of each page.

- You will need to fetch data from the [Mallory Furniture API](https://mallory-furniture-admin.now.sh/docs).

- For the multi-listing components, there should be a way to  filter for items that are `onSale`.

- Shopping cart component
  - Component should appear/disappear
  - When a User clicks *Add To Cart* button for a single product

## Setup

```sh
# create project
create-react-app project--mallory-furniture
cd project--mallory-furniture

# download project-files
curl https://raw.githubusercontent.com/muktek/project--mallory-furniture/master/project-files.zip > project-files.zip

# unzip project-files into src/ folder
unzip project-files.zip -d ./src/
```


### Mockups

- [Landing Page](mockups/mallory-landing.png)
- [Multiple Listing Page](mockups/mallory-multilisting-all.png)
  - [Feature: On-sale filter ](mockups/mallory-onsale-filter.gif)
- [Single Product Page](mockups/mallory-single.png)
- [Category Page](mockups/mallory-multilisting-category.png)
- Shopping Cart Component
  - [Basic Style](mockups/mallory-cart-static.png)
  - [Feature: Open + Close](mockups/mallory-cart-demo-part1.gif)
  - [Feature: Add/Remove Items](mockups/mallory-cart-demo-part2.gif)
- [Terms + Conditions Page](mockups/mallory-terms.png)

### DB Admin Notes
Mallory API Documentation https://mallory-furniture-admin.now.sh/docs/


### Designer Notes

#### Color Pallete
![color palette](mockups/mallory-color-palette.png)

#### Typography
From: [Google Fonts](https://fonts.google.com/)
- Main Font: `Source Sans Pro`
- Title Font: `Playfair Display`


### Explorer Mode
- Highlight the current page in the Nav Menu

### Adventure Mode
- For the multi-listing components, a user should be able to filter for multiple parameters:
  - On Sale
  - Quality
  - Max Price

### God Mode
- Use [`Redux`](https://redux.js.org/) to integrate wirh React.

## Assessment

This project will count as **5 assignments**. You will be assessed on the following metrics

- [x] **(1) React Components**
  + You will need to create the components for each page and universal components like the navbar, footer, item (picture, title, price).

- [x] **(2) React Router**
  + You will need to have routing on the page. Users should be able to navigate the following routes on the page.  
    - `/`
    - `/about`
    - `/terms`
    - `/all-products`
    - `/product/{productId}`
    - `/category/{categoryType}`

- [x] **(3) React Props + API Integration**
  + You should consume data from the [Mallory Furniture API](https://mallory-furniture-admin.now.sh/docs/) and render that data using React's convention of `props` in relevant components.

- [x] **(4) React State + Event Handling**
  + You should implement the 3 features:
    - Multi Listings Page – [Feature: On-sale filter](mockups/mallory-onsale-filter.gif)
    - Shopping Cart – [Feature: Open + Close Shopping Cart](mockups/mallory-cart-demo-part1.gif)
    - Shopping Cart – [Feature: Add/Remove Shopping Cart Items](mockups/mallory-cart-demo-part2.gif)

- [x] **(5) HTML/CSS Styles**
  + You should implement HTML/CSS best practices to achieve a faithful representation of the mockup
  + Layout should have columns, and you should pay attention to details like typography, margin/padding and colors.
