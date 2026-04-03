"""
SentimentSphere - Model Training Script
Trains multiple ML models for sentiment analysis
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import joblib
import os
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import re

# Download required NLTK data
print("Downloading NLTK data...")
nltk.download('punkt', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('wordnet', quiet=True)
nltk.download('omw-1.4', quiet=True)

class SentimentModelTrainer:
    def __init__(self, data_path):
        self.data_path = data_path
        self.vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1, 2))
        self.models = {
            'Naive Bayes': MultinomialNB(alpha=0.1),
            'SVM': SVC(kernel='linear', probability=True, C=1.0),
            'Logistic Regression': LogisticRegression(max_iter=1000, C=1.0)
        }
        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))
        
    def preprocess_text(self, text):
        """Preprocess text: lowercase, remove special chars, lemmatize"""
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
    
    def load_and_prepare_data(self):
        """Load data and split into train/test sets"""
        print(f"\nLoading data from {self.data_path}...")
        df = pd.read_csv(self.data_path)
        
        print(f"Dataset size: {len(df)} samples")
        print(f"Sentiment distribution:\n{df['sentiment'].value_counts()}")
        
        # Preprocess texts
        print("\nPreprocessing texts...")
        df['processed_text'] = df['text'].apply(self.preprocess_text)
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            df['processed_text'], 
            df['sentiment'], 
            test_size=0.2, 
            random_state=42,
            stratify=df['sentiment']
        )
        
        return X_train, X_test, y_train, y_test
    
    def train_models(self):
        """Train all models and save them"""
        X_train, X_test, y_train, y_test = self.load_and_prepare_data()
        
        # Fit vectorizer and transform data
        print("\nVectorizing text data...")
        X_train_vec = self.vectorizer.fit_transform(X_train)
        X_test_vec = self.vectorizer.transform(X_test)
        
        results = {}
        
        # Train each model
        for model_name, model in self.models.items():
            print(f"\n{'='*60}")
            print(f"Training {model_name}...")
            print('='*60)
            
            # Train
            model.fit(X_train_vec, y_train)
            
            # Predict
            y_pred = model.predict(X_test_vec)
            
            # Evaluate
            accuracy = accuracy_score(y_test, y_pred)
            results[model_name] = accuracy
            
            print(f"\nAccuracy: {accuracy:.4f}")
            print(f"\nClassification Report:")
            print(classification_report(y_test, y_pred))
            print(f"\nConfusion Matrix:")
            print(confusion_matrix(y_test, y_pred))
            
            # Save model
            model_filename = f"models/{model_name.lower().replace(' ', '_')}_model.pkl"
            joblib.dump(model, model_filename)
            print(f"\nModel saved to {model_filename}")
        
        # Save vectorizer
        vectorizer_filename = "models/vectorizer.pkl"
        joblib.dump(self.vectorizer, vectorizer_filename)
        print(f"\nVectorizer saved to {vectorizer_filename}")
        
        # Print summary
        print(f"\n{'='*60}")
        print("TRAINING SUMMARY")
        print('='*60)
        for model_name, accuracy in results.items():
            print(f"{model_name:25s}: {accuracy:.4f}")
        print('='*60)
        
        return results

if __name__ == "__main__":
    # Create models directory if it doesn't exist
    os.makedirs('models', exist_ok=True)
    
    # Train models
    trainer = SentimentModelTrainer('data/sample_data.csv')
    results = trainer.train_models()
    
    print("\n✓ Model training completed successfully!")
    print("✓ All models saved and ready for use")
