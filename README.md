<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/readmeIcon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Welcome to the Scheduler</h3>

  <p align="center">
    This is an awesome platform to use in your business to schedule classes or appointments, show your products, and share important messages with the clients.
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
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
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>      
        <a href="#usage">Usage</a>
        <ul>
            <li><a href="#how-to-run-the-project-and-basic-scripts">How to run the project and basic scripts</a></li>
            <li><a href="#cypress">Cypress</a></li>
            <li><a href="#storybook">Storybook</a></li>
            <li><a href="#husky">Husky</a></li>
        </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Clinics, pilates studios, beauty salons, and other businesses that rely on appointments and class schedules can greatly benefit from a platform like Scheduler. With Scheduler, businesses can manage their schedules more efficiently, freeing up time to focus on other important tasks.

For example, a pilates studio could use Scheduler to manage its class schedules, allow clients to book, change, or cancel appointments online, post notices or announcements, and send automated notifications to clients. Another interesting feature is the product showcase, where you can display classes, clothes, and accessories.

By using a platform like Scheduler, businesses can save time and reduce the risk of scheduling errors or missed appointments. They can also provide a more convenient and flexible experience for their clients, who can book and manage appointments on their own time. Overall, Scheduler can be a valuable tool for businesses of all types that rely on appointments and schedules to manage their operations.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Typescript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is a list of things you need to use the software and how to install them.

- node v17.8.0
  ```sh
  npm install node@v17.8.0
  ```
- If you already have node installed on your machine, you must change the version after executing the previous command.
  ```sh
  nvm use v17.8.0
  ```

### Installation

This is how you clone the repository and add all the dependencies.

1. Clone the repo
   ```sh
   git clone https://github.com/Ana2877/Scheduler.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Here you are going to find some tools/features the project has and how to use them.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### How to run the project and basic scripts

- To run the project:
    ```sh
    npm run start 
    ```

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.\
    You will also see any lint errors in the console.

- To test the code:
    ```sh
    npm run test
    ```
    Launches the test runner in the interactive watch mode.

- To lint the code:
    ```sh
    npm run lint
    ```
    Check if the code is within the eslint rules.

### Cypress

Remember to run the project in another terminal before running these commands. We need to do this because the e2e tests are done by accessing the website in the browser by the url.
- To run the tests hiding the browser:
    ```sh
    npm run cy 
    ```
  
    It is only going to run in your terminal and not open anything else.
  

- To run the tests displaying the browser:
    ```sh
    npm run cy:headed
    ```
  
    It is going to open the browser displaying all the tests.

- To open the cypress:
    ```sh
    npm run cy:open
    ```
    Opens Cypress and runs it until you finish the process. Here you have a lot of functionalities, like checking all the tests you have and running specific tests however many times you like.

### Storybook

### Husky

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ana Pagnoncelli - [Likedin](https://www.linkedin.com/in/ana-carolina-pagnoncelli/) - ana.carol.p@hotmail.com

Project Link: [https://github.com/Ana2877/Scheduler](https://github.com/Ana2877/Scheduler)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This space lists resources that I find helpful and would like to give credit to. 

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Ana2877/Scheduler/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/Ana2877/Scheduler/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/Ana2877/Scheduler/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Ana2877/Scheduler/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: public/AppImage.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript-url]: https://www.typescriptlang.org/pt/
[Typescript]: https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label
