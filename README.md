# SEI Project 2 - Monstr Social App

## Project Description

Monstr is a social media platform for those neglected by other sites (such as creeps, monsters, criminals and ghosts). Meet friends in the world of evil and keep up with your rivals.

## Project Links

- [github public repository](https://github.com/and3rn3t/monstr)
- [Heroku Deployment](https://monstr-app.herokuapp.com/users)

## Wireframes

![Table relations](https://i.imgur.com/m3R2R49.jpg)

## Technologies Used

- node.js
- PostgreSQL
- VS Code
- Sequelize
- Heroku

## User Stories
- As a **new user**, I want to make posts to my profile so that others can see what I've been up to.
- As a **power user**, I want to create and belong to Groups so that I can make associations with like-minder monsters.
- As a **group admin**, I want to moderate groups and group posts so that things don't get out of control.
- As a **current user**, I want my data secured so that it cannot be leaked to other sites on the internet.
- As a **current user**, I want to make posts with text and photos, so that others can see the pure evil I'm up to.
- As a **group admin**, I want to change or delete group information, so that information is kept accurate only by admins.
- As a **current user**, I want to connect with others so that I can see their posts.
- As a **current user**, I want to change my own information, so that it is kept up to date.
- As a **current user**, I want the ability to delete my own account to adhere to GDPR guidelines.
- As a **new user**, I want to see who else is on the site, so that I can decide if I want to follow them.
- As a **new user**, I want to add an account and my user information so that others can find me.

## MVP

- Allow users to explore others' profile pages and sign up for their own
- Permit users to post profile pictures on their own page
- Use Users and Posts models to show profiles and user posts
- Application persists changes to a PostgreSQL backend database

## PostMVP (to be added later)

- (v2) Enable secure login and browsing via encrypted passwords and JWT
- (v2) Allow users to join groups and make posts to groups to which they belong
- (v2) Allow permission by friendship to see only certain profiles and posts

## Issues and Resolutions

**ERROR**: H10 Heroku Server Error                                
**RESOLUTION**: Attempted to deploy to Heroku before instruction - hadn't created database. Created database.

**PROBLEM**: Could not get Posts model in SHOW route                                
**RESOLUTION**: Primary key UserId was being used in Posts<->Users relation, and Sequelize was confusing UserId for id. Renamed UserId to UserName and dropped/re-imported database.