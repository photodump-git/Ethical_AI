// Mock Data for the Application
const mockData = {
    regions: {
        north: {
            name: "Northern District",
            population: 125000,
            vulnerabilityScore: 78,
            resourceCoverage: 42,
            factorScores: {
                disasterProximity: 85,
                infrastructureQuality: 30,
                medicalAccess: 45,
                economicResources: 35,
                communityCohesion: 75
            },
            activeIncidents: 3,
            affectedPopulation: 42500,
            coordinates: { x: 200, y: 150 }
        },
        east: {
            name: "Eastern District",
            population: 98000,
            vulnerabilityScore: 86,
            resourceCoverage: 35,
            factorScores: {
                disasterProximity: 95,
                infrastructureQuality: 25,
                medicalAccess: 40,
                economicResources: 30,
                communityCohesion: 80
            },
            activeIncidents: 5,
            affectedPopulation: 67500,
            coordinates: { x: 350, y: 150 }
        },
        south: {
            name: "Southern District",
            population: 150000,
            vulnerabilityScore: 62,
            resourceCoverage: 58,
            factorScores: {
                disasterProximity: 55,
                infrastructureQuality: 45,
                medicalAccess: 60,
                economicResources: 50,
                communityCohesion: 65
            },
            activeIncidents: 2,
            affectedPopulation: 35000,
            coordinates: { x: 250, y: 350 }
        },
        west: {
            name: "Western District",
            population: 110000,
            vulnerabilityScore: 45,
            resourceCoverage: 72,
            factorScores: {
                disasterProximity: 40,
                infrastructureQuality: 65,
                medicalAccess: 70,
                economicResources: 55,
                communityCohesion: 60
            },
            activeIncidents: 1,
            affectedPopulation: 12500,
            coordinates: { x: 150, y: 250 }
        },
        central: {
            name: "Central District",
            population: 185000,
            vulnerabilityScore: 52,
            resourceCoverage: 68,
            factorScores: {
                disasterProximity: 50,
                infrastructureQuality: 60,
                medicalAccess: 65,
                economicResources: 70,
                communityCohesion: 85
            },
            activeIncidents: 2,
            affectedPopulation: 32000,
            coordinates: { x: 250, y: 250 }
        }
    },
    resources: {
        food: {
            name: "Food Supplies",
            total: 5000,
            allocated: 3250,
            icon: "🥫"
        },
        water: {
            name: "Clean Water",
            total: 20000,
            allocated: 8400,
            icon: "💧"
        },
        medical: {
            name: "Medical Supplies",
            total: 2500,
            allocated: 700,
            icon: "🏥"
        },
        shelter: {
            name: "Temporary Shelter",
            total: 500,
            allocated: 415,
            icon: "🏕️"
        }
    },
    vulnerabilityFactors: {
        proximity: {
            name: "Disaster Proximity",
            description: "Measures how close communities are to disaster epicenters or high-risk zones. Communities within 10km of a disaster epicenter receive highest vulnerability scores.",
            weight: 0.35,
            explanation: "Proximity to disaster events directly correlates with immediate physical danger. Communities closer to disaster epicenters face immediate threats including physical infrastructure damage, potential casualties, and disruption of essential services. This factor heavily influences initial emergency response priorities."
        },
        infrastructure: {
            name: "Infrastructure Quality",
            description: "Evaluates the resilience of local infrastructure including buildings, roads, and utilities. Areas with poor infrastructure are more vulnerable to damage and recovery challenges.",
            weight: 0.25,
            explanation: "Infrastructure quality determines a community's baseline resilience to disasters. Poor infrastructure amplifies disaster impacts through collapsed buildings, impassable roads, and damaged utility systems. Communities with substandard infrastructure require more intensive and prolonged support for both immediate response and long-term recovery."
        },
        medical: {
            name: "Medical Access",
            description: "Assesses availability and accessibility of healthcare facilities and services. Regions with limited medical resources score higher in vulnerability.",
            weight: 0.20,
            explanation: "Access to healthcare directly affects mortality and morbidity rates during disasters. Communities with limited healthcare infrastructure struggle to treat injuries, manage disease outbreaks, and provide ongoing care for chronic conditions. Medical resource allocation must prioritize areas where existing healthcare systems are insufficient or have been compromised by disaster events."
        },
        economic: {
            name: "Economic Resources",
            description: "Measures financial resilience of communities, including poverty rates, savings, and economic diversity. Economically disadvantaged areas have higher vulnerability scores.",
            weight: 0.15,
            explanation: "Economic resources determine a community's ability to independently recover from disaster impacts. Communities with limited economic resources often lack savings, insurance, or alternative income sources to manage crisis periods. These communities require more comprehensive external assistance for basic needs and face longer-term recovery challenges beyond the immediate disaster response."
        },
        community: {
            name: "Community Cohesion",
            description: "Evaluates social networks, community organization, and collective response capacity. Strong community bonds can reduce vulnerability despite other risk factors.",
            weight: 0.05,
            explanation: "Community cohesion influences how effectively populations can organize, support vulnerable members, and collaborate during disasters. Strong social networks enable communities to share resources, disseminate information, and provide mutual aid during crisis periods. While this factor has a lower mathematical weight, it can significantly enhance the effectiveness of aid delivery and implementation of response plans."
        }
    }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navItems = document.querySelectorAll('nav li');
    const pages = document.querySelectorAll('.page');
    
    // Initialize page navigation
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update active nav item
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            // Show target page
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Initialize charts
    initCharts();
    
    // Initialize map
    initMap();
    
    // Initialize resource allocation sliders
    initResourceSliders();
    
    // Initialize vulnerability factor explanations
    initVulnerabilityExplanations();
    
    // Initialize feedback form
    initFeedbackForm();
});

