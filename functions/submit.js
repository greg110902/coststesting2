export async function onRequest(){
    value = 100
    payer = 'greg'
    affecting = ['alex', 'leo', 'harry']
    const owedByAffected = value / (affecting.length + 1)
    const owedToPayer = value * (affecting.length) / (affecting.length + 1)
    for (const payee of affecting){
        env.DB.prepare(`UPDATE owedin SET val=val + ${owedByAffected} WHERE name = ${payee}`).run()
    }
    
    env.DB.prepare(`UPDATE out SET val = val + ${owedToPayer} WHERE name = ${payer}`).run()
}