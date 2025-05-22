# ResumeWizard

ResumeWizard is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that enables users to create and download professional resumes effortlessly. 

## Features

- **User Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Form-Based Input**: Users can fill out various sections such as Personal Information, Education, Experience, Projects, Skills, Achievements, and Certifications.
- **Resume Generation**: Automatically generates a well-formatted resume based on the user's input.
- **Downloadable Resumes**: Users can download their resumes in a PDF format.

## Technologies Used

- **Frontend**:
  - React
  - Redux 
  - Axios (for making HTTP requests)
  - Material UI
  - CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JSON Web Tokens (JWT) for authentication
- **Other Tools and Libraries**:
  - dotenv (for environment variables)
  - bcrypt (for password hashing)
  - cookie-parser (for handling cookies)
  - Render (for deployment)
  - Git (for version control)

## Topics

- MERN Stack
- JWT Authentication
- Form Handling
- Resume Generation
- PDF Download
- Full-Stack Development

  

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ResumeWizard.git
    cd ResumeWizard
    ```

2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```
4.Start the development server:
 ```sh
    npm start
    ```
5.Open your web browser and navigate to http://localhost:3000 to view the application.

##Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key

Create a `.env` file in the `frontend` directory and add the following environment variable:
```env
REACT_APP_API_URL=http://localhost:4000
