# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

<img src="public/images/readme/sneakers.png" width="750" alt="Sneakers desktop layout">

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Responsive Layout](#responsive-layout)
    - [Dark Theme](#dark-theme)
    - [Product](#product)
    - [Add items to shopping cart](#add-items-to-shopping-cart)
    - [Shopping cart](#shopping-cart)
    - [Hover states](#hover-states)
  - [Tests](#tests)
    - [Unit and Integration Tests](#unit-and-integration-tests)
    - [E2E Tests](#e2e-tests)
    - [Accessibility Tests](#accessibility-tests)
  - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

Additional features:

- Toggle the light/dark app theme
- When the product quantity is 0 the "Decrease quantity" and "Add to cart" buttons are disabled and greyed out
- Show toast notifications when successfully adding or removing an item from the cart

### Screenshots

#### Responsive Layout

This project features a responsive design, built with with a "mobile-first" approach.

1. Mobile layout

   1.1 Small Screens

      <img src="public/images/readme/layout/lightTheme/mobile.png" width="250" alt="Sneakers mobile layout - light theme">
      
      - Mobile Navigation

      <img src="public/images/readme/layout/lightTheme/mobile_navigation.png" width="250" alt="Sneakers mobile navigation menu - light theme">

   1.2 Tablet Screens

      <img src="public/images/readme/layout/lightTheme/tablet.png" width="350" alt="Sneakers mobile navigation menu - light theme">

2. Desktop layout

   <img src="public/images/readme/layout/lightTheme/desktop.png" width="750" alt="Sneakers desktop layout - light theme">

#### Dark Theme

Clicking the theme toggle button allows the users to change the app's theme.

1. Mobile layout

   <img src="public/images/readme/layout/darkTheme/mobile.png" width="250" alt="Sneakers mobile layout - dark theme">

   1.1 Mobile Navigation

    <img src="public/images/readme/layout/darkTheme/mobile_navigation.png" width="250" alt="Sneakers mobile navigation menu - dark theme">

2. Desktop layout

   <img src="public/images/readme/layout/darkTheme/desktop.png" width="750" alt="Sneakers desktop layout - dark theme">

#### Product

1. Product gallery

   1.1 Mobile screens - Clicking on the prev/next buttons will cycle the product images.

   ![Mobile product gallery](public/images/readme/product/gallery/mobile_gallery.png)

   1.2 Desktop screens: Clicking on the thumbnail items will change the current product image.

   ![Desktop product gallery](public/images/readme/product/gallery/desktop_gallery.png)

2. Product lightbox gallery (Desktop screens)

   Clicking on the current product image will open the lightbox gallery.

   <img src="public/images/readme/product/gallery/lightbox_gallery.png" width="750" alt="Lightbox gallery">

#### Add items to shopping cart

As the default behavior, the "decrease quantity" counter button and "add to cart" button are disabled and greyed out.

![Decrease quantity and add to cart buttons disabled state](public/images/readme/product/counterAddToCart/disabled.png)

To be able to add items to the shopping cart, the user must click the "increase quantity" button and then the "Add to cart" button.

![Counter buttons and add to cart button enabled state](public/images/readme/product/counterAddToCart/enabled.png)

After adding an item to the shopping cart, a toast notification will appear. After 3 seconds, this notification will automatically disappear, or the user can close it by clicking the "Close Notification" button.

- Mobile Layout: notification appears in the center of the screen.

  <img src="public/images/readme/notifications/addItem/mobile.png" width="250" alt="Add item notification - mobile screens">

- Desktop Layout: notification appears below the shopping cart icon.

  <img src="public/images/readme/notifications/addItem/desktop.png" width="750" alt="Add item notification - desktop screens">

#### Shopping cart

1. Empty cart

   1.1 Light theme

   ![Empty cart - light theme](public/images/readme/shoppingCart/lightTheme/empty.png)

   1.2 Dark theme

   ![Empty cart - dark theme](public/images/readme/shoppingCart/darkTheme/empty.png)

2. Items badge

   When the cart has items, a badge will appear above the user cart icon.

   1.1 Light theme

   ![Items badge - light theme](public/images/readme/shoppingCart/lightTheme/items_badge.png)

   1.2 Dark theme

   ![Items badge - dark theme](public/images/readme/shoppingCart/darkTheme/items_badge.png)

3. Cart with items

   Clicking the user cart icon, the shopping cart pop-up will appear.

   1.1 Light theme

   ![Cart with items - light theme](public/images/readme/shoppingCart/lightTheme/items.png)

   1.2 Dark theme

   ![Cart with items - dark theme](public/images/readme/shoppingCart/darkTheme/items.png)

4. Remove items

   To remove an item, the user needs to click the "Remove item" button.

   ![Remove item - light theme](public/images/readme/shoppingCart/lightTheme/remove_item.png)

   After removing an item from the shopping cart, a toast notification will appear. After 5 seconds, this notification will automatically disappear, or the user can close it by clicking the "Close Notification" button.
   - Mobile Layout: notification appears in the center of the screen.

     <img src="public/images/readme/notifications/removeItem/mobile.png" width="250" alt="Remove item notification - mobile screens">

   - Desktop Layout: notification appears below the shopping cart icon.

     <img src="public/images/readme/notifications/removeItem/desktop.png" width="750" alt="Remove item notification - desktop screens">

#### Hover states

1. Main Navigation

- Links

  ![Page links hover state](public/images/readme/hover/links/ligthTheme/page.png)

- Theme toggle

  Light Theme

  ![Theme toggle hover state - light theme](public/images/readme/hover/links/ligthTheme/theme_toggle.png)

  Dark Theme

  ![Theme toggle hover state - dark theme](public/images/readme/hover/links/darkTheme/theme_toggle.png)

- User shopping cart icon

  Light Theme

  ![User cart icon hover state - light theme](public/images/readme/hover/links/ligthTheme/shopping_cart_icon.png)

  Dark Theme

  ![User cart icon hover state - dark theme](public/images/readme/hover/links/darkTheme/shopping_cart_icon.png)

- User profile

  ![User profile link hover state - light theme](public/images/readme/hover/links/ligthTheme/user_profile.png)

2. Product

- Gallery (thumbnail items)

  ![Product gallery hover state](public/images/readme/hover/product/gallery.png)

- Lightbox gallery (close, prev/next buttons and thumbnail items)

  ![Product lightbox gallery hover state](public/images/readme/hover/product/lightbox.png)

3. Counter and Add to cart buttons

- Counter buttons

  ![Counter button hover state](public/images/readme/hover/product/counter.png)

- Add to cart button

  ![Add to cart button hover state](public/images/readme/hover/product/add_to_cart_btn.png)

4. User Shopping Cart

- Delete item button

  Light Theme

  ![Shopping cart delete item button hover state - light theme](public/images/readme/hover/shoppingCart/lightTheme/remove_btn.png)

  Dark Theme

  ![Shopping cart delete item button hover state - dark theme](public/images/readme/hover/shoppingCart/darkTheme/remove_btn.png)

- Checkout button

  ![Shopping cart checkout button hover state](public/images/readme/hover/shoppingCart/lightTheme/checkout_btn.png)

### Tests

#### **Unit and Integration Tests**

This project uses Jest and React Testing Library for unit and integration testing.

The unit tests cover:

- The rendering of the components

The integration tests cover:

- Not allowing the user to add a product to cart if product counter is 0
- Allowing the user to increase the product counter value
- Allowing the user to add a product to cart

#### **E2E Tests**

This project uses Playwright for end to end testing.

The E2E tests cover:

1. Mobile only (Pixel 5 and iPhone 12):

- Opening and closing the mobile navigation
- Browsing the product gallery using the next/previous buttons

2. Desktop only (Chromium, Firefox and Webkit):

- Browsing the product gallery using the thumbnail list
- Browsing the modal product gallery using the next/previous buttons or thumbnail list
- Closing the modal product gallery by pressing the close button or escape key

3. All viewport tests:

- Displaying a message when the cart is empty
- Adding an item to cart and displaying a notification
- Removing an item from cart and displaying a notification
- Toggling the light and dark app theme

#### **Accessibility Tests**

1. Automated Tests

- Run Lighthouse audits in Chrome and Edge DevTools (100 score).

2. Manual Tests

- Screen Reader testing with NVDA:
  - Checked that headings (h1, h2, h3) are announced correctly.
  - Checked that all section content is announced correctly.
  - Checked that all buttons are read when focused.
  - Checked that all notifications are announced assertively when they appear on screen.

### Links

- Solution URL: [https://github.com/f29pereira/sneakers](https://github.com/f29pereira/sneakers)
- Live Site URL: [https://f29pereira.github.io/sneakers/](https://f29pereira.github.io/sneakers/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- TypeScript
- [heroicons](https://heroicons.com/outline) - collection of MIT open source interface icons for web and app development
- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - browser extension
- [clsx](https://www.npmjs.com/package/clsx) - Utility for constructing className strings conditionally
- [focus-trap-react](https://www.npmjs.com/package/focus-trap-react) - React component that traps focus
- [Redux Toolkit](https://redux-toolkit.js.org/) - Redux state management
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - browser extension
- [Jest](https://jestjs.io/) - JavaScript testing library
- [React Testing Library](https://testing-library.com/) - React components testing library
- [user-event](https://www.npmjs.com/package/@testing-library/user-event) - companion library of the React Testing Library
- [Playwright](https://playwright.dev/) - automation library for end-to-end testing
- [NVDA (NonVisual Desktop Access)](https://www.nvaccess.org/) - open-source screen reader for Windows

### What I learned

- Use the focus-trap-react package to capture focus on the mobile navigation and desktop lightbox gallery
- Use the clsx package to easily manage the components classnames, like the Add To Cart component that changes the button color based on the product counter value
- Use React's useReducer hook to manage the app notifications when adding/removing items from the cart
- Create E2E tests using Playwright for mobile/desktop only and all screens tests
- Create Git Actions jobs for unit/integration and E2E tests to run automatically during pull requests on the master branch

## Author

- Frontend Mentor - [@f29pereira](https://www.frontendmentor.io/profile/f29pereira)
