# Interview Scheduler

## Project Description

Interview Scheduler is a Single Page Application(SPA) for tracking students interviews bulit using React. The App allows users to add,edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest tests are used through the development of the project.

## Project Features

* Interviews can be booked between Monday and Friday.
* A user can switch between weekdays.
* A user can book an interview in an empty appointment slot.
* Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
* A user can cancel an existing interview.
* A user can edit the details of an existing interview.
* The list of days informs the user how many slots are available for each day.
* The expected day updates the number of spots available when an interview is booked or canceled.
* A user is presented with a confirmation when they attempt to cancel an interview.
* A user is shown an error if an interview cannot be saved or deleted.
* A user is shown a status indicator while asynchronous operations are in progress.
* When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
* The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Home Page

<img width="1470" alt="Home_Page" src="https://user-images.githubusercontent.com/121919958/234910296-a01c3cb8-80f3-4b21-bb17-ddc87b58da2c.png">

By selecting a weekday on the left panel, a user can see booked appointments and available slots for each day.

## Creating New appointment 

<img width="1469" alt="Creating_appointment" src="https://user-images.githubusercontent.com/121919958/234910897-1b86ce9a-85ed-4341-96a9-09d72dfe2342.png">

A user can add interviews to available slots by typing a student name and adding interviewer from the list 

## Editing appointment 

<img width="1468" alt="Edit" src="https://user-images.githubusercontent.com/121919958/234911605-1c6749a1-335d-4aea-b618-a4422528a9d3.png">

A user can edit an existing appointment by clicking the edit icon.

// Deleting appointment 

<img width="1470" alt="Delete" src="https://user-images.githubusercontent.com/121919958/234912666-ebbd9d3f-846f-4aa1-ba3d-b9d40cf0f5ed.png">

A user can delete an existing appointment by clicking the delete icon and a warning message pop up to confirm.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
