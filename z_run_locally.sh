#!/bin/bash

# Check if nvm is available
if command -v nvm &> /dev/null; then
    # Use Node.js 18 or higher
    nvm use 18 || nvm use stable
fi

# Install dependencies (use npm install for local dev)
npm install

# Run the application in dev mode
npm run dev

