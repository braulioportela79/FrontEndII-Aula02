let userScore = 0;
let computerScore = 0;

let winner = () => {
    if (userScore == 2) {
        document.querySelector('.winner').innerText = 'Você foi o vencedor!';
        setTimeout(() => {
            let newGame = confirm('Jogar novamente?')
            if (newGame) {
                document.location.reload(true);
            }
        }, 100);
        resetScore();
    } else if (computerScore == 2) {
        document.querySelector('.winner').innerText = 'Computador foi o vencedor!';
        setTimeout(() => {
            let newGame = confirm('Jogar novamente?')
            if (newGame) {
                document.location.reload(true);
            }
        }, 100);
        resetScore();
    };
};

let resetScore = () => {
    userScore = 0;
    computerScore = 0;
};

let game = (userChoice, computerChoice) => {

    document.querySelector('.winner').innerText = '';
    computerChoice = parseInt(Math.random() * 3 + 1);

    if (userChoice == 'pedra') {
        userChoice = 1;
    } else if (userChoice == 'papel') {
        userChoice = 2;
    } else if (userChoice == 'tesoura') {
        userChoice = 3;
    };

    switch (userChoice) {
        case computerChoice: // Se Computador e Usuário Escolherem Mesmo Valor (Empate)
            if (computerChoice == 1 && userChoice == 1) {
                document.querySelector('.result > p').innerText = 'Empate! Pedra(PC) x Pedra(Você). Sem pontuação.';
            } else if (computerChoice == 2 && userChoice == 2) {
                document.querySelector('.result > p').innerText = 'Empate! Papel(PC) x Papel(Você). Sem pontuação.';
            } else if (computerChoice == 3 && userChoice == 3) {
                document.querySelector('.result > p').innerText = 'Empate! Tesoura(PC) x Tesoura(Você). Sem pontuação.';
            }
            break;

        case 1: // Se Usuário Escolher 1 (Pedra)
            if (computerChoice == 2) { // Se Computador Escolher 2 (Papel)
                computerScore++ // Computador Ganhou (Adicionar 1 ponto)
                document.querySelector('.result > p').innerText = 'Computador ganhou: Papel(PC) x Pedra(Você)';
            } else { // Se Computador Escolher 3 (Tesoura)
                userScore++ // Usuário Ganhou (Adicionar 1 ponto)
                document.querySelector('.result > p').innerText = 'Você ganhou: Pedra(Você) x Tesoura(PC)';
            };
            break;

        case 2: // Se Usuário Escolher 2 (Papel)
            if (computerChoice == 1) { // Se Computador Escolher 1 (Pedra)
                userScore++ // Usuário Ganhou (Adicionar 1 ponto)
                document.querySelector('.result > p').innerText = 'Você ganhou: Papel(Você) x Pedra(PC)';
            } else { // Se Computador Escolher 3 (Tesoura)
                computerScore++ // Computador Ganhou (Adicionar 1 ponto)
                document.querySelector('.result > p').innerText = 'Computador ganhou: Tesoura(PC) x Papel(Você)';
            };
            break;

        case 3: // Se Usuário Escolher 3 (Tesoura)
            if (computerChoice == 1) { // Se Computador Escolher 1 (Pedra)
                computerScore++ // Computador Ganhou (Adicionar 1 ponto)
                document.querySelector('.result > p').innerText = 'Computador ganhou: Pedra(PC) x Tesoura(Você)';
            } else { // Se Computador Escolher 2 (Papel)
                userScore++ // Usuário Ganhou (Adicionar 1 ponto)
                document.querySelector('.result > p').innerText = 'Você ganhou: Tesoura(Você) x Papel(PC)';
            };
    };

    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    winner();
};