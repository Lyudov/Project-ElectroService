Project Documentation

Introduction

Welcome to the documentation for the Electro Service project. This app provides a space for users to interact with electrical services.

Getting Started

Installation

To run the project locally, follow these steps:

Clone the repository: git clone 

Navigate to the project directory: cd electro-service

Install dependencies: npm install

The project follows a modular structure with major components:

Contact: Allows users to send messages and stores data in Firebase.
Info: Displays contact information and social links.
Footer: Displays copyright and project information.
Register: Handles user registration and stores data in Firebase.
Login: Handles user login and authentication using Firebase.
Logout: Provides a button to log out users.
Create Blog: Allows users to create new blog posts and stores data in Firebase.
Edit Blog: Enables users to edit existing blog posts and updates data in Firebase.
Blog: Displays a list of blog posts retrieved from Firebase.
Details Blog: Shows detailed information about a specific blog post.
Main: Initializes the React app with routing.
Auth Service: Manages user authentication functions.
Firebase: Configures and exports the Firebase app.

Components

Register Component:

Purpose: Handles user registration and stores data in Firebase.

Functionality:

Manages form inputs for username, email, password, and confirmPassword.
Validates password with a minimum of six characters, at least one digit, and one special character.
Validates email format using the regular expression: ^[^\s@]+@[^\s@]+\.[^\s@]+$.
Displays error messages for password mismatch and weak password.
Registers users in Firebase and stores user data.
Generates a registration token using UUIDv4.
Redirects to the home page after successful registration.

Login Component:

Purpose: Handles user login and authentication using Firebase.

Functionality:

Manages form inputs for email and password.
Validates user credentials against Firebase user data.
Logs in users and generates an authentication token.
Stores the authentication token in cookies.
Redirects to the home page after successful login.
Displays error message for invalid credentials.

Contact Component

Purpose: Provides a form for users to contact the service.

Functionality:

Uses Firebase to store user contact information.
Handles form input changes and submission.
Clears the form after submission.
Navigates to another page after successful submission.

Create Blog Component

Purpose: Allows only authenticated users to create and submit blog posts.

Functionality:

Manages form inputs for blog title, content, and any other relevant details.
Validates form inputs and ensures all required fields are filled.
Submits the blog post to Firebase for storage.
Redirects to the details page of the created blog after successful submission.

Details Blog Component

Purpose: Displays detailed information about a specific blog post.

Functionality:

Retrieves and displays blog details from Firebase based on the blog ID.
Shows the blog title, content, author, creation date, or any other relevant details.
Provides options to edit or delete the blog (if the user is the author).

Edit Blog Component

Purpose: Allows only author (user) to edit an existing blog post.

Functionality:

Similar to the Create Blog component but pre-fills the form with existing blog details.
Validates form inputs and ensures all required fields are filled.
Submits the edited blog post to Firebase for updating.
Redirects to the details page of the edited blog after successful submission.

Blog Component

Purpose: Represents a single blog post in a list or grid.

Functionality:

Displays a summary of the blog, including title, author, and creation date.
Provides a link to the Details Blog page for the full blog content.

Features

User Registration: Allows users to register with the service.
User Login/Logout: Handles user authentication.
Contact Form: Users can send messages through the contact form.
Footer Information: Displays project information in the footer.

Styling

The project uses CSS modules for styling. Refer to individual component styles for more details.

State Management

Firebase is used for state management, and components manage their local state as needed.

Routing

The project uses React Router for client-side routing.

API Interaction

Authentication: Manages user authentication using Firebase.
Collections: Manages CRUD operations for authenticated users.

Deployment

To build and deploy the project: npm run build
