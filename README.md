# GetLinked - Online Hackathon Onboarding UI

![GetLinked Logo](/src/assets/getlinkedlogo.png)

GetLinked is an onboarding user interface for participants in online hackathons or coding challenges. It provides an interactive and informative platform to engage users and guide them through the process of joining the event.

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Demo

[Link to Live Demo](https://gethack.vercel.app)

## Technologies Used

- React
- TypeScript
- styled-components
- axios
- react-query
- react-router-dom
- aos

## Project Structure

The project is organized into several components and pages:

- **Landing Page**: The main entry point for users.

  - Navbar (includes navigation links to Overview, Timeline, FAQs, Contact, and Register.)
  - Header
  - Introduction
  - Rules and Guidelines
  - Judging Criteria
  - FAQs
  - Timeline
  - Prizes and Rewards
  - Partners and Sponsors
  - Privacy Policy and Terms
  - Footer

- **Contact Page**: Allows users to send messages to the site owner via a form.

- **Register Page**: Provides a signup form for participants populated with some data fetched from the backend api, with a successful modal popup upon successful registration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Donsantos001/getlinkedio-hackathon.git
   cd getlinked
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The application should now be running locally at `http://localhost:3000`.

## Usage

You can use GetLinked as a foundation for creating onboarding experiences for your online hackathons or coding challenges. Customize the content, styling, and functionality to suit your event's specific needs.

Optionally, you can set up the backend api url and custom colors for the application by adding a `.env` file to your project and modify this sample file. The colors here are the default colors used in this application.

```.env
REACT_APP_API_URL=https://backend.getlinked.ai/
REACT_APP_PRIMARY=#D434FE
REACT_APP_SECONDARY=#903AFF
REACT_APP_TERTIARY=#FF26B9

REACT_APP_TEXT=#FFFFFF
REACT_APP_BACKGROUND=#150E28
REACT_APP_BACKGROUND_DARK=#100B20

REACT_APP_GRADIENT_START=#FE34B9
REACT_APP_GRADIENT_END=#903AFF
```

## Screenshots

![Header](/screenshots/header.PNG)
![Header Mobile](/screenshots/header-mobile.png)

![Register](/screenshots/register.PNG)

![Prizes and Rewards](/screenshots/rewards.PNG)

![Contact Mobile](/screenshots/contact-mobile.PNG)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/new-feature`.

3. Make your changes and commit them: `git commit -m 'Add new feature'`.

4. Push to the branch: `git push origin feature/new-feature`.

5. Submit a pull request.

## Credit

This project was created to participate in the [getlinkedTech Hackathon 1.0](https://getlinked.ai).
