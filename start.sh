#!/bin/bash

echo "🚀 Starting Noctura Landing Page..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🌐 Starting development server..."
echo "📍 Open http://localhost:5173 in your browser"
echo "🛑 Press Ctrl+C to stop"
echo ""

npm run dev 