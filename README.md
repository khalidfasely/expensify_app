# Overview

This project is built at the time I was taking a React course, and I add other feature to it on my own.

To build this App I used React, Firebase and Sass.

# Routes
## Login: /
User can log into the web app with google account.

## Index: /dashboard
This page is the home page, display all your expenses filtered by the time(By default it shows only expenses for the current month).
You can see the sum of all shown expenses and the number of expenses that hidden.
You can search for an expense by the description.

## New expense: /create
This page display a form for create new expense by giving the description, the amount, the time, and you can add a note if you want to.

## Edit expense: /edit/\<expenseId>
This page display the same form as the create page, the different between them is that the edit page commes with the current expense data.
From there we can edit the expense and save it or we can delete it.

# What’s contained in each file I created.

## src/ folder:
In the src/ folder, we first see:
- The actions/ folder that containes files like auth.js expenses.js and filters.js, with actions for the Redux Store, in these files we communicate with firebase.
- The components/ folder that containes all components that renders the app, every component is response for a part of the app(Header component response for the header in the app...).
- The firebase/ folder containes a single file to configure firebase with our app.
- The reducers/ folder containes files, every file contain a Redux reducer.
- The router/ folder containes 3 files:
    - AppRouter.js: as the root of the app and specified every component with his URL.
    - PriveteRoute.js and PublicRoute.js: check if some user have the access to some page, if yes render the page, if no redirect the User to an available page.
- The selectors/ folder Containes two files every file has a functions:
    - expenses-total.js: count the amout of all shown expenses.
    - expenses.js: filter the shown expenses.
- The store/ folder containes a configureStore.js file that combine all the Redux reducers.
- The styles/ containes:
    - base/: That contains some base styling.
    - components/: That containes styles files, every file contains styles for a specific component.
    - styles.scss: That imports all the styles files, and this file is the one imported on the root of the app(index.js file).
- The tests/ folder that containes all actions/, components/, reducers/, selectors/ folders tests, and the fictures/ folder it's a fake data to tests some files that needs it.

# How to run the application
<!--#First you must have Python and Django and NodeJs installed in your machine
#- Then you need to go to the front-end folder(blog-f-e/) and run npm install to create node_modules/ folder.
#- Then back on the root of the app run python manage.py runserver.-->

- Copy the repository to your system.
- Make sure you have NodeJs installed on your system. If not you will need to install it.
- Install yarn on your machine.
- and run these commands:
```shell
yarn install
```
```shell
yarn run build
```

Then run 

```shell
yarn start
```

Then login with google and to create new task, remove a task ...

> You can also visit the app on the internet https://lek-expensify-app.herokuapp.com/