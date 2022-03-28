const roll = (dice=6, quant=1, bonus=0) => Math.ceil(quant*dice*Math.random()+bonus)
const d4   = (quant=1, bonus=0) => roll(dice=4,  quant=quant, bonus=bonus)
const d6   = (quant=1, bonus=0) => roll(dice=6,  quant=quant, bonus=bonus)
const d8   = (quant=1, bonus=0) => roll(dice=8,  quant=quant, bonus=bonus)
const d10  = (quant=1, bonus=0) => roll(dice=10, quant=quant, bonus=bonus)
const d12  = (quant=1, bonus=0) => roll(dice=12, quant=quant, bonus=bonus)
const d20  = (quant=1, bonus=0) => roll(dice=20, quant=quant, bonus=bonus)
const d100 = (quant=1, bonus=0) => roll(dice=100,quant=quant, bonus=bonus)

function d666(){
    target = roll(dice=6, quant=2, bonus=0)
    check  = roll(dice=6, quant=1, bonus=0)
    result = [target,check]
    return result
}

const bodyParts = []
        .concat(Array(2).fill('Cabeça'))
        .concat(Array(1).fill('Olho'))
        .concat(Array(5).fill('Tronco'))
        .concat(Array(3).fill('Braço Direito'))
        .concat(Array(3).fill('Braço Esquerdo'))
        .concat(Array(2).fill('Mão Direita'))
        .concat(Array(2).fill('Mão Esquerda'))
        .concat(Array(3).fill('Perna Direita'))
        .concat(Array(3).fill('Perna Esquerda'))
        .concat(Array(3).fill('Pé Direito'))
        .concat(Array(3).fill('Pé Esquerdo'))
        .concat(Array(1).fill('Virilha'))
        .concat(Array(1).fill('Ânus'))
        // .concat(Array(1).fill(''))

function rollBody () {
    id = roll(bodyParts.lenght) - 1
    return bodyParts[id]
}

function dx (dice=6, quant=1, bonus=0) {
    let results = []
    for (i=0 ; i<quant ; i++){
        results.push(Math.ceil(dice*Math.random()))
    }
    
    let total = results.reduce((a, b) => a + b, bonus)
    let _quant   = quant===1 ? "" : `${quant}`
    let _bonus   = bonus===0 ? "" : `${bonus}`
    if (Math.sign(bonus)===1) _bonus = "+" + _bonus
    let _results = quant===1 ? "" : "`" + `[${results}]${_bonus}` + "`"

    let response = `Roll ${_quant}d${dice}${_bonus}: ` + _results + " => " + "` " + total + " `" 
    return response
}

module.exports = { dx, roll, d4, d6, d8, d10, d12, d20, d100, rollBody }