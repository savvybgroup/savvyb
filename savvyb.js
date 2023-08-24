document.querySelectorAll('input').forEach(($input) => { })
const field = $input.dataset.js
$input.addEventListener('input', (e) => {

    e.target.value = formato[field](e.target.value)

}, false)
const formato = {

    phone(value) {

        return value

            .replace(/\D/g, '')

            .replace(/(\d{2})(\d)/, '($1)$2')

            .replace(/(\d{4})(\d)/, '$1-$2')

            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')

            .replace(/(-\d{4})\d+?$/, '$1')

    }

}

const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const phone = document.querySelector('input[name=phone]').value;
    const request = document.querySelector('input[name=Requests?]').value;

    fetch('https://api.sheetmonkey.io/form/nAtLHoXu1kVbbpPbE7VvcQ', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, request }),
    });

}
document.querySelector('#insert_form').addEventListener('submit', handleSubmit)