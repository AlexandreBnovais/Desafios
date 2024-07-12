document.getElementById('myform').addEventListener('submit' , function(event) {
    const emeil = document.getElementById('email')
    let isValid = false

    if (emeil.value === '') {
        event.preventDefault()
        document.getElementById('erromensage').innerHTML = 'Valid email required'
        emeil.style.backgroundColor = '#FFE7EA'
        emeil.style.borderColor = '#d8746d'
    }
})