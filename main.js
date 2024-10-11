document.getElementById('water-bill-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const waterUsage = document.getElementById('water-usage').value;
    const billAmount = calculateBill(waterUsage);

    document.getElementById('result').textContent = `Your water bill is $${billAmount.toFixed(2)}`;
});

function calculateBill(waterUsage) {
    const ratePerCubicMeter = 1.5; // Example rate per cubic meter
    return waterUsage * ratePerCubicMeter;
}
