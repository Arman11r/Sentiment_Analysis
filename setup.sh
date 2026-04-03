#!/bin/bash

# SentimentSphere Setup Script
echo "=========================="
echo "SentimentSphere Setup"
echo "=========================="

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start development:"
echo "  Frontend: npm run dev (in ./frontend)"
echo "  Backend:  python app.py (in ./backend)"
echo ""
echo "To build for production:"
echo "  npm run build (in ./frontend)"
echo ""
echo "To deploy to Vercel:"
echo "  vercel (in project root)"
