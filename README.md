# 🌟 SentimentSphere

**AI-Powered Sentiment Analysis for Movies & Restaurants**

A modern web application that uses machine learning to analyze sentiments from movie and restaurant reviews in real-time.

![SentimentSphere](https://img.shields.io/badge/ML-Sentiment%20Analysis-purple)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF)
![Flask](https://img.shields.io/badge/Flask-API-green)

---

## ✨ Features

- 🎬 **Movie Sentiment Analysis** - Analyze reviews from popular movies
- 🍽️ **Restaurant Reviews** - Sentiment analysis for restaurants in Mathura
- ✍️ **Custom Text Analysis** - Analyze any text or review
- 🤖 **Triple ML Models** - Naive Bayes, SVM, and Logistic Regression
- 📊 **Real-time Results** - Instant sentiment analysis with confidence scores
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast development

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **Python** 3.8+

### Installation & Running

**1. Install Frontend Dependencies**
```bash
cd frontend
npm install
```

**2. Start Backend (Terminal 1)**
```bash
cd backend
pip install -r requirements.txt
python train_models.py  # First time only
python3 app.py
```

**3. Start Frontend (Terminal 2)**
```bash
cd frontend
npm run dev
```

**4. Open Browser**
```
http://localhost:3000
```

**That's it! 🎉**

---

## 📁 Project Structure

```
SentimentSphere/
├── frontend/              # Vite + Vanilla JS Frontend
│   ├── index.html        # Main page
│   ├── app.js            # Application logic
│   ├── style.css         # Styling
│   ├── moviesDatabase.js # Movie data
│   └── vite.config.js    # Vite configuration
├── backend/              # Flask API
│   ├── app.py            # API server
│   ├── sentiment_analyzer.py  # ML models
│   ├── train_models.py   # Model training
│   └── requirements.txt  # Python dependencies
└── SETUP_GUIDE.md        # Detailed setup instructions
```

---

## 🛠️ Technology Stack

### Frontend
- **Vite** - Build tool & dev server
- **Vanilla JavaScript** - No frameworks, pure JS
- **Modern CSS** - Custom styling with gradients & animations
- **Chart.js** - Data visualization

### Backend
- **Flask** - Python web framework
- **scikit-learn** - Machine learning models
- **NLTK** - Natural language processing
- **CORS** - Cross-origin resource sharing

### ML Models
- **Naive Bayes** - Probabilistic classifier
- **SVM** - Support Vector Machine
- **Logistic Regression** - Statistical model
- **Ensemble Voting** - Combined predictions

---

## 📖 How It Works

1. **User inputs** a movie name, restaurant, or custom text
2. **Frontend sends** request to Flask API
3. **Backend processes** text using NLP (tokenization, stemming)
4. **Three ML models** analyze the sentiment independently
5. **Ensemble voting** combines predictions for accuracy
6. **Results displayed** with confidence scores and visualizations

---

## 🎯 Use Cases

- 📊 **Market Research** - Analyze customer feedback
- 🎬 **Movie Reviews** - Understand audience reception
- 🍽️ **Restaurant Ratings** - Gauge dining experiences
- 📝 **Content Moderation** - Detect negative sentiments
- 💬 **Social Media** - Analyze comments and posts

---

## 🔧 Development

### Run Development Server
```bash
# Frontend with hot reload
cd frontend && npm run dev

# Backend with debug mode
cd backend && python3 app.py
```

### Build for Production
```bash
cd frontend
npm run build
```

### Preview Production Build
```bash
cd frontend
npm run preview
```

---

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/analyze` | POST | Analyze single text |
| `/api/analyze-batch` | POST | Analyze multiple texts |
| `/api/models` | GET | Get available models |
| `/api/compare` | POST | Compare model predictions |

---

## 🐛 Troubleshooting

**Frontend not loading?**
- Check Node.js is installed: `node --version`
- Run `npm install` in frontend directory
- Make sure port 3000 is available

**Backend errors?**
- Verify Python 3.8+: `python3 --version`
- Install dependencies: `pip install -r requirements.txt`
- Train models first: `python train_models.py`

**Can't connect to API?**
- Ensure backend runs on http://localhost:5000
- Check `.env` file in frontend folder
- Look for CORS errors in browser console

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed troubleshooting.

---

## 📝 Environment Variables

Create `.env` file in `frontend/`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🎓 Learning Resources

This project demonstrates:
- ✅ Machine Learning integration in web apps
- ✅ REST API design with Flask
- ✅ Modern frontend development with Vite
- ✅ Natural Language Processing basics
- ✅ Ensemble ML model techniques

---

## 📄 License

This project is open source and available under the ISC License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## 📞 Support

For detailed setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)

---

**Made with ❤️ by Arman**

*Analyzing sentiments, understanding emotions* 🌟
