# Vueniverse

## Overview

Visit the deployed page [here](https://thevueniverse.vercel.app)

"Vueniverse" is a Vue application built collaboratively by [Lucas Merchant](https://github.com/lbmerchant93), [Richard Tyler](https://github.com/richardltyler/), and [Cole Fiscus](https://github.com/colefiscus) from the [Turing](turing.io) School of Software and Design. The developers had one week to learn a chosen 'stretch' technology - Vue - and apply our learning to a project.

The technologies used in the building of this project include Vue 3, Vue Router, Cypress.io for testing, and Moment.js.

The end product is a daily display of NASA's "Picture of the Day" which is retrieved from the NASA [API](https://api.nasa.gov/index.html).

When a user loads the app, they should be greeted with a 'Welcome' page from which they can navigate to the 'Home' page. The 'Home' page should show a user the NASA astronomy picture of the day along with a corresponding description, credit to the photographer when available, and the current date being displayed.

Other features include the date input in the header of the site, which will automatically show a user a new picture upon a date selection, as well as previews for "Yesterdays" picture and "Next Days" picture depending on which image is currently being shown.

## How to Use and/or Contribute

To add more features to this project, or to simply view the code in action...

1. Clone this repo (or first fork it and then clone) using `git clone [THIS REPO'S SSH KEY] [OPTIONAL DIRECTORY NAME]` inside of your terminal.  
2. `cd` into that directory.  
3. Install any necessary dependencies using `npm install`.
4. Enter `npm run serve` to run the app on a local server or open the code in your text editor.  
5. The app should open automatically, but you can also navigate to `http://localhost:8080/` to view the app as well.

## Additional Features

- A full testing suite using Cypress.io, which incorporates Mocha and Chai, that tests all user flows.
- An 'About' page which explains the development and inspiration of the application, which also guides a user to the Github and LinkedIn profiles of the developers.

## App in Action
#### Main View - Enter & Using Previews

![Main](https://media.giphy.com/media/7ylap1XaKZMYn0z2aa/giphy.gif)

#### Main View - Date Input

![Main_2](https://media.giphy.com/media/I6F3771FMeSiDvrMyv/giphy.gif)

#### Mobile View

![Mobile](https://media.giphy.com/media/a7cwjgeq5oSipUh08V/giphy.gif)
   
## Future Iterations

In future iterations we would like to learn and add some type of user authentication, which would also allow us to create user-specific data to be displayed on the site. This could allow the ability to save images they like to their 'Favorites'.

Going with this, another feature the developers want to get more comfortable with is creating an independent back-end server to connect to this project, which would allow user data to persist across browser reloads.

Another idea is to allow star-gazers to upload their own images to the connected server to compare their work with the images selected as the NASA Picture of the Day.

Another future idea would be to collect all user data and highlight which images are most frequently favorited, which would be a better user experience when searching for images.

## Project Wins / Challenges

#### Wins

- Learned to use a new framework - Vue - to build a functioning app in the span of one week.
- Making and incorporating multiple fetch calls to display data for different days on the same page.
- 97% accessibility score on Lighthouse.

#### Challenges

- Learning how to use Cypress with Vue, especially how to trigger events such as a "change".
- Using Vue Router to save and correctly access the browser history.
- Properly sizing the images and videos which vary in size across multiple breakpoints.

### Links
The link to the spec sheet that guided this project: [Spec](https://frontend.turing.io/projects/module-3/stretch.html)

The link to the API used for the images: [API](https://api.nasa.gov/index.html)

The link to our initial wireframes and design inspiration: [Wireframe](https://miro.com/app/board/o9J_lSjcR6o=/)
