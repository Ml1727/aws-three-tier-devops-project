#!/bin/bash

echo "Updating server..."
sudo apt update -y

echo "Installing Docker..."
sudo apt install docker.io -y

echo "Installing Docker Compose plugin..."
sudo apt install docker-compose-plugin -y

echo "Starting Docker..."
sudo systemctl start docker
sudo systemctl enable docker

echo "Adding ubuntu user to docker group..."
sudo usermod -aG docker ubuntu

echo "Deployment setup completed."
echo "Log out and log back in, then run: docker compose up -d --build"