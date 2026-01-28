// app.js
function calculateSum() {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;

    // C के फंक्शन 'add_in_c' को कॉल करना
    const result = Module._add_in_c(n1, n2);
    
    document.getElementById('output').innerText = "C का जवाब (Sum): " + result;
}

function calculateSquare() {
    const n1 = document.getElementById('num1').value;

    // C के फंक्शन 'square_in_c' को कॉल करना
    const result = Module._square_in_c(n1);
    
    document.getElementById('output').innerText = "C का जवाब (Square): " + result;
}
