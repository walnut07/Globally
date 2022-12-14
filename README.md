
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Globally - timezone converter - </h3>

  <p align="center">
    Let's quickly arrange a global meeting with the help of Globally.
    <br />
    <br />
    <a href="https://github.com/walnut07/Globally/issues">Report Bug</a>
    ·
    <a href="https://github.com/walnut07/Globally/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Globally quickly creates an email template so you can propose a meeting date even the attendees are in a different time zone.


### Built With

**Frontend**

* TypeScript
* React
* moment.js

**Backend**

* JavaScript
* Express
* Knex.js
* moment.js

**Authentication**

* Firebase

**Database**

* PostgreSQL
* MongoDB


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

Clone the repo
   ```sh
   git clone https://github.com/walnut07/Globally.git
   ```

Install libraries
* npm
  ```sh
  cd server
  npm install cors dotenv express knex moment nodemon pg router mongodb
  ```
  
  ```sh
  cd client
  npm install axios firebase moment
  ```
  
Set up a database
* PostgreSQL

  ```sql
  CREATE DATABASE globally;
  ```
  
  Create a `.env.local` file in `server/db` and add information below
  ```txt
  DB_USER=YOUR DB USERNAME
  DB_NAME=globally
  ```
  
* migration
   
  ```sh
  cd server/db
  knex migrate:latest
  ```

Set up Firebase
1.  Start a project at [https://firebase.google.com/](https://firebase.google.com/)
2. Create a `.env.development.local` file in `client/src`

  ```sh
  cd client/src
  cat .env.development.local
  ```

3. Write config information in the file

  ```sh 
  REACT_APP_APIKEY="YOUR APIKEY"
  REACT_APP_AUTHDOMAIN="YOUR AUTHDOMAIN"
  REACT_APP_PROJECT_ID=
  REACT_APP_STORAGE_BUCKET=
  REACT_APP_MESSAGING_SENDER_ID=
  REACT_APP_APP_ID=
  REACT_APP_MEASUREMENT_ID=
  ```

Ready to run the app

  ```sh
  cd server
  npm run
  ```
  
  ```sh
  cd client
  npm run
  ```

## Usage

- Globally was developed to accelarate the speed of arranging a global meeting.
- Therefore, you can use this app whenever you are arranging a global meeting.

### Persona & User story
Here's the plan that describes whom this app was built for.

**Persona**
Briana Martin
<img src="images_doc/persona.jpeg" alt="Logo" width="100" height="100"><br>
- 34 years old and working in France
- Working for a trading company that imports many kinds of goods especially from Asia and South America


**User story**<br>
- Title<br>
  * She can propose her available date to her clients who live in different time zones.<br>

- Accepetant criteria<br>
  * GIVEN her available time and her clients' time zones
  * WHEN she inputs them
  * THEN she should see the available time in the chosen time zones.
<!-- ROADMAP -->
## Roadmap

- [x] The app takes in meeting dates in user's time zone and also attendee's timezones
- [x] The app converts the meeting timezones
- [x] The app displays the converted timezones to the UI
- [x] Users can log in with their Google account
- [x] CD/CI to Heroku
- [x] The app displays the converted timezones to the UI
- [x] React components are organized with the principals of Atomic Design
- [x] Code in Express Router is modularized
- [x] The app displays the converted timezones to the UI
- [x] The app is resonsive with React Bootstrap
- [ ] Users can save their meeting time in MongoDB
    - Work-in-progress

See the [open issues](https://github.com/walnut07/Globally/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kurumi Muto - [@walnut07_](https://twitter.com/walnut07_)

Project Link: [https://github.com/walnut07/Globally](https://github.com/walnut07/Globally)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/walnut07/globally/issues
[license-shield]: https://img.shields.io/github/license/walnut07/globally.svg?style=for-the-badge
[license-url]: https://github.com/walnut07/globally/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kurumimuto
[product-screenshot]: images_doc/Globally-screenshot.png
