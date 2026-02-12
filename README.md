# NidaanX - AI-Powered X-Ray Diagnosis Platform

A modern healthcare AI web application for X-ray diagnosis using YOLO-based models for multiclass disease detection.

## Features

- 🤖 **AI-Powered Detection**: Advanced YOLO-based models for multiclass disease detection
- ⚡ **Fast Analysis**: Get instant diagnosis results with detailed probability analysis
- 📊 **Comprehensive Reports**: Detailed patient history and analytics
- 🌓 **Dark/Light Mode**: Beautiful UI with dark and light theme support
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🔒 **Role-Based Access**: Support for Patients, Doctors, and Admin roles

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ChartPlaceholder.jsx
│   ├── DiseaseProbabilityBar.jsx
│   ├── StatCard.jsx
│   └── UploadArea.jsx
├── contexts/          # React contexts
│   └── ThemeContext.jsx
├── layouts/           # Layout components
│   ├── DashboardLayout.jsx
│   ├── Footer.jsx
│   ├── MainLayout.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── pages/             # Page components
│   ├── About.jsx
│   ├── Admin.jsx
│   ├── Contact.jsx
│   ├── Dashboard.jsx
│   ├── History.jsx
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Upload.jsx
├── services/          # API services
│   └── api.js
├── App.jsx            # Main app component with routing
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NidaanX
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Pages

1. **Landing Page** (`/`) - Homepage with features and information
2. **Login** (`/login`) - User authentication
3. **Register** (`/register`) - New user registration
4. **Dashboard** (`/dashboard`) - Overview of scans and statistics
5. **Upload X-Ray** (`/upload`) - Upload and analyze X-ray images
6. **Patient History** (`/history`) - View past scan records
7. **Admin Panel** (`/admin`) - System administration (Admin/Doctor only)
8. **About** (`/about`) - Information about the platform
9. **Contact** (`/contact`) - Contact information and form

## API Integration

The application is configured to work with a backend API. Update the API base URL in `src/services/api.js`:

```javascript
baseURL: import.meta.env.VITE_API_BASE_URL || '/api'
```

Set the `VITE_API_BASE_URL` environment variable or use the default `/api` path.

### Expected API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/analyze` - X-ray image analysis
- `GET /api/scans` - Get user's scan history
- `GET /api/users` - Get users (admin only)

## Authentication

The app uses localStorage to store authentication tokens. In production, implement proper authentication with secure token storage and refresh mechanisms.

## Dark Mode

Dark mode is supported throughout the application. The theme preference is saved in localStorage and persists across sessions. Users can toggle between light and dark modes using the theme toggle button in the navbar.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },  // Primary brand colors
  medical: { ... },  // Medical/healthcare theme colors
}
```

### Components

All components are modular and can be easily customized. Check the `src/components` directory for reusable UI components.

## Development Notes

- The application currently uses mock data for demonstration purposes
- Authentication is simulated using localStorage
- API calls are commented with placeholders for actual implementation
- Charts are placeholders and should be replaced with actual chart libraries (e.g., Chart.js, Recharts)

## License

This project is private and proprietary.

## Support

For support, email support@nidaanx.com or visit the contact page.
