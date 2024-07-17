import submit from '/functions/submit'

async function doIt() {
    payer = 'greg'
    affecting = ['alex', 'leo', 'harry']
    value = 100

    submit(env, payer, value, affecting)
}