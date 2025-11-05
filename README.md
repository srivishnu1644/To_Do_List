# 🚀 Full-Stack To-Do List (MERN)

This is a complete full-stack To-Do list application built as part of the Owl AI (Overload Ware Labs AI) virtual internship.

It features a backend API built with **Node.js, Express, and MongoDB**, and a responsive frontend client built with **React**.

---

## ✨ Key Features

- **Full CRUD Functionality:** Create, Read, Update, and Delete tasks.
- **Permanent Storage:** All tasks are saved permanently in a MongoDB Atlas database.
- **Dual-Theme Mode:** A sleek toggle to switch between a clean light mode and a modern dark/neon mode.
- **Responsive Design:** The app is fully mobile-friendly, with a layout that adapts to any screen size.
- **Modern UI:** Built with React, featuring animations and a clean, user-friendly interface.

---

## 🛠️ Tech Stack

This project is built using the MERN stack and other modern technologies:

### Backend (Server)

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Fast, minimal web framework for the API.
- **MongoDB Atlas:** Cloud-hosted NoSQL database.
- **Mongoose:** Object Data Modeler (ODM) to manage data in MongoDB.
- **`cors`:** To handle cross-origin requests from the client.
- **`dotenv`:** To manage environment variables (like the database password).

### Frontend (Client)

- **React:** A JavaScript library for building user interfaces.
- **Vite:** High-performance frontend build tool.
- **`axios`:** For making HTTP requests to the backend API.
- **`localStorage`:** To save the user's light/dark mode preference.
- **Modern CSS:** Includes Flexbox, Media Queries, and Keyframe Animations.

---

## ⚙️ How to Run Locally

To run this project on your local machine, you will need to run **both** the `server` and `client` applications.

### 1. Prerequisites

- Node.js installed.
- A MongoDB Atlas account (or a local MongoDB instance).

### 2. Backend Setup (Server)

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install the required packages:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` directory.
4.  Add your MongoDB connection string to the `.env` file:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```
5.  Start the backend server:
    ```bash
    npm run dev
    ```
    _The server will be running on `http://localhost:3001`._

### 3. Frontend Setup (Client)

1.  Open a **new terminal** and navigate to the `client` (or `To_Do_List`) directory:
    ```bash
    cd client
    ```
2.  Install the required packages:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm run dev
    ```
    _The app will open in your browser at `http://localhost:5173`._
