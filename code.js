import onRequest from '/functions/submit'

async function doIt() {
    payer = 'greg'
    affecting = ['alex', 'leo', 'harry']
    value = 100

    onRequest(payer, value, affecting)
}

document.getElementById('button').addEventListener('click', doIt)