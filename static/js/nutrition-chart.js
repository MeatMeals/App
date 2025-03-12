document.addEventListener('DOMContentLoaded', function() {
    const nutritionData = document.getElementById('nutritionData');
    if (nutritionData) {
        const protein = parseFloat(nutritionData.dataset.protein);
        const carbs = parseFloat(nutritionData.dataset.carbs);
        const fat = parseFloat(nutritionData.dataset.fat);

        const ctx = document.getElementById('macroChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Protein', 'Carbs', 'Fat'],
                datasets: [{
                    data: [protein, carbs, fat],
                    backgroundColor: ['#f08c35', '#d64933', '#ffc107']
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
    }
}); 