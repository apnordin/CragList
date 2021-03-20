# CragList

## Description

CragList is a website for social climbers to find climbing routes anywhere in the world.

Users are able to add their own routes, search or browse routes added by other users, post on any route's live feed, and chat live with other users.

Click [here](https://craglist3121.herokuapp.com/) to experience the deployed application.

## Getting Started

After cloning the GitHub repo, run npm install in your terminal. Then, add a .env file in the root folder with the following content:

```
SESSION_SECRET='secretIDhere'
SKIP_PREFLIGHT_CHECK=true
```

Then, add another .env file in the client folder with the following content:

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_API_KEY="[your google maps API key here]"
```

Click [here](https://developers.google.com/maps) to get started with Google Maps Platform.

## Built With

React: JavaScript library

Axios: HTTP client

Express: Web framework

Mongoose: ODM library

Passport: Authentication middleware

Bootstrap and React-Bootstrap: CSS framework

NPM: Dependency management

This website uses Google Maps Platform, see "getting started" for more info.

Deployed using Heroku and MongoDB Atlas.

## Questions?

If you have any questions, feel free to contact me directly at apnordin@gmail.com. You can find more of my work at [apnordin](https://github.com/apnordin).
