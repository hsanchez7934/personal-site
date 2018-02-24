import greasySpoon from './assets/greasy.png';
import swapiBox from './assets/swapi.png';
import palettePicker from './assets/ppicker.png';
import headCount from './assets/headcount.png';
import weathrly from './assets/weathrly.png';

const projectsArray = [
  {
    image: greasySpoon,
    name: 'GREASY SPOON',
    description: `This application is a point
    of sale system for a restaurant named the
    Greasy Spoon.  The application allows servers
    to open checks against the restaurants tables.
    Once a check is open, servers can add menu
    items, void items as needed, and once
    ready, close out the check.  The application
    allows servers to view a history of open and
    closed checks.  This application was built
    using React.js, Redux, and Router.`,
    stack: [
      'React.js',
      'React Router',
      'Redux',
      'Enzyme',
      'Jest'
    ],
    githubLink: 'https://github.com/hsanchez7934/the-greasy-spoon-hs',
    liveAppLink: 'https://the-greasy-spoon-hs-1-29-2018.herokuapp.com/'
  },
  {
    image: swapiBox,
    name: 'SWAPI BOX',
    description: `This project was heavily centered
    around retrieving data by making API calls
    and manipulating the data.  We used the Star
    Wars API to design an appplication that
    displays information about Star Wars
    characters, vehicles, and planets.  After this
    project we gained a deeper understanding of
     dealing with nested fetch calls and writing
     code that cleans the retrieved data.  The
     project was built using React.js and tested
     using Enzyme, Jest, and fetchMock.`,
     stack: [
       'React.js',
       'Enzyme',
       'Jest',
       'fetchMock'
     ],
     githubLink: 'https://github.com/hsanchez7934/swapibox',
     liveAppLink: 'https://swappi-box-hs-12-30-2018.herokuapp.com'
  },
  {
    image: palettePicker,
    name: 'PALETTE PICKER',
    description: `This project was heavily
    centered around learning to build a backend
    using Node.js, Express with Knex, PostreSQL
    and also centered on backend testing and
    registering a service worker.
    This application generates a random color
    palette, five random colors, and allows the
    user to create project folders where they
    can store color palettes that they would
    like to save.  The saved palettes persist
    on a database that I created using Express
    with Knex and PostgreSQL.  We were required
    to test the backend functionality of the
    application.  This application was built
    using Vanilla JS, jQuery, HTML, SASS,
    Node.js, Express with Knex, PostreSQL,
    and tested using Mocha and Chai.`,
    stack: [
      'JavaScript',
      'jQuery',
      'HTML5',
      'SASS',
      'Node.js',
      'Express.js',
      'Knex.js',
      'PostreSQL',
      'Mocha',
      'Chai'
    ],
    githubLink: 'https://github.com/hsanchez7934/hs-palette-picker',
    liveAppLink: 'https://hs-palette-picker-12-1-17.herokuapp.com/'
  },
  {
    image: headCount,
    name: 'HEADCOUNT 2.0',
    description: `Headcount 2.0 is project
    designed to challenge my skills at
    manipulating data and creating small,
    reusable React components.  We retrieved
    files using api calls that contained
    various educational stats from districts
    within Colorado by year, per district.
    We built card that reflects the datat to
    the user and a user has the ability to
    select two cards which after being selected
    will generate a new card that will compare
    school district average.  This application
    was built using React.js.`,
    stack: [
      'React.js',
      'Enzyme',
      'Jest'
    ],
    githubLink: 'https://github.com/hsanchez7934/headcount2.0',
    liveAppLink: 'https://headcount-hs-1-30-2018.herokuapp.com/'
  },
  {
    image: weathrly,
    name: 'WEATHRLY',
    description: `Weathryl is a weather
    application that displays a city's
    current forecast, 7 hour forecast,
    and 10 day forecast.  The user is
    able to search for weather conditions
    of any city in the U.S. and also for
    weather conditions of major cities
    across the world .  An API call is
    made to wunderground.com to retrieve
    weather data that we then use to
    display information for the user.
    We populated a binary search tree
    with a list of cities in the U.S.
    to provide auto complete feature for
    the user as they type inside of the
    search bar.  The application was
    built using React.js and tested using
    Enzyme and Jest.`,
    stack: [
      'React.js',
      'Enzyme',
      'Jest'
    ],
    githubLink: 'https://github.com/hsanchez7934/weatherly',
    liveAppLink: 'https://weathrly-hs-1-22-18.herokuapp.com/'
  }
];

export default projectsArray;
