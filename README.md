# AWS Three-Tier DevOps Project

A production-style three-tier web application built using **React**, **Express.js**, **PostgreSQL**, **Docker**, **Nginx**, **GitHub Actions**, and **AWS**.

The project demonstrates how to build, containerize, and deploy a scalable full-stack application following modern DevOps practices.

---

# Architecture

```
                React Frontend
                       │
                       ▼
                Nginx Reverse Proxy
                       │
                       ▼
              Express.js Backend API
                       │
                       ▼
                PostgreSQL Database
```

---

# Features

- React frontend dashboard
- Express REST API
- PostgreSQL database
- Docker & Docker Compose
- Nginx reverse proxy
- GitHub Actions CI/CD
- Helmet security headers
- Express Rate Limiter
- Morgan request logging
- CORS support
- Input validation
- Centralized error handling
- CRUD operations
- Health Check endpoint

---

# Tech Stack

### Frontend

- React
- Vite
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

### DevOps

- Docker
- Docker Compose
- Nginx
- GitHub Actions

### Cloud

- AWS EC2
- AWS Application Load Balancer
- AWS CloudWatch

---

# Project Structure

```
aws-three-tier-devops-project
│
├── frontend/
│
├── backend/
│
├── database/
│
├── docs/
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
│
└── README.md
```

---

# API Endpoints

## Health

GET

```
/health
```

---

## Users

GET

```
/users
```

POST

```
/users
```

PUT

```
/users/:id
```

DELETE

```
/users/:id
```

---

## Products

GET

```
/products
```

---

## Orders

GET

```
/orders
```

---

# Running the Project

## Clone Repository

```bash
git clone <repository-url>
```

---

## Start Containers

```bash
docker compose up --build
```

---

## Stop Containers

```bash
docker compose down
```

---

# Application URLs

Frontend

```
http://localhost:3000
```

Backend

```
http://localhost:5000
```

Health Check

```
http://localhost:5000/health
```

---

# Database

PostgreSQL runs inside Docker.

Example connection:

Host

```
localhost
```

Port

```
5432
```

Database

```
appdb
```

Username

```
appuser
```

---

# CI/CD Pipeline

GitHub Actions automatically:

- Builds the project
- Connects to AWS EC2
- Pulls the latest code
- Rebuilds Docker containers
- Deploys the updated application

---

# AWS Services Used

- Amazon EC2
- Application Load Balancer
- CloudWatch
- Security Groups
- IAM
- VPC

---

# Security

- Helmet
- Rate Limiting
- Input Validation
- Error Handling
- CORS

---

# Future Improvements

- JWT Authentication
- Role-Based Access Control
- Swagger API Documentation
- Terraform Infrastructure
- AWS RDS
- Amazon ECS
- Kubernetes Deployment
- Prometheus Monitoring
- Grafana Dashboard

---

# Author

Built by **Sishir** as a portfolio project demonstrating Full Stack Development, Docker, DevOps, CI/CD, and AWS deployment.