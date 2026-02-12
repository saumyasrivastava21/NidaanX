import { useState } from 'react';
import { Link } from 'react-router-dom';
import DiseaseProbabilityBar from '../components/DiseaseProbabilityBar';

const History = () => {
  const [selectedScan, setSelectedScan] = useState(null);

  // Dummy data
  const scanHistory = [
    {
      id: '1',
      date: '2024-01-15',
      time: '14:30',
      patientId: 'P-001234',
      patientName: 'John Doe',
      findings: { normal: 68, pneumonia: 25, tuberculosis: 5, covid: 2 },
      status: 'Completed',
    },
    {
      id: '2',
      date: '2024-01-14',
      time: '10:15',
      patientId: 'P-001233',
      patientName: 'Jane Smith',
      findings: { normal: 92, pneumonia: 5, tuberculosis: 2, covid: 1 },
      status: 'Completed',
    },
    {
      id: '3',
      date: '2024-01-13',
      time: '16:45',
      patientId: 'P-001232',
      patientName: 'Robert Johnson',
      findings: { normal: 33, pneumonia: 45, tuberculosis: 15, covid: 7 },
      status: 'Completed',
    },
    {
      id: '4',
      date: '2024-01-12',
      time: '09:20',
      patientId: 'P-001231',
      patientName: 'Sarah Williams',
      findings: { normal: 45, pneumonia: 30, tuberculosis: 20, covid: 5 },
      status: 'Completed',
    },
  ];

  const getSeverity = (probability) => {
    if (probability < 30) return 'low';
    if (probability < 70) return 'medium';
    return 'high';
  };

  const getPrimaryFinding = (findings) => {
    const sorted = Object.entries(findings).sort((a, b) => b[1] - a[1]);
    return sorted[0];
  };

  return (
    <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Patient History
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            View and manage all X-ray scan records and analysis results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* History List */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Scan Records
                </h2>
                <Link to="/upload" className="btn-primary">
                  New Scan
                </Link>
              </div>
              <div className="space-y-4">
                {scanHistory.map((scan) => {
                  const [primaryDisease, primaryProb] = getPrimaryFinding(scan.findings);
                  return (
                    <div
                      key={scan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedScan?.id === scan.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                      }`}
                      onClick={() => setSelectedScan(scan)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {scan.patientName}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              ({scan.patientId})
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {scan.date} at {scan.time}
                          </p>
                          <div className="mt-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Primary Finding:{' '}
                            </span>
                            <span className="text-sm text-gray-900 dark:text-white font-semibold">
                              {primaryDisease.charAt(0).toUpperCase() + primaryDisease.slice(1)} ({primaryProb}%)
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            scan.status === 'Completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}
                        >
                          {scan.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Scan Details
              </h2>
              {selectedScan ? (
                <div>
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      Patient Information
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Name:</span>
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                          {selectedScan.patientName}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">ID:</span>
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                          {selectedScan.patientId}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Date:</span>
                        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                          {selectedScan.date} {selectedScan.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                      Disease Probabilities
                    </h3>
                    <DiseaseProbabilityBar
                      disease="Normal"
                      probability={selectedScan.findings.normal}
                      severity={getSeverity(selectedScan.findings.normal)}
                    />
                    <DiseaseProbabilityBar
                      disease="Pneumonia"
                      probability={selectedScan.findings.pneumonia}
                      severity={getSeverity(selectedScan.findings.pneumonia)}
                    />
                    <DiseaseProbabilityBar
                      disease="Tuberculosis"
                      probability={selectedScan.findings.tuberculosis}
                      severity={getSeverity(selectedScan.findings.tuberculosis)}
                    />
                    <DiseaseProbabilityBar
                      disease="COVID-19"
                      probability={selectedScan.findings.covid}
                      severity={getSeverity(selectedScan.findings.covid)}
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <button className="w-full btn-primary">
                      View Full Report
                    </button>
                    <button className="w-full btn-secondary">
                      Download PDF
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-gray-400"
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
                  <p className="text-sm">Select a scan to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default History;

