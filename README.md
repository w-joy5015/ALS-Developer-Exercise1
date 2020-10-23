# ALS Developer Exercise 1

In your preferred programming language, write a function that retrieves 25 “user cards” from this endpoint, puts them in an array, and outputs the result to console or client.

## Setup and Evalution

Fork and clone the respository to your local computer and then open the terminal. Run `npm install` to install package dependancies.

Because this script is written in Javascript, requires NodeJS runtime to be installed in order to run. To see the script generate a list of 25 "user cards" in the console, run `node usercards.js` in the terminal.

This app uses unit testing with Mocha and Chai to test the functions in 'usercards.js'. There are 4 test specs. To run the tests, in the terminal run `npm test`. You should see the array of 25 users appear in the console as the function is called. It may take up to a minute for all of the tests to complete due to the time needed to retrieve data from the endpoint. If you do not wish to see the array of users appear while running tests, go to `usercards.js` and comment out line 33.

