"""
SentimentSphere - Core Sentiment Analysis Engine
Handles text preprocessing, feature extraction, and sentiment prediction
"""

import joblib
import re
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import numpy as np

class SentimentAnalyzer:
    def __init__(self):
        import os
        import nltk

        nltk.download('punkt')
        nltk.download('stopwords')
        nltk.download('wordnet')

        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))

        BASE_DIR = os.path.dirname(os.path.abspath(__file__))

        try:
            self.vectorizer = joblib.load(os.path.join(BASE_DIR, 'models', 'vectorizer.pkl'))

            self.models = {
                'Naive Bayes': joblib.load(os.path.join(BASE_DIR, 'models', 'naive_bayes_model.pkl')),
                'SVM': joblib.load(os.path.join(BASE_DIR, 'models', 'svm_model.pkl')),
                'Logistic Regression': joblib.load(os.path.join(BASE_DIR, 'models', 'logistic_regression_model.pkl'))
            }

            print("✓ Models loaded successfully")

        except Exception as e:
            print("❌ MODEL LOADING ERROR:")
            print(e)
            raise
    
    def preprocess_text(self, text):
        """
        Preprocess input text
        - Convert to lowercase
        - Remove special characters
        - Tokenize
        - Remove stopwords
        - Lemmatize
        """
        # Convert to lowercase
        text = text.lower()
        
        # Remove special characters and digits
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        
        # Tokenize
        tokens = word_tokenize(text)
        
        # Remove stopwords and lemmatize
        tokens = [self.lemmatizer.lemmatize(word) for word in tokens 
                 if word not in self.stop_words and len(word) > 2]
        
        return ' '.join(tokens)
    
    def analyze_sentiment(self, text, model_name='all'):
        """
        Analyze sentiment of input text
        
        Args:
            text (str): Input text to analyze
            model_name (str): Specific model to use or 'all' for all models
            
        Returns:
            dict: Analysis results with sentiment and confidence scores
        """
        # Preprocess text
        processed_text = self.preprocess_text(text)
        
        # Vectorize
        text_vec = self.vectorizer.transform([processed_text])
        
        results = {}
        
        if model_name == 'all':
            # Analyze with all models
            for name, model in self.models.items():
                prediction = model.predict(text_vec)[0]
                probabilities = model.predict_proba(text_vec)[0]
                
                # Get confidence (max probability)
                confidence = float(np.max(probabilities))
                
                # Get probability for each class
                classes = model.classes_
                prob_dict = {cls: float(prob) for cls, prob in zip(classes, probabilities)}
                
                results[name] = {
                    'sentiment': prediction,
                    'confidence': confidence,
                    'probabilities': prob_dict
                }
        else:
            # Analyze with specific model
            if model_name not in self.models:
                raise ValueError(f"Model '{model_name}' not found. Available models: {list(self.models.keys())}")
            
            model = self.models[model_name]
            prediction = model.predict(text_vec)[0]
            probabilities = model.predict_proba(text_vec)[0]
            
            confidence = float(np.max(probabilities))
            classes = model.classes_
            prob_dict = {cls: float(prob) for cls, prob in zip(classes, probabilities)}
            
            results[model_name] = {
                'sentiment': prediction,
                'confidence': confidence,
                'probabilities': prob_dict
            }
        
        return results
    
    def batch_analyze(self, texts, model_name='all'):
        """
        Analyze sentiment for multiple texts
        
        Args:
            texts (list): List of texts to analyze
            model_name (str): Model to use
            
        Returns:
            list: List of analysis results
        """
        results = []
        for text in texts:
            result = self.analyze_sentiment(text, model_name)
            results.append({
                'text': text,
                'analysis': result
            })
        return results
    
    def get_ensemble_prediction(self, text):
        """
        Get ensemble prediction by combining all models
        Uses majority voting for sentiment and average confidence
        
        Args:
            text (str): Input text
            
        Returns:
            dict: Ensemble prediction result
        """
        results = self.analyze_sentiment(text, 'all')
        
        # Collect sentiments and confidences
        sentiments = [res['sentiment'] for res in results.values()]
        confidences = [res['confidence'] for res in results.values()]
        
        # Majority vote for sentiment
        from collections import Counter
        sentiment_counts = Counter(sentiments)
        ensemble_sentiment = sentiment_counts.most_common(1)[0][0]
        
        # Average confidence
        ensemble_confidence = float(np.mean(confidences))
        
        # Calculate agreement level
        agreement = sentiment_counts[ensemble_sentiment] / len(sentiments)
        
        return {
            'sentiment': ensemble_sentiment,
            'confidence': ensemble_confidence,
            'agreement': float(agreement),
            'individual_results': results
        }
    
    def get_available_models(self):
        """Get list of available models"""
        return list(self.models.keys())

if __name__ == "__main__":
    # Test the analyzer
    analyzer = SentimentAnalyzer()
    
    test_texts = [
        "I love this product! It's amazing!",
        "This is terrible. Very disappointed.",
        "The product arrived on time."
    ]
    
    print("\nTesting Sentiment Analyzer\n" + "="*60)
    for text in test_texts:
        print(f"\nText: {text}")
        result = analyzer.get_ensemble_prediction(text)
        print(f"Sentiment: {result['sentiment']}")
        print(f"Confidence: {result['confidence']:.2%}")
        print(f"Agreement: {result['agreement']:.2%}")
