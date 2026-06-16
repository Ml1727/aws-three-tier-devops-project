# AWS Three-Tier DevOps Project Notes

## Project Goal

Build a production-style three-tier application using:

- React Frontend
- Express Backend
- PostgreSQL Database later
- Docker
- AWS EC2
- AWS RDS
- Load Balancer
- S3
- CloudFront
- CloudWatch

---

## Current Architecture

Frontend React App
↓
Express Backend API
↓
Database will be added later

---

## Backend APIs Created

### Health API

Endpoint:

```text
GET /health

Users API

Endpoint:

GET /users

Purpose:

Returns sample users.

Products API

Endpoint:

GET /products

Purpose:

Returns sample products.

Orders API

Endpoint:

GET /orders

Purpose:

Returns sample orders.

Why We Use Routes Folder

The routes folder keeps API endpoints organized.

Instead of writing every API inside server.js, we separate APIs into files like:

routes/users.js
routes/products.js
routes/orders.js
routes/health.js

This makes the application easier to read, maintain, and scale.

Frontend

The frontend is built with React and Vite.

It calls backend APIs using:

fetch("/api/users")
fetch("/api/products")
fetch("/api/orders")

Vite proxy forwards /api requests to backend port 5000.

Important DevOps Lesson

Before deploying to AWS, always make sure the application works locally.

Development flow:

Write code
↓
Run locally
↓
Test APIs
↓
Commit to GitHub
↓
Dockerize
↓
Deploy to AWS


## Step 4: Save and push

```bash
git status
git add .
git commit -m "Add DevOps project notes"
git push
