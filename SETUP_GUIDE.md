# 🚀 SentimentSphere - Local Setup Guide

This guide will help you run SentimentSphere on your local machine using Vite for a modern development experience.

## 📋 What You Need
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Python** 3.8 or higher
- A web browser
- 2 terminal windows

---

## ⚡ Quick Start (3 Steps)

### Step 1: Install Frontend Dependencies (First Time Only)

Open your terminal and run:

```bash
# Go to frontend folder
cd SentimentSphere/frontend

# Install dependencies (first time only)
npm install
```

This installs Vite and other necessary packages.

---

### Step 2: Start Backend Server (Terminal 1)

In your first terminal, run:

```bash
# Go to backend folder
cd SentimentSphere/backend

# Install Python dependencies (first time only)
pip install -r requirements.txt

# Train ML models (first time only - takes 2-3 minutes)
python train_models.py

# Start Flask backend server
python3 app.py
```

✅ **Backend runs on:** http://localhost:5000

You should see:
```
✓ Models loaded successfully
✓ Sentiment Analyzer initialized successfully
🌐 SentimentSphere API Server
Starting server on http://localhost:5000
```

**Keep this terminal running!**

---

### Step 3: Start Frontend Server (Terminal 2)

Open a **second terminal** and run:

```bash
# Go to frontend folder
cd SentimentSphere/frontend

# Start Vite development server
npm run dev
```

✅ **Frontend runs on:** http://localhost:3000

You should see:
```
  VITE v7.3.1  ready in 207 ms
  
  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

**Keep this terminal running too!**

---

### Step 4: Open Application

Open your browser and go to:
```
http://localhost:3000
```

🎉 **That's it! SentimentSphere is now running with hot reload!**

---

## 🎯 What is Vite?

Vite is a modern build tool that provides:
- ⚡ **Lightning fast** hot reload (changes appear instantly)
- 🔄 **Auto refresh** when you edit files
- 📦 **Optimized builds** for better performance
- 🛠️ **Better error messages** to help debug

---

## 🔄 Alternative: Simple HTTP Server (Without Vite)

If you prefer not to use Node.js/Vite, you can use Python's simple HTTP server:

```bash
cd SentimentSphere/frontend
python3 -m http.server 3000
```
Then open: http://localhost:3000

**Note:** This won't have hot reload or other Vite features.

---

## 🛑 Stopping the Servers

To stop either server, press `Ctrl + C` in the respective terminal.

---

## 📱 Quick Feature Guide

### 🎬 Movie Analysis
1. Click **"Movies"** tab in navigation
2. Type a movie name (e.g., "Dangal", "Inception", "3 Idiots")
3. See real-time suggestions as you type
4. Click a suggestion or press Enter to analyze
5. View sentiment breakdown of reviews

### 🍽️ Restaurant Analysis  
1. Click **"Restaurants"** tab
2. Search by name, cuisine, or location (e.g., "Brijwasi", "pizza", "cafe")
3. See real-time recommendations
4. Click "Search Restaurants" to view sentiment analysis
5. Explore reviews and ratings

### ✍️ Custom Text Analysis
1. Click **"Analyze Text"** tab
2. Type or paste your own text/review
3. Try the sample texts for quick testing
4. Click "Analyze Sentiment"
5. View detailed results with:
   - Sentiment (Positive/Negative/Neutral)
   - Confidence score
   - Model agreement percentage

---

## 🔧 Troubleshooting

### Node.js/NPM Issues
**Problem:** `npm: command not found`  
**Solution:** Install Node.js from https://nodejs.org/

**Problem:** `npm install` fails  
**Solution:** 
```bash
# Clear npm cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues
**Problem:** Backend won't start  
**Solution:**
- Check Python version: `python3 --version` (should be 3.8+)
- Install dependencies: `pip install -r requirements.txt`
- Train models: `python train_models.py`

**Problem:** Port 5000 already in use  
**Solution:** Kill the process or use a different port:
```bash
# Find what's using port 5000
lsof -i :5000
# Kill it (replace PID with actual process ID)
kill -9 PID
```

### Frontend Issues  
**Problem:** Port 3000 already in use  
**Solution:** Vite will automatically try port 3001, 3002, etc.

**Problem:** Can't connect to backend  
**Solution:**
- Make sure backend is running on http://localhost:5000
- Check `.env` file has: `VITE_API_BASE_URL=http://localhost:5000/api`
- Look for errors in browser console (F12)

**Problem:** Changes not appearing  
**Solution:** Vite has hot reload, but try:
- Save the file again (Cmd/Ctrl + S)
- Refresh browser (Cmd/Ctrl + R)
- Stop and restart dev server

---

## 📝 Server Status Checklist

Before using the app, verify:

✅ Node.js installed (`node --version`)  
✅ Python installed (`python3 --version`)  
✅ Frontend dependencies installed (`npm install` completed)  
✅ Backend models trained (`train_models.py` completed)  
✅ Backend running on http://localhost:5000  
✅ Frontend running on http://localhost:3000  
✅ Browser open at http://localhost:3000  
✅ No errors in either terminal  

---

## 💡 Development Tips

### For Better Experience:
1. **Keep both terminals visible** side by side to monitor logs
2. **Edit files** in your code editor - Vite will auto-reload the browser
3. **Check backend terminal** to see API requests in real-time
4. **Open browser DevTools** (F12) to see network requests and console logs
5. **Use browser incognito** to avoid caching issues when testing

### Useful Commands:
```bash
# Frontend (in /frontend directory)
npm run dev      # Start development server
npm run build    # Build for production (creates dist/ folder)
npm run preview  # Preview production build locally

# Backend (in /backend directory)
python3 app.py           # Start API server
python train_models.py   # Retrain ML models
```

---

## 🎨 Project Structure

```
SentimentSphere/
├── frontend/              # Vite Frontend
│   ├── index.html        # Main HTML file
│   ├── app.js            # JavaScript logic
│   ├── style.css         # Styling
│   ├── package.json      # Node dependencies
│   ├── vite.config.js    # Vite configuration
│   └── .env              # Environment variables
├── backend/              # Flask Backend
│   ├── app.py            # API server
│   ├── sentiment_analyzer.py
│   ├── train_models.py
│   └── requirements.txt  # Python dependencies
└── SETUP_GUIDE.md        # This file
```

---

## 🚀 Next Steps

Once you have the app running:

1. **Explore the features** - Try analyzing different movies and restaurants
2. **Test custom text** - Use your own reviews or feedback
3. **Modify the code** - Edit files and see changes instantly with Vite
4. **Check the data** - Review `moviesDatabase.js` for available movies

---

**Built with ❤️ using:**
- **Frontend:** Vite, Vanilla JavaScript, Modern CSS
- **Backend:** Python, Flask, scikit-learn, NLTK
- **ML Models:** Naive Bayes, SVM, Logistic Regression
