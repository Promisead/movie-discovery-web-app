# HNG 10 - FrontEnd - Stage 2 Project - Frontend Movie Discovery Web App

This is a solution to the [HNG 10 - FrontEnd - Stage 2 Project - Frontend Movie Discovery Web App](https://hngx.zuriboard.com/). The HNG Internship is an ambitious attempt to change the way education is done in Africa. It is the bridge between learning to code and becoming the best in the world..

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API. Requirements are stated below:

- User Interface:
  Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate:.
  You should list the top 10 movies on the homepage.
  They should be displayed in a grid layout with their movie posters.
  The Card component should display the movie title and release date.
  card - [data-testid: movie-card]
  movie poster - [data-testid: movie-poster]
  movie title - [data-testid: movie-title]
  movie release date - [data-testid: movie-release-date]

- Movie Search:
  Implement a search feature that allows users to search for movies by title.
  Display search results, including movie posters, titles, and release dates.
  Show a loading indicator while fetching search results.

- Movie Details:
  When i go to to /movies/:id route (where :id is the imdb_id), I should see the movie details page.
  I should see
  title - [data-testid: movie-title]
  release date (in UTC) - [data-testid: movie-release-date]
  runtime (in minutes) - [data-testid: movie-runtime]
  overview - [data-testid: movie-overview]

- API Integration:
  Consume the TMDB API to fetch movie data.
  Use the following API endpoints:
  Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}

- Error Handling:
  Implement error handling to display meaningful error messages to users in case of API failures or other issues.

- Submission:
  Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
  Provide clear instructions on how to run your project locally in your README.md file.
  Ensure that the code is well-documented and organized.

- Update:
  Because of your numerous tags and DMs, We've decided, your design doesn't need to be perfect, Also not implementing the Search feature won't make you fail.
  Final One: Add to Favourites is not expected to be functional, just add small interaction on the icon/button(e.g change the background colour when it's clicked). If you make it functional you're a senior dev and you won't be penalised

### Screenshot

![](/public/images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/Promisead/movie-discovery-web-app](https://github.com/Promisead/movie-discovery-web-app)

- Live Site URL: [https://movie-discovery-web-app-delta.vercel.app](https://movie-discovery-web-app-delta.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind CSS (NOT USED!!!)
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

- Still trying to figure out a way to use Environment variables to store sensitive information (API keys) outside of the code.
- Search functionality implemented, but not so for favourite functionality, because amnesty taken as granted by mentors. Lols.

### Continued development

- More HNG 10 Projects, TypeScript, Open Source and Technical Writing, Edgi Projects.

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Promise Duke](https://github.com/Promisead)

## Acknowledgments

ZURI TEAM

# movie-discovery-app
