go to firebase google
then login and select web
create a project 
give your project a nickname

npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXlBHYV6jpfhUNowQIaUNTPcOxMpIs0WM",
  authDomain: "plucky-shore-338405.firebaseapp.com",
  projectId: "plucky-shore-338405",
  storageBucket: "plucky-shore-338405.appspot.com",
  messagingSenderId: "469626883868",
  appId: "1:469626883868:web:831e94e36e77391f08b4d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Now to create database
Go to cloud firestore

start as test mode 
select server ans enable

npm i nodemon cors express firebase


**********

1. create node js project
2. install required package
3. create folder structure 
4. create environment variables and firebase database
5. create express js server
6. connect database
7. add student function
8. get all student
9. get one student
10. update student 
11. delete

2. install required package
npm install express firebase dotenv cors
$ npm install nodemon --save-dev
npm install body-parser

3. create folder structure 
touch .env config.js db.js index.js
mkdir controllers routes models

4. create environment variables and firebase database



