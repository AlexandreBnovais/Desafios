const Mamount = document.getElementById('amount');
const Mterm = document.getElementById('term');
const Mrate = document.getElementById('rate');

document.getElementById('form').addEventListener('submit' , (event) => {
    // Interrompe o Envio do Formulario
    event.preventDefault();

    // Passa os valores para Float
    let amount = parseFloat(Mamount.value)
    let rate = parseFloat(Mrate.value) / 12 / 100;
    let term = parseFloat(Mterm.value) * 12;

    // Equação do valor final da hipoteca
    let repayment = (amount * rate * Math.pow((1 + rate), term)) / (Math.pow((1 + rate), term) -1)

    let total_repayment = repayment * amount;

    // Armazena o resultado a ser verificado
    let description = repayment
    let total_description = total_repayment

    // Valida os campos requiridos
    let isValid = false;

    // seleciona a cor das bordas
    let box_amount = document.querySelector('#amount-value');
    let box_term = document.querySelector('#term-value');
    let box_rate = document.querySelector('#rate-value');

    // Verifica se os campos estão preenchidos 
    if (Mamount.value == 0 || Mamount.value === null) {
        isValid = true;
        box_amount.classList.add('error');
    }
    else if (Mterm.value == 0 || Mamount.value === null) {
        isValid = true;
        box_term.classList.add('error');
    }
    else if (Mrate.value == 0 || Mrate.value === null) {
        isValid = true;
        box_rate.classList.add('error');
    }
    else {
        box_amount.classList.remove('error');
        box_term.classList.remove('error');
        box_rate.classList.remove('error');

        // Troca o painel
        document.querySelector('.result').classList.remove('active');
        document.querySelector('.conteiner-painel').classList.add('active');

        // Mostra o valor no painel
        document.querySelector('#value').innerHTML = description.toFixed(5);
        document.querySelector('#total').innerHTML = total_description.toFixed(5);
    }
})

document.getElementById('clear').addEventListener('click' , () => {
    Mamount.value = '';
    Mrate.value = '';
    Mterm.value = '';

    document.querySelector('.result').classList.add('active');
    document.querySelector('.conteiner-painel').classList.remove('active');

})

