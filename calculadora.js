const suma = (num1,num2) => {
    return new Promise ((resolve, reject) =>{
        if (num1===0 || num2 ===0) reject ('operacion innecesaria')
        else if (num1< 0|| num2< 0) reject ('Soy racista')
        else resolve (num1 + num2)
    } )
}

const resta = (num1,num2) => {
    return new Promise ((resolve, reject) => {
        if (num1===0 || num2 ===0) return reject ('operacion innecesaria')
        const result = num1 -num2
         if (result < 0) return reject ('Soy racista')
        return resolve (result)
    })
}

const multiplicar = (num1,num2) => {
    new Promise ((resolve, reject) => {
         if (num1 < 0|| num2 <0) return reject ('Soy racista')
        return resolve (num1*num2)
    })
}

const dividir = (dividendo, divisor) => {

}


sumar (12,34)
    .then (result => console.log(reuslt))
    .catch (e => console.error(e))



const funcAsync = async () => {
    try {
        console.log(await sumar(12,34))
        console.log(await restar(12,34))
        console.log(await multiplicar(12,34))
        console.log(await dividir(12,34))
    }
}