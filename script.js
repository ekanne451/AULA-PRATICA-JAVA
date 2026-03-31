
const perguntas = [
    {
        texto: "Que dia é o aniversario de Paulo?",
        opcoes: ["9/9", "24/10", "27/01",],
    },
    {
        texto:"Que dia é o aniversario de Ana?",
        opcoes: ["9/9", "24/10", "27/01",],
    }
]

function CalcularPontos(segundosRestantes){
    // pontuação base por cada resposta
    const base = 1000;
    const pontuacaoBonus = segundosRestantes * 50;
    const resultado = base + pontuacaoBonus
    return resultado
}

let pontuacaoCalculada = CalcularPontos(15)
console.log(pontuacaoCalculada)





function premiacao(aproveitamento){
    let totaldePerguntas = 10
    let percentual = Math.round((aproveitamento / totaldePerguntas) * 100);

    let mensagem = "Tente novamente depois..."
    if(percentual >= 80){
        mensagem = "Parabéns você domina o conteúdo!"
    } else if(percentual >= 50){
        mensagem = "Quase lá, vá estudar e tente novamente!"
    } 
    
    return mensagem

} 

console.log(premiacao(4))



for (let i = 0; i < perguntas.longth; i++) {
    console.log(perguntas[i].texto)
}