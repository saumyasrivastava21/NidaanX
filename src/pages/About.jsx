const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-medical-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About NidaanX
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Revolutionizing medical diagnosis through advanced AI technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                NidaanX is dedicated to improving healthcare outcomes by providing
                accurate, fast, and accessible AI-powered X-ray diagnosis. Our platform
                leverages cutting-edge YOLO-based deep learning models to assist healthcare
                professionals in detecting and diagnosing various diseases.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We believe that technology should augment human expertise, not replace it.
                Our goal is to provide healthcare professionals with powerful tools that
                enhance their diagnostic capabilities and improve patient care.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-medical-100 dark:from-primary-900 dark:to-medical-900 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    94.2%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Accuracy Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-medical-600 dark:text-medical-400 mb-2">
                    8K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Scans Processed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    1.2s
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Avg. Processing
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-medical-600 dark:text-medical-400 mb-2">
                    1.2K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Active Users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Powered by state-of-the-art AI models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                YOLO Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilizing You Only Look Once (YOLO) models for real-time object detection
                and disease classification in medical imaging.
              </p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-medical-100 dark:bg-medical-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Multiclass Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Capable of detecting multiple diseases simultaneously, including pneumonia,
                tuberculosis, COVID-19, and normal cases.
              </p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Probability Scoring
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Provides detailed probability scores for each detected condition, enabling
                healthcare professionals to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experts in AI, healthcare, and software development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Lead AI Researcher', bio: 'Ph.D. in Medical AI, 10+ years in healthcare technology' },
              { name: 'Dr. Michael Johnson', role: 'Chief Medical Officer', bio: 'Board-certified radiologist with expertise in diagnostic imaging' },
              { name: 'Emily Rodriguez', role: 'Head of Engineering', bio: 'Senior software engineer specializing in healthcare systems' },
            ].map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-medical-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

