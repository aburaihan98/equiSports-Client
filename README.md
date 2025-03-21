# EquiSports - A Sports Equipment Store🏆  

EquiSports is a **sports accessories e-commerce platform** where users can browse, purchase, and manage sports equipment. The website includes **user authentication, product management, sorting, filtering, and a dark/light theme toggle** for a seamless experience. Users can add, update, and delete their listed equipment while enjoying an intuitive UI with **Lottie animations and smooth transitions**. The site ensures **secure authentication with Firebase and protected routes with JWT**, providing a reliable shopping experience. 🚀

![EquiSports Screenshot](https://i.ibb.co.com/xqR1L0Wv/equesports.png)

## live project links:
https://equisports-8e6c5.web.app/

## **Core Features**
- **User Authentication**: Users can log in and register using email/password or OAuth (Google/GitHub/Facebook/Twitter).
- **Product Management**: Admin users can add, update, or delete sports equipment.
- **Private Routes**: Certain pages, such as "Add Equipment" and "My Equipment List," are accessible only to authenticated users.
- **Product Sorting**: Users can sort products by price (ascending/descending).
- **Responsive Design**: The site is fully responsive, optimized for mobile, tablet, and desktop.
- **Dark/Light Mode Toggle**: Users can switch between dark and light themes.
- **Product Details**: Each product has its own details page with more information and a "View Details" button.
- **404 Page**: A dedicated error page for non-existing routes.
- **Loading Spinner**: A spinner is displayed while loading data.

## **Technologies Used**
- **Frontend**:
  - `React.js`: JavaScript library for building user interfaces.
  - `React Router`: Library for handling client-side routing in React applications.
  - `Firebase`: Authentication for user login and registration.
  - `Tailwind CSS`: Utility-first CSS framework for styling.
  - `Lottie React`: A React component for rendering animations.
  - `React Awesome Reveal`: A package for adding scroll-based animations.
  - `React Tooltip`: Adds tooltips to elements.
  - `React Toastify`: For displaying toast notifications.
  
- **Backend**:
  - `Node.js`: JavaScript runtime built on Chrome's V8 JavaScript engine.
  - `Express`: Fast, unopinionated web framework for Node.js.
  - `MongoDB`: NoSQL database for storing product and user data.
  - `Mongoose`: MongoDB ORM for handling data models.
  - `JWT (JSON Web Token)`: For user authentication and authorization.
  - `dotenv`: Loads environment variables from a `.env` file.

- **Hosting**:
  - **Frontend**: Firebase Hosting.
  - **Backend**: Vercel.

## **Dependencies Used**
- **Frontend**:
  - `react`: ^18.3.1
  - `react-router-dom`: ^7.0.2
  - `firebase`: ^11.0.2
  - `lottie-react`: ^2.4.0
  - `react-awesome-reveal`: ^4.2.14
  - `react-tooltip`: ^5.28.0
  - `react-toastify`: ^10.0.6
  - `tailwindcss`: ^3.4.15
  - `react-icons`: ^5.4.0

- **Backend**:
  - `express`: ^4.17.1
  - `mongoose`: ^6.0.13
  - `jsonwebtoken`: ^8.5.1
  - `dotenv`: ^10.0.0

## **How to Run the Project Locally**

### Prerequisites
- Node.js
- MongoDB instance
- Firebase credentials (for authentication)

## Steps to Run Locally

### 1. Clone this repository -
git clone https://github.com/aburaihan98/EquiSports-Client.git

### 2. Go to the cloned project directory
cd EquiSports-Client

### 3. Just run this command to install node dependencies
npm install

### 4. Just run this command
npm run dev
