"""
SentimentSphere - Flask API Server
Provides REST API endpoints for sentiment analysis
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment_analyzer import SentimentAnalyzer
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

# Initialize sentiment analyzer
try:
    analyzer = SentimentAnalyzer()
    print("✓ Sentiment Analyzer initialized successfully")
except Exception as e:
    print(f"Error initializing analyzer: {e}")
    analyzer = None

@app.route('/')
def home():
    """API home endpoint"""
    return jsonify({
        'message': 'Welcome to SentimentSphere API',
        'version': '1.0.0',
        'endpoints': {
            '/api/analyze': 'POST - Analyze single text',
            '/api/analyze-batch': 'POST - Analyze multiple texts',
            '/api/models': 'GET - Get available models',
            '/api/compare': 'POST - Compare model predictions'
        }
    })

@app.route('/api/analyze', methods=['POST'])
def analyze_text():
    """
    Analyze sentiment of a single text
    
    Request body:
    {
        "text": "Text to analyze",
        "model": "Naive Bayes" (optional, defaults to ensemble)
    }
    """
    if not analyzer:
        return jsonify({'error': 'Analyzer not initialized. Please train models first.'}), 500
    
    try:
        data = request.get_json()
        
        if not data or 'text' not in data:
            return jsonify({'error': 'No text provided'}), 400
        
        text = data['text']
        
        if not text or len(text.strip()) == 0:
            return jsonify({'error': 'Text cannot be empty'}), 400
        
        # Get ensemble prediction by default
        result = analyzer.get_ensemble_prediction(text)
        
        return jsonify({
            'success': True,
            'text': text,
            'result': result
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/analyze-batch', methods=['POST'])
def analyze_batch():
    """
    Analyze sentiment of multiple texts
    
    Request body:
    {
        "texts": ["text1", "text2", ...],
        "model": "all" (optional)
    }
    """
    if not analyzer:
        return jsonify({'error': 'Analyzer not initialized'}), 500
    
    try:
        data = request.get_json()
        
        if not data or 'texts' not in data:
            return jsonify({'error': 'No texts provided'}), 400
        
        texts = data['texts']
        
        if not isinstance(texts, list) or len(texts) == 0:
            return jsonify({'error': 'Texts must be a non-empty list'}), 400
        
        model = data.get('model', 'all')
        
        results = analyzer.batch_analyze(texts, model)
        
        return jsonify({
            'success': True,
            'count': len(results),
            'results': results
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/models', methods=['GET'])
def get_models():
    """Get list of available models"""
    if not analyzer:
        return jsonify({'error': 'Analyzer not initialized'}), 500
    
    try:
        models = analyzer.get_available_models()
        return jsonify({
            'success': True,
            'models': models
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/compare', methods=['POST'])
def compare_models():
    """
    Compare predictions from all models
    
    Request body:
    {
        "text": "Text to analyze"
    }
    """
    if not analyzer:
        return jsonify({'error': 'Analyzer not initialized'}), 500
    
    try:
        data = request.get_json()
        
        if not data or 'text' not in data:
            return jsonify({'error': 'No text provided'}), 400
        
        text = data['text']
        
        if not text or len(text.strip()) == 0:
            return jsonify({'error': 'Text cannot be empty'}), 400
        
        # Get predictions from all models
        results = analyzer.analyze_sentiment(text, 'all')
        
        # Calculate ensemble
        ensemble = analyzer.get_ensemble_prediction(text)
        
        return jsonify({
            'success': True,
            'text': text,
            'individual_models': results,
            'ensemble': {
                'sentiment': ensemble['sentiment'],
                'confidence': ensemble['confidence'],
                'agreement': ensemble['agreement']
            }
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'analyzer_ready': analyzer is not None
    })

if __name__ == '__main__':
    print("\n" + "="*60)
    print("🌐 SentimentSphere API Server")
    print("="*60)

    port = int(os.environ.get("PORT", 10000))  # 🔥 IMPORTANT

    print(f"Starting server on port {port}")
    print("="*60 + "\n")

    app.run(debug=False, host='0.0.0.0', port=port)
