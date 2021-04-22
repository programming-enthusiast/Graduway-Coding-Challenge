# Graduway-Coding-Challenge
This is a test project for Graduway.

## Problem
Your task is to build a web application that will find Wikipedia articles in different languages. It will display a list of famous Americans. If you click on a row, it will list the pages that exist in different languages, with a link to
the page and the word-count.

## How to set up and run
```
$ git clone https://github.com/programming-enthusiast/Graduway-Coding-Challenge
$ cd Graduway-Coding-Challenge
$ docker-compose build
$ docker-compose run frontend yarn
$ docker-compose run backend rake db:create
$ docker-compose run backend rails db:migrate
$ docker-compose run backend rails db:seed
$ docker-compose up -d
$ open http://localhost:3000
```
You can now access http://localhost:3000 to browse the app.

## Docker Containers
- backend : This directory includes the Ruby on Rails project for the backend.
- frontend: This directory includes the React project for the frontend.
- db(postgreSQL): This is a database for storing data in the backend.
