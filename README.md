# Mini-App Challenge: Movie List

## What is Movie List?
Movie List is a prompt for a full-stack application.

While you're working through each level, try to only use official documentation. Try to not use Stack Overflow, your own notes, past sprint code, or any other external resources. This will help you develop familiarity with the docs as well as get you acclimated to a real test-like environment.

If you do need to reference past code/Stack Overflow, write down what topics you needed extra help on. Then, go find these topics in the official documentation.

## Setup:
- [X] Create an empty git repository with a client and server directory.
- [X] Link this repository to a new repository on GitHub as your remote.

## Submitting the project:
- [ ] Submit a link to your repository below: https://github.com/ZachHaines/mini-app-challenge-movie-list

## Level 0
- [X] Build a frontend using create-react-app in your client directory.
- [X] Display a list of movies from hardcoded data.
- [X] You can use the following data:
```js
const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
```
## Level 1
- [X] Establish a RESTful API using express persisting data with PostgreSQL in your server directory.
- [X] Confirm, routes using Postman
- [X] Refactor your front end to get the list of movie titles from the server, instead of using a hardcoded list of movie titles

## Level 2
- [X] Add a search bar so that a user may see if a movie is in the list.
- [X] After a user submits the search, display all matches (or partial matches) to that title.

## Level 3
- [ ] Add an input field for users to add movies.
- [ ] Allow users to delete added movies.
- [ ] Display only user added movies, not the hardcoded data.

## Level 4
- [ ] Add a button to each list item that allows the user to toggle a 'watched' property.
- [ ] Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.

## Level 5
- [ ] Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)
- [ ] Refactor the watch toggle to be part of the movie information panel
- [ ] Get movie information from the The Movie Database API (https://www.themoviedb.org/documentation/api) and store it locally when a new movie is added to the database.

## Stretch Goals
- [ ] Implement a user system NOT a login system, where different users can have their own ratings
- [ ] Add a way for the user to add their own rating
- [ ] Add a sorting mechanism so the user can sort on rating or other properties
- [ ] Refactor search to allow users to search for movies with a specific director or actor/actress
- [ ] Provide functionality in the UI that allows the user to find other movies that actors have been in.
- [ ] Push the app to deploy