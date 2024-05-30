#!/bin/bash

# Run npm install
echo "Running npm install..."
npm install
echo "npm install completed."

# Run docker compose up
echo "Starting Docker containers..."
docker compose up -d
echo "Docker containers started."

# Run npm run start:dev
echo "Starting development server..."
npm run start:dev