// Chart initialization
function initCharts() {
    // Vulnerability by region chart
    const vulnerabilityCtx = document.getElementById('vulnerability-chart').getContext('2d');
    const vulnerabilityChart = new Chart(vulnerabilityCtx, {
        type: 'bar',
        data: {
            labels: Object.values(mockData.regions).map(region => region.name),
            datasets: [{
                label: 'Vulnerability Score',
                data: Object.values(mockData.regions).map(region => region.vulnerabilityScore),
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(243, 156, 18, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(243, 156, 18, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Resource allocation chart
    const resourceCtx = document.getElementById('resource-chart').getContext('2d');
    const resourceChart = new Chart(resourceCtx, {
        type: 'doughnut',
        data: {
            labels: ['Food', 'Water', 'Medical', 'Shelter'],
            datasets: [{
                label: 'Allocation Efficiency',
                data: [75, 42, 28, 83],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(155, 89, 182, 0.7)'
                ],
                borderColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(155, 89, 182, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Vulnerability factors chart
    const factorsCtx = document.getElementById('vulnerability-factors-chart').getContext('2d');
    const factorsChart = new Chart(factorsCtx, {
        type: 'pie',
        data: {
            labels: Object.values(mockData.vulnerabilityFactors).map(factor => factor.name),
            datasets: [{
                data: Object.values(mockData.vulnerabilityFactors).map(factor => factor.weight * 100),
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(243, 156, 18, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(46, 204, 113, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(243, 156, 18, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(46, 204, 113, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Regional vulnerability comparison chart
    const regionVulnerabilityCtx = document.getElementById('region-vulnerability-chart').getContext('2d');
    const regionVulnerabilityChart = new Chart(regionVulnerabilityCtx, {
        type: 'radar',
        data: {
            labels: ['Disaster Proximity', 'Infrastructure', 'Medical Access', 'Economic Resources', 'Community Cohesion'],
            datasets: [
                {
                    label: 'Northern District',
                    data: [
                        mockData.regions.north.factorScores.disasterProximity,
                        mockData.regions.north.factorScores.infrastructureQuality,
                        mockData.regions.north.factorScores.medicalAccess,
                        mockData.regions.north.factorScores.economicResources,
                        mockData.regions.north.factorScores.communityCohesion
                    ],
                    fill: true,
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    pointBackgroundColor: 'rgba(231, 76, 60, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(231, 76, 60, 1)'
                },
                {
                    label: 'Eastern District',
                    data: [
                        mockData.regions.east.factorScores.disasterProximity,
                        mockData.regions.east.factorScores.infrastructureQuality,
                        mockData.regions.east.factorScores.medicalAccess,
                        mockData.regions.east.factorScores.economicResources,
                        mockData.regions.east.factorScores.communityCohesion
                    ],
                    fill: true,
                    backgroundColor: 'rgba(243, 156, 18, 0.2)',
                    borderColor: 'rgba(243, 156, 18, 1)',
                    pointBackgroundColor: 'rgba(243, 156, 18, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(243, 156, 18, 1)'
                }
            ]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 2
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Map initialization
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Create dots for each region on the map
    Object.entries(mockData.regions).forEach(([key, region]) => {
        const dot = document.createElement('div');
        dot.classList.add('map-dot');
        dot.style.position = 'absolute';
        dot.style.left = `${region.coordinates.x}px`;
        dot.style.top = `${region.coordinates.y}px`;
        dot.style.width = '30px';
        dot.style.height = '30px';
        dot.style.borderRadius = '50%';
        
        // Color based on vulnerability score
        if (region.vulnerabilityScore >= 75) {
            dot.style.backgroundColor = 'rgba(231, 76, 60, 0.8)';
        } else if (region.vulnerabilityScore >= 50) {
            dot.style.backgroundColor = 'rgba(243, 156, 18, 0.8)';
        } else {
            dot.style.backgroundColor = 'rgba(46, 204, 113, 0.8)';
        }
        
        dot.style.border = '2px solid white';
        dot.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        dot.style.cursor = 'pointer';
        
        // Add region name as label
        const label = document.createElement('div');
        label.textContent = region.name;
        label.style.position = 'absolute';
        label.style.bottom = '35px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.whiteSpace = 'nowrap';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.padding = '3px 6px';
        label.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        label.style.borderRadius = '3px';
        
        dot.appendChild(label);
        
        // Add click event to show region info
        dot.addEventListener('click', () => {
            showRegionDetails(key);
        });
        
        mapElement.appendChild(dot);
    });
    
    // Map filter change event
    const mapFilter = document.getElementById('map-filter');
    if (mapFilter) {
        mapFilter.addEventListener('change', () => {
            const filterValue = mapFilter.value;
            const dots = document.querySelectorAll('.map-dot');
            
            dots.forEach((dot, index) => {
                const regionKey = Object.keys(mockData.regions)[index];
                const region = mockData.regions[regionKey];
                
                if (filterValue === 'vulnerability') {
                    if (region.vulnerabilityScore >= 75) {
                        dot.style.backgroundColor = 'rgba(231, 76, 60, 0.8)';
                    } else if (region.vulnerabilityScore >= 50) {
                        dot.style.backgroundColor = 'rgba(243, 156, 18, 0.8)';
                    } else {
                        dot.style.backgroundColor = 'rgba(46, 204, 113, 0.8)';
                    }
                } else if (filterValue === 'resources') {
                    if (region.resourceCoverage < 40) {
                        dot.style.backgroundColor = 'rgba(231, 76, 60, 0.8)';
                    } else if (region.resourceCoverage < 65) {
                        dot.style.backgroundColor = 'rgba(243, 156, 18, 0.8)';
                    } else {
                        dot.style.backgroundColor = 'rgba(46, 204, 113, 0.8)';
                    }
                } else if (filterValue === 'incidents') {
                    if (region.activeIncidents >= 4) {
                        dot.style.backgroundColor = 'rgba(231, 76, 60, 0.8)';
                    } else if (region.activeIncidents >= 2) {
                        dot.style.backgroundColor = 'rgba(243, 156, 18, 0.8)';
                    } else {
                        dot.style.backgroundColor = 'rgba(46, 204, 113, 0.8)';
                    }
                }
            });
        });
    }
}

// Show region details
function showRegionDetails(regionKey) {
    const region = mockData.regions[regionKey];
    const regionInfo = document.getElementById('region-info');
    
    if (regionInfo) {
        regionInfo.innerHTML = `
            <h4>${region.name}</h4>
            <div class="region-stat">
                <span>Population:</span>
                <strong>${region.population.toLocaleString()}</strong>
            </div>
            <div class="region-stat">
                <span>Vulnerability Score:</span>
                <strong>${region.vulnerabilityScore}/100</strong>
            </div>
            <div class="region-stat">
                <span>Resource Coverage:</span>
                <strong>${region.resourceCoverage}%</strong>
            </div>
            <div class="region-stat">
                <span>Active Incidents:</span>
                <strong>${region.activeIncidents}</strong>
            </div>
            <div class="region-stat">
                <span>Affected Population:</span>
                <strong>${region.affectedPopulation.toLocaleString()} (${Math.round(region.affectedPopulation / region.population * 100)}%)</strong>
            </div>
            
            <button class="primary" style="margin-top: 15px;" onclick="document.querySelector('[data-target=resources]').click()">Allocate Resources</button>
        `;
        
        // Style for region stats
        const regionStats = regionInfo.querySelectorAll('.region-stat');
        regionStats.forEach(stat => {
            stat.style.display = 'flex';
            stat.style.justifyContent = 'space-between';
            stat.style.margin = '8px 0';
            stat.style.fontSize = '0.9rem';
        });
    }
}

// Initialize resource allocation sliders
function initResourceSliders() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const valueDisplay = slider.nextElementSibling;
        
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value + '%';
            updateAllocationSummary();
        });
    });
    
    // Region selector change
    const regionSelect = document.getElementById('region-select');
    if (regionSelect) {
        regionSelect.addEventListener('change', updateAllocationSummary);
    }
    
    // Reset button
    const resetButton = document.querySelector('.allocation-actions .secondary');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            sliders.forEach(slider => {
                slider.value = 25;
                slider.nextElementSibling.textContent = '25%';
            });
            updateAllocationSummary();
        });
    }
    
    // Apply distribution plan button
    const applyButton = document.querySelector('.allocation-actions .primary');
    if (applyButton) {
        applyButton.addEventListener('click', () => {
            const notification = document.createElement('div');
            notification.textContent = 'Distribution plan applied successfully';
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = 'var(--success-color)';
            notification.style.color = 'white';
            notification.style.padding = '10px 20px';
            notification.style.borderRadius = 'var(--border-radius)';
            notification.style.boxShadow = 'var(--shadow)';
            notification.style.zIndex = '1000';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 3000);
        });
    }
}

// Update allocation summary based on slider values
function updateAllocationSummary() {
    const foodValue = parseInt(document.getElementById('food-slider').value);
    const waterValue = parseInt(document.getElementById('water-slider').value);
    const medicalValue = parseInt(document.getElementById('medical-slider').value);
    const shelterValue = parseInt(document.getElementById('shelter-slider').value);
    
    const regionKey = document.getElementById('region-select').value;
    const region = mockData.regions[regionKey];
    
    // Calculate weighted average based on region needs
    const weightedScore = (
        (foodValue * 0.3) +
        (waterValue * 0.3) +
        (medicalValue * 0.25) +
        (shelterValue * 0.15)
    );
    
    // Adjust for region resource coverage (inverse relationship)
    const coverageAdjustment = 1 - (region.resourceCoverage / 100);
    const adjustedScore = Math.round(weightedScore * coverageAdjustment);
    
    // Update summary text
    const summaryElement = document.querySelector('.allocation-summary p strong');
    if (summaryElement) {
        summaryElement.textContent = `${adjustedScore}%`;
    }
    
    // Show warning if medical supplies are too low for high vulnerability areas
    const warningElement = document.querySelector('.allocation-summary .warning');
    if (warningElement) {
        if (region.vulnerabilityScore > 70 && medicalValue < 50) {
            warningElement.style.display = 'block';
        } else {
            warningElement.style.display = 'none';
        }
    }
}

// Initialize vulnerability factor explanations
function initVulnerabilityExplanations() {
    const explainButtons = document.querySelectorAll('.explain-btn');
    const modal = document.getElementById('explanation-modal');
    const closeModal = document.querySelector('.close-modal');
    const explanationContent = document.getElementById('factor-explanation');
    
    explainButtons.forEach(button => {
        button.addEventListener('click', () => {
            const factorKey = button.getAttribute('data-factor');
            const factor = mockData.vulnerabilityFactors[factorKey];
            
            explanationContent.innerHTML = `
                <h4>${factor.name}</h4>
                <p class="factor-weight">Weight in vulnerability score: <strong>${factor.weight * 100}%</strong></p>
                <p>${factor.explanation}</p>
            `;
            
            modal.style.display = 'flex';
        });
    });
    
    // Close modal events
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close when clicking outside the modal content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Initialize feedback form
function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const feedbackType = document.getElementById('feedback-type').value;
            const feedbackRegion = document.getElementById('feedback-region').value;
            const feedbackDescription = document.getElementById('feedback-description').value;
            
            if (feedbackType && feedbackRegion && feedbackDescription) {
                // Simulate submission success message
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.innerHTML = `
                    <div style="background-color: rgba(46, 204, 113, 0.1); padding: 15px; border-radius: var(--border-radius); margin-top: 15px; border-left: 4px solid var(--success-color);">
                        <h4 style="color: var(--success-color); margin-bottom: 5px;">Report Submitted Successfully</h4>
                        <p>Thank you for your feedback. Your report has been recorded and will be reviewed by our team.</p>
                        <p>Reference ID: FR-${Math.floor(Math.random() * 10000)}</p>
                    </div>
                `;
                
                feedbackForm.appendChild(successMessage);
                
                // Reset form
                feedbackForm.reset();
                
                // Remove success message after a delay
                setTimeout(() => {
                    feedbackForm.removeChild(successMessage);
                }, 5000);
                
                // Update feedback status list (in a real app, this would come from the server)
                const feedbackList = document.querySelector('.feedback-list');
                if (feedbackList) {
                    const newFeedback = document.createElement('div');
                    newFeedback.classList.add('feedback-item');
                    newFeedback.innerHTML = `
                        <div class="feedback-header">
                            <h4>${document.getElementById('feedback-type').options[document.getElementById('feedback-type').selectedIndex].text}</h4>
                            <span class="feedback-status-badge pending">Pending Review</span>
                        </div>
                        <p class="feedback-meta">${document.getElementById('feedback-region').options[document.getElementById('feedback-region').selectedIndex].text} • Submitted just now</p>
                        <p class="feedback-response">Your report has been received and is awaiting initial review.</p>
                    `;
                    
                    feedbackList.insertBefore(newFeedback, feedbackList.firstChild);
                }
            }
        });
    }
} 