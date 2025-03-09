document.getElementById('calculateBtn').addEventListener('click', async () => {
    const sub1 = parseFloat(document.getElementById('sub1').value);
    const sub2 = parseFloat(document.getElementById('sub2').value);
    const sub3 = parseFloat(document.getElementById('sub3').value);

    const response = await fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sub1, sub2, sub3 }),
    });

    const data = await response.json();
    document.getElementById('result').innerText = `Total: ${data.total}, Average: ${data.average}`;
});