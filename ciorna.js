fetch('http://localhost:5000/insertuser', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    utilizator: 'John',
    parola: 'secret',
    mail: 'john@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))