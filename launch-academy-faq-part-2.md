### Introduction

Continuing on your work with the Launch Academy FAQ from last week, it's time to make some
upgrades. Now you'll refactor the site to use an API endpoint with Fetch and add testing!

### Setup

From your challenges directory, run the following:

```no-highlight
$ et get launch-academy-faq-part-2
$ cd launch-academy-faq-part-2
$ npm install
$ npm start
```

In a separate tab, launch your sinatra server:

```no-highlight
$ bundle
$ ruby server.rb
```

Then, visit <http://localhost:4567> in your browser. You should see a starter version of the
code that should look close to your finished version from Part 1 last week.

### Instructions

This is a multi-part challenge just like last week. You should not expect to complete this assignment
in one sitting. Expect that there will be other lessons you will need to complete
in order gain the knowledge and experience to complete this challenge.


### Requirements, Part One: `fetch` the Data

We would like to refactor the app to **retrieve data from an API**, which has
been provided.

Use `fetch` to request data from <http://localhost:4567/api/v1/questions>, from
within the appropriate React Component. Use the data in the response to build
your components.

### Requirements, Part Two: POST data with `fetch`

You're web application is coming together! Let's now give our app the ability to
create new FAQs. You will need to create a react form that will **POST data to an API**.
The POST endpoint has been provided.

Use fetch to make a POST request to <http://localhost:4567/api/v1/questions>.
Consider what steps you will need to take to complete this feature.
- How many components will you need, and where in your current component tree could you create them?
- How many fields will your form need?
- How will the user know that the form was submitted correctly? How can we validate user input?

Keep in mind that you code may look different from someone else's.

### Requirements, Part Three: Test Your Application

**Note:** You will need to begin the readings on testing react components with enzyme before you can
begin this part of the challenge. 

Your app is looking great! The only problem is, other developers won't touch it
until it has tests. Lucky for you, the test setup has already been done.
You even have an example test to get yourself started. Make sure that you
run `karma start` to get the tests running in your terminal.

If you need some help deciding what tests to write, take a look back at the Testing
React Components article. Follow the pattern there and make sure to have the app
thoroughly tested!

Then, `et submit` your code.
