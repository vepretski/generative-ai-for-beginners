// Chart.js Configuration
function initCharts() {
    // 1. Resilience Doughnut Chart (Small visual for the card)
    try {
        const resilienceCanvas = document.getElementById('resilienceChart');
        if (resilienceCanvas && typeof Chart !== 'undefined') {
            const ctxResilience = resilienceCanvas.getContext('2d');
            new Chart(ctxResilience, {
                type: 'doughnut',
                data: {
                    // Labels: Mental resilience vs. technical skills
                    labels: ['חוסן מנטלי', 'כישורים טכניים'],
                    datasets: [{
                        data: [65, 35],
                        backgroundColor: ['#ea580c', '#eff6ff'], // Orange vs Light Blue
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    },
                    cutout: '75%'
                }
            });
        }
    } catch (error) {
        console.error('Failed to render resilience chart', error);
    }

    // 2. Funnel Bar Chart (Main visual)
    try {
        const funnelCanvas = document.getElementById('funnelChart');
        if (funnelCanvas && typeof Chart !== 'undefined') {
            const ctxFunnel = funnelCanvas.getContext('2d');
            
            new Chart(ctxFunnel, {
                type: 'bar',
                    data: {
                        // Funnel stages: Awareness -> Leads -> Training -> Graduates to StartOn
                        labels: ['חשיפה (7YA.IO Reach)', 'פניות (Leads)', 'הכשרה (The Shield)', 'בוגרים לסטארט-און'],
                    datasets: [{
                        label: 'מספר משתתפים (משוער)',
                        data: [50000, 2500, 400, 80], // Funnel logic numbers
                        backgroundColor: [
                            '#ea580c', // Orange-600 (High volume)
                            '#f97316', // Orange-500
                            '#3b82f6', // Blue-500 (Training)
                            '#22c55e'  // Green-500 (Success)
                        ],
                        borderRadius: 12,
                        barPercentage: 0.6
                    }]
                },
                options: {
                    indexAxis: 'y', // Horizontal funnel view
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { display: false }
                        },
                        y: {
                            grid: { display: false },
                            ticks: { 
                                font: { family: 'Heebo', weight: 'bold', size: 14 },
                                color: '#44403c'
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1c1917',
                            padding: 12,
                            titleFont: { family: 'Heebo', size: 14 },
                            bodyFont: { family: 'Heebo', size: 14 },
                            callbacks: {
                                title: function(tooltipItems) {
                                    let label = tooltipItems[0].label;
                                    return Array.isArray(label) ? label.join(' ') : label;
                                }
                            }
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error('Failed to render funnel chart', error);
    }
}

document.addEventListener('DOMContentLoaded', initCharts);
