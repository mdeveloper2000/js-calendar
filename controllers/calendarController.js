export const index = async (req, res) => {

    const data = new Date()
    const diaAtual = data.getDate()
    const anoAtual = data.getFullYear()
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", 
                "Setembro", "Outubro", "Novembro", "Dezembro"]
    const mesAtual = meses[data.getMonth()]
    const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    const diaDaSemanaAtual = diasDaSemana[data.getDay()]
    const mes30dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const mesFevereiro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    const mes31dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const bissexto = new Date(data.getFullYear(), 1, 29).getDate() === 29

    if(bissexto) {
        mesFevereiro.push(29)
    }

    const janeiro = mes31dias
    const fevereiro = mesFevereiro
    const marco = mes31dias
    const abril = mes30dias
    const maio = mes31dias
    const junho = mes30dias
    const julho = mes31dias
    const agosto =  mes31dias
    const setembro = mes30dias
    const outubro = mes31dias
    const novembro = mes30dias
    const dezembro = mes31dias

    const todosMeses = []
    todosMeses.push(janeiro)
    todosMeses.push(fevereiro)
    todosMeses.push(marco)
    todosMeses.push(abril)
    todosMeses.push(maio)
    todosMeses.push(junho)
    todosMeses.push(julho)
    todosMeses.push(agosto)
    todosMeses.push(setembro)
    todosMeses.push(outubro)
    todosMeses.push(novembro)
    todosMeses.push(dezembro)

    const primeirosDiasPorMes = []

    for(let i = 0; i < 12; i++) {
        const primeiroDiaDoMes = new Date(anoAtual, i, 1)
        const diaDaSemana = primeiroDiaDoMes.getDay()    
        primeirosDiasPorMes.push(diaDaSemana)
    }

    res.render("index", { anoAtual, meses, mesAtual, diasDaSemana, diaAtual, diaDaSemanaAtual, primeirosDiasPorMes, todosMeses })

}