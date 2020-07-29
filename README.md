
<h1 align="center">
    <img alt="GoStack" src="https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/logoL.svg" width="450px" />
</h1>

<blockquote align="center">
  “When you're offered a seat on a rocket, you don't ask which seat. You simply board.”!
  <br><cite>— Eric Schmidt</cite>
</blockquote>

<br>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GilsondaGama/GoStack11-GoBarber?color=yellow">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GilsondaGama/GoStack11-GoBarber?color=yellow">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/GilsondaGama/GoStack11-GoBarber?color=yellow">

  <img alt="Code quality" src="https://api.codacy.com/project/badge/Grade/45ac7042be6941f0be6cf27d7168a1af">
  
  <img alt="Made by Rocketseat" src="https://img.shields.io/github/license/GilsondaGama/GoStack11-GoBarber">

  <br>

  <img alt="Node.js version" src="https://img.shields.io/badge/Node.js-v12.16.1-689f63?style=flat&logoColor=689f63&logo=node.js">

  <img alt="TypeScript version" src="https://img.shields.io/badge/TypeScript-v3.8.3-007acc?style=flat&logoColor=007acc&logo=typescript">

  <img alt="React.js version" src="https://img.shields.io/badge/React.js-v16.13.1-60dafb?style=flat&logoColor=60dafb&logo=react">

  <img alt="React Native version" src="https://img.shields.io/badge/React_Native-v0.62.2-7159c1?style=flat&logoColor=60dafb&logo=react">
</p>

<p align="center">
  📝 <a href="#-about-the-project">The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🤖 <a href="#-back-end">Back-End</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🖥 <a href="#-front-end">Front-End</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  📱 <a href="#-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🏁 <a href="#-starting-the-project">Starting</a>
</p>

<br>

## 📝 About the project
GoBarber is an application for barbershop, where the barbers register and inform the days and times available to work, while the client register and choose the barber of their preference, the day and time available to cut their hair.

![jpeg](https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/0.JPG)
![jpeg](https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/1.jpg)
![jpeg](https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/2.jpg)
![jpeg](https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/3.jpg)
![jpeg](https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/4.jpg)
![jpeg](https://github.com/GilsondaGama/GoStack11-GoBarber/blob/master/github/5.jpg)

<br>

## 🤖 Back-End
The Back-End was developed with Node.js and TypeScript, in API Rest format.
For standardization and organization of the code, ESLint, Prettier and EditorConfig were used.
The connection to the PostgreSQL database was made with DBeaver and Docker to create containers with TypeORM.
For authentication and user access control, JWT (Json Web Token) was used.
To upload images, Multer was used.

### 🛠 Technologies
- **[Node.js](https://nodejs.org/en/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- *[Express](https://expressjs.com/pt-br/)*
- *[Docker](https://www.docker.com/)*
- *[PostgreSQL](https://www.postgresql.org/)*
- *[DBeaver](https://dbeaver.io/)*
- *[TypeORM](https://typeorm.io/#/)*
- *[JWT](https://jwt.io/)*
- *[ESLint](https://eslint.org/)*
- *[Prettier](https://prettier.io/)*
- *[EditorConfig](https://editorconfig.org/)*

<br>

## 🖥 Front-End
The Front-End was developed with React.js and TypeScript. For standardization and organization of the code, ESLint, Prettier and EditorConfig were used. The styling was done with Styled-Components. The navigation screens were made with React Router DOM. The validation of login and registration was done with Yup. To connect with the Back-End, Axios was used.

### 🛠 Technologies
- **[React.js](https://reactjs.org/)**
- *[React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)*
- *[Styled-Components](https://styled-components.com/)*
- *[React Icons](https://react-icons.netlify.com/#/)*
- *[Polished](https://polished.js.org/)*
- *[Axios](https://nodemon.io/)*
- *[ESLint](https://eslint.org/)*
- *[Prettier](https://prettier.io/)*
- *[EditorConfig](https://editorconfig.org/)*

<br>

## 📱 Mobile
The Mobile was developed with React Nativeand TypeScript. For standardization and organization of the code, ESLint, Prettier and EditorConfig were used. The styling was done with Styled-Components. The navigation screens were made with React Navigation. The validation of login and registration was done with Yup. To connect with the Back-End, Axios was used.

### 🛠 Technologies
- **[React Native](https://reactnative.dev/)**
- *[React Navigation](https://reactnavigation.org/)*
- *[Styled-Components](https://styled-components.com/)*
- *[React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)*
- *[Axios](https://nodemon.io/)*
- *[ESLint](https://eslint.org/)*
- *[Prettier](https://prettier.io/)*
- *[EditorConfig](https://editorconfig.org/)*

<br>

## 🏁 Starting the project
Clone the project: `git clone https://github.com/GilsondaGama/GoStack11-GoBarber`

<br>

🤖 To run the **Back-End**, you must first create a container in Docker and a PostgreSQL database in DBeaver. 
<br>Then open the terminal and run the following commands:

````zsh
# to enter the Back-End folder
$ cd backend

# to download the dependencies
$ yarn

# to start the application on port 3333
$ yarn dev:server
````
<br>

🖥 To run the **Front-End**, in another terminal tab, execute the following commands:

````zsh
# to enter the Front-End folder
$ cd frontend

# to download the dependencies
$ yarn

# to start the application on port 3000
$ yarn start
````
Now access `http://localhost:3000/`

<br>

📱 To run **Mobile**, you need an Android or iOS simulator (Mac only) running on your computer or connect your physical smartphone to USB. To learn how to install / configure, follow the [RocketSeat tutorial](https://react-native.rocketseat.dev/).
<br>Now, on another tab of the terminal, run the following commands:

````zsh
# to enter the Mobile folder
$ cd mobile

# to download the dependencies
$ yarn

# for Android:
# first open the Android emulator
# to start the app on the simulator or on the Android physical smartphone connected to the USB device
$ yarn android

# for iOS:
# to launch the app on the simulator or on the physical iOS smartphone connected to the USB device (only using Mac)
$ yarn ios
````
<br>

---

<h3 align="center">
  Made by Gilson da Gama
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/gilsondagama/">
    <img alt="React.js version" src="https://img.shields.io/badge/LinkedIn-gilsondagama-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/gilson.dagama">
    <img alt="React.js version" src="https://img.shields.io/badge/Facebook-gilson.dagama-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/gilsondagama/">
    <img alt="React.js version" src="https://img.shields.io/badge/Instagram-@gilsondagama-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
</p>

