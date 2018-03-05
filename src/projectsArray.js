import greasySpoon from './assets/greasy.png';
import swapiBox from './assets/swapi.png';
import palettePicker from './assets/ppicker.png';
import headCount from './assets/headcount.png';
import weathrly from './assets/weathrly.png';

const projectsArray = [
  {
    image: greasySpoon,
    name: 'THE GREASY SPOON',
    description: `This application is a point
    of sale system for a fictitious restaurant named the
    Greasy Spoon.  The application allows servers
    to open a check against a table.  Once a check is open,
    servers can add menu items, void items as needed,
    and once ready, close out the check.  The application
    allows servers to view a history of open and
    closed checks.`,
    stack: [
      'React.js',
      'React Router',
      'Redux',
      'JavaScript (ES6)',
      'HTML5, SCSS, & CSS3',
      'Tested using Enzyme & Jest'
    ],
    githubLink: 'https://github.com/hsanchez7934/the-greasy-spoon-hs',
    liveAppLink: 'https://the-greasy-spoon-hs-1-29-2018.herokuapp.com/'
  },
  {
    image: swapiBox,
    name: 'SWAPI BOX',
    description: `SWAPI BOX retrieves data from SWAPI.co, the Star
    Wars API, and displays movie information for the user.
    This project highlights my ability to retrieve and manipulate data,
    implement the native fetch API, and build a user-friendly application using React.js.
    This is an academic project built during my time at the Turing School of Software & Design.
    It was built by myself and a partner as a paired project.
    `,
     stack: [
       'React.js',
       'HTML5, SCSS, & CSS3',
       'Tested using Enzyme, Jest, & fetchMock'
     ],
     githubLink: 'https://github.com/hsanchez7934/swapibox',
     liveAppLink: 'https://swappi-box-hs-12-30-2018.herokuapp.com'
  },
  {
    image: palettePicker,
    name: 'PALETTE PICKER',
    description: `Palette Picker generates
    random color palettes for a user. It gives the user
    the option to create projects to which they can
    save their favorite color palettes. Data persists
    on a backend database built using Node.js and PostreSQL.
    This project highlights my ability to build and work
    a with RESTful API system, write effective tests, and
    build a full stack application.`,
    stack: [
      'JavaScript (ES6) & jQuery',
      'HTML5, SCSS, & CSS3',
      'Node.js',
      'Express.js & Knex.js',
      'PostreSQL',
      'Tested using Mocha & Chai HTTP'
    ],
    githubLink: 'https://github.com/hsanchez7934/hs-palette-picker',
    liveAppLink: 'https://hs-palette-picker-12-1-17.herokuapp.com/'
  },
  {
    image: headCount,
    name: 'HEADCOUNT 2.0',
    description: `Headcount 2.0 is a project
    designed to challenge my skills at
    manipulating data and creating small,
    reusable React components. The application
    contains school district data for the state of
    Colorado. The data is manipulated as needed to display
    stats for the user on the UI. The user
    has the option to select two cards to generate
    a comparison card. The user can also filter, in real time,
    for stats by school name.`,
    stack: [
      'React.js',
      'JavaScript (ES6)',
      'HTML5, SCSS, & CSS3',
      'Tested using Enzyme & Jest'
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
    of any city in the U.S. and also
    weather conditions of major cities
    across the world .  An API call is
    made to wunderground.com to retrieve
    weather data that we then use to
    display information for the user.
    This project highlights my ability
    to retrieve and manipulate data,
    build an application using React,
    and effectively test React components.`,
    stack: [
      'React.js',
      'JavaScript (ES6)',
      'HTML5 & CSS3',
      'Tested using Enzyme & Jest'
    ],
    githubLink: 'https://github.com/hsanchez7934/weatherly',
    liveAppLink: 'https://weathrly-hs-1-22-18.herokuapp.com/'
  }
];

export default projectsArray;
