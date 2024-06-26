React Chart App Documentation
Overview
This React application utilizes Recharts to visualize data in various timeframes (daily, weekly, monthly) with interactive chart components.

Project Structure

my-chart-app/
├── src/
│ ├── components/
│ │ ├── Chart.js
│ │ └── TimeframeSelector.js
│ ├── data/
│ │ └── chartData.json
│ ├── styles/
│ │ └── App.css
│ └── App.js
├── public/
│ └── index.html
├── package.json
└── README.md

Components:

Chart Component (Chart.js)

TimeframeSelector Component (TimeframeSelector.js)

Data(chartData.json)

Styles:

CSS Styles (App.css)

Usage:
Installation: npm install

Run:npm start

Access:
Open http://localhost:3000 to view the app in the browser.

Features:
Charting: Displays data using Recharts with interactive features like tooltips and legends.
Timeframe Selection: Allows switching between daily, weekly, and monthly data views.
Responsive Design: Ensures the app looks good on different devices.

Deployment:
The app is deployed on Vercel for live usage and testing. Changes made to the repository are automatically deployed.
