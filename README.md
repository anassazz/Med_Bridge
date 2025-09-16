#  Hospital Management System (MERN)

##  Description

The **Hospital Management System (HMS)** is a full-stack web application built using the **MERN stack** (MongoDB, Express, React, Node.js). It aims to digitalize and centralize hospital operations by providing a secure, scalable, and user-friendly platform for patients, doctors, nurses, labs, and administrators.

---

##  Features

* **Authentication & Authorization** (JWT, RBAC)
* **Patient Management**: profiles, medical history, allergies, prescriptions
* **Doctor Module**: consultations, prescriptions, appointments
* **Appointments & Scheduling**: booking, agenda views (day/week/month)
* **Laboratory**: test requests, result uploads, notifications
* **Messaging System**: real-time chat (Socket.IO)
* **Notifications**: real-time for appointments, lab results, messages
* **Billing & Invoices** (optional)
* **Admin Dashboard**: user management, statistics, reports

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* TailwindCSS / Material UI
* Axios

### Backend

* Node.js
* Express.js
* Mongoose (ODM for MongoDB)

### Database

* MongoDB

### Realtime

* Socket.IO

### DevOps

* Docker / Docker Compose
* Nginx (reverse proxy)
* GitHub Actions / GitLab CI (CI/CD)

### Testing

* Jest / Supertest (backend)
* React Testing Library (frontend)

---

## Project Structure

```
HMS-MERN/
│
├── backend/              # Express server & API
│   ├── controllers/      # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   ├── middlewares/      # Authentication, error handling
│   ├── utils/            # Helper functions
│   └── server.js         # Entry point
│
├── frontend/             # React app
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main pages (Login, Dashboard, etc.)
│   │   ├── context/      # Auth & state management
│   │   ├── utils/        # API calls, helpers
│   │   └── App.js        # Main app component
│   └── package.json
│
├── docker-compose.yml    # Container setup
├── README.md             # Project documentation
└── .env.example          # Environment variables template
```

---

## ⚙️ Installation

### Prerequisites

* Node.js >= 18
* MongoDB (local or cloud, e.g., MongoDB Atlas)
* Docker (optional, for containerized setup)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hms-mern.git
   cd hms-mern
   ```

2. Setup environment variables:

   * Copy `.env.example` to `.env` in **backend** & **frontend** folders.
   * Configure MongoDB URI, JWT secret, ports, etc.

3. Install dependencies:

   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

4. Run the development servers:

   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd ../frontend
   npm start
   ```

5. Open the app in your browser:

   ```
   http://localhost:3000
   ```





```bash
docker-compose up --build
```

This will spin up the backend, frontend, and MongoDB services.





---


```bash
cd backend
npm test
```

Run frontend tests:

```bash
cd frontend
npm test
```




---

##  Contribution

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

##  Authors

* ANASS AZZ(https://github.com/anassazz) — Full Stack Developer
