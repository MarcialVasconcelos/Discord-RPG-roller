const roller = require('./roller')

function Reply(message){
    console.log("Reply function called")

    if (message.content === 'd%')
        message.reply( { content: roller.dx(100) } )
    else if (message.content === 'dbody')
        message.reply( { content: 'Parte do Corpo: `' + ` ${roller.rollBody()} ` + '`' } )
    else if (message.content === 'd666') {
        result = roller.d666()
        message.reply({ content: `Roll D666: ` + "" + " --> " + "`["+result[0]+"]["+result[1]+"]" + "`" })
    }
    else {
            let firstWord = message.content.split(" ")[0]
        let quant = firstWord.split("d")[0]
        if (quant === "") quant = 1
        quant = parseInt(quant)

        let dice = firstWord.split("d")[1]//.split("+")[0]
        if (dice === "") dice = 1
        dice = parseInt(dice)
        
        let bonus = firstWord.split("+")[1]
        if (bonus === undefined || bonus === "") bonus = 0
        bonus = parseInt(bonus)
        
        let penality = firstWord.split("-")[1]
        if (penality === undefined || penality === "") penality = 0
        penality = parseInt(penality)
        if (penality) bonus = -penality

        let valid = Number.isInteger(quant) && Number.isInteger(dice) && Number.isInteger(bonus)
        if (valid){
            // console.log("Dado:", dice)
            // console.log("Quantidade:", quant)
            // console.log("Bonus:", bonus)

            let result = roller.dx(dice, quant, bonus)
            message.reply( { content: `${result}` } )
        }
    }
}

module.exports = Reply