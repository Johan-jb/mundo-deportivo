document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convertir cm a metros

    const bmi = (weight / (height * height)).toFixed(1);

    let category = '';

    if (bmi < 18.5) {
        category = 'Bajo peso';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Peso normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidad';
    }

    document.getElementById('bmiResult').textContent = `Tu IMC es ${bmi} (${category})`;
});
