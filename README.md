# EquiAid - Ethical Disaster Relief Platform

EquiAid is a frontend application designed to facilitate the ethical distribution of disaster relief resources. The platform uses vulnerability assessments and community feedback to ensure aid is distributed equitably, with special focus on the most vulnerable communities.

## Features

- **Dashboard**: Real-time overview of active crises, affected populations, resource deployment status, and recent alerts
- **Crisis Map**: Interactive map visualization of affected regions with color-coded vulnerability indicators
- **Resource Allocation**: Inventory management and distribution planning tools to allocate resources based on need
- **Vulnerability Assessment**: Detailed breakdown of vulnerability factors affecting different regions
- **Community Feedback**: System for field reports and feedback tracking to improve response

## Technology Stack

This application is built with:

- **HTML5**: Semantic structure and responsive layout
- **CSS3**: Mobile-first responsive design with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality and data manipulation
- **Chart.js**: Data visualization for vulnerability scores and resource allocation

## Getting Started

1. Clone this repository to your local machine
2. Open `index.html` in your web browser
3. No build process or server setup required - the application runs entirely in the browser

## Technical Implementation

- **Data Structure**: Mock data is stored in JavaScript objects simulating a backend
- **Responsive Design**: Adapts seamlessly from mobile to desktop displays
- **Accessibility**: Semantic HTML and appropriate color contrast for readability
- **Modularity**: JavaScript organized by functional components for maintainability

## User Guide

### Dashboard
The dashboard provides an overview of current disaster relief statistics. Key metrics are displayed in cards at the top, followed by charts visualizing vulnerability data and recent alerts requiring attention.

### Crisis Map
The map displays color-coded regions based on vulnerability scores. Users can:
- Filter the map by different criteria (vulnerability, resource coverage, or incident density)
- Click on regions to view detailed statistics
- Navigate directly to resource allocation for a selected region

### Resource Allocation
The resource allocation screen enables relief coordinators to:
- View current inventory levels of critical supplies
- Select regions for resource distribution
- Adjust allocation percentages using sliders
- See predictions of how allocations will impact critical needs

### Vulnerability Assessment
This section breaks down the factors that contribute to a region's vulnerability score:
- View the weighted importance of each vulnerability factor
- Compare vulnerability factors across different regions
- Access detailed explanations of how each factor affects aid decisions

### Community Feedback
The feedback system allows:
- Submission of new field reports from relief workers
- Categorization by feedback type and urgency
- Tracking of feedback status (pending, in progress, resolved)

## Ethical Framework

EquiAid implements ethical decision-making in disaster relief through:

1. **Transparency**: Clear explanations of how vulnerability scores are calculated
2. **Equity**: Prioritizing the most vulnerable communities rather than equal distribution
3. **Accountability**: Tracking and responding to community feedback
4. **Data-Driven Decisions**: Using multiple factors to determine resource allocation

## License

This project is available as open source under the terms of the MIT License. 