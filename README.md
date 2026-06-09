Capitals App Overview

The Capitals App is a simple React application that allows users to select a capital city from a dropdown list and view the corresponding country. The application demonstrates the use of React state management, event handling, and rendering dynamic content based on user interaction.

Features
Displays a list of capitals in a dropdown menu.
Shows the corresponding country for the selected capital.
Updates the displayed country dynamically when a different capital is selected.
Responsive user interface.
Technologies Used
React JS
JavaScript (ES6)
HTML5
CSS3
Project Structure
src/
 ├── components/
 │    └── Capitals/
 │         ├── index.js
 │         └── index.css
 ├── App.js
 └── index.js
Functionality
Initially, the first capital in the list is selected.
The corresponding country is displayed by default.
Users can select any capital from the dropdown menu.
The country name updates automatically based on the selected capital.
State Management

The application uses React Component state to:

Store the currently selected capital ID.
Update the state when a new capital is selected.
Render the corresponding country based on the selected capital.
Installation and Setup