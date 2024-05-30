#!/bin/bash

# Run npm install
echo "Running npm install..."
npm install
echo "npm install completed."

# Generate .env file from example
echo "Generating .env variables"
cp .env.example .env
echo "Generation completed"

# Run npm run start:dev
echo "Starting development server..."
npm run dev