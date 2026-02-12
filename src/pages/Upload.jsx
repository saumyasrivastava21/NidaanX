import { useState } from 'react';
import UploadArea from '../components/UploadArea';
import DiseaseProbabilityBar from '../components/DiseaseProbabilityBar';
// import axios from 'axios'; // Uncomment when API is ready
// import api from '../services/api';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Dummy data for demonstration
  const dummyResults = {
    normal: 68,
    pneumonia: 25,
    tuberculosis: 5,
    covid: 2,
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setAnalysisResult(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setLoading(true);
    try {
      // API call would go here
      // const formData = new FormData();
      // formData.append('image', selectedFile);
      // const response = await axios.post('/api/analyze', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Set dummy results
      setAnalysisResult(dummyResults);
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getSeverity = (probability) => {
    if (probability < 30) return 'low';
    if (probability < 70) return 'medium';
    return 'high';
  };

  return (
    <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Upload X-Ray
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Upload an X-ray image for AI-powered disease detection analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Upload Image
            </h2>
            <UploadArea onFileSelect={handleFileSelect} />
            {selectedFile && (
              <div className="mt-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">File:</span> {selectedFile.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Size:</span> {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </span>
                  ) : (
                    'Analyze X-Ray'
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Analysis Results
            </h2>
            {analysisResult ? (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Disease Probability
                  </h3>
                  <DiseaseProbabilityBar
                    disease="Normal"
                    probability={analysisResult.normal}
                    severity={getSeverity(analysisResult.normal)}
                  />
                  <DiseaseProbabilityBar
                    disease="Pneumonia"
                    probability={analysisResult.pneumonia}
                    severity={getSeverity(analysisResult.pneumonia)}
                  />
                  <DiseaseProbabilityBar
                    disease="Tuberculosis"
                    probability={analysisResult.tuberculosis}
                    severity={getSeverity(analysisResult.tuberculosis)}
                  />
                  <DiseaseProbabilityBar
                    disease="COVID-19"
                    probability={analysisResult.covid}
                    severity={getSeverity(analysisResult.covid)}
                  />
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    Recommendation
                  </h4>
                  <p className="text-sm text-primary-800 dark:text-primary-200">
                    Based on the analysis, this X-ray appears to be normal with low probability of
                    abnormalities. However, please consult with a healthcare professional for a final diagnosis.
                  </p>
                </div>
                <div className="mt-4 flex gap-4">
                  <button className="flex-1 btn-secondary">
                    Download Report
                  </button>
                  <button className="flex-1 btn-primary">
                    Save to History
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p>Upload an X-ray image and click "Analyze" to see results here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Upload;

