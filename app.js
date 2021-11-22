document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },
        {
            name: 'caterpie',
            img: 'images/caterpie.png'
        },
        {
            name: 'caterpie',
            img: 'images/caterpie.png'
        },
        {
            name: 'pidgey',
            img: 'images/pidgey.png'
        },
        {
            name: 'pidgey',
            img: 'images/pidgey.png'
        },
        {
            name: 'seel',
            img: 'images/seel.png'
        },
        {
            name: 'seel',
            img: 'images/seel.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'vulpix',
            img: 'images/vulpix.png'
        },
        {
            name: 'vulpix',
            img: 'images/vulpix.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChoosen = [];
    let cardsChoosenId = [];
    let cardsWon = [];


    const h3 = document.querySelector("#h3");

    const button = document.getElementById("restart");


    button.addEventListener('click', restartGame);


    function restartGame() {
        window.location.reload();
    }

    //creating game board  Pas1:
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.classList.add('cards');
            card.setAttribute('data-id', i);
            let IdCard = card.getAttribute('data-id')
            card.setAttribute('src', cardArray[IdCard].img)
            card.addEventListener('click', flipcard)
            grid.appendChild(card);
            setTimeout(function() {
                card.setAttribute('src', 'images/back.jpg');
            }, 1000);
        }

    }




    //check for matches  Pas3
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];
        if (cardsChoosen[0] === cardsChoosen[1]) {
            greenBackground();
            cards[optionOneId].style.visibility = "hidden";
            cards[optionTwoId].style.visibility = "hidden";
            cardsWon.push(cardsChoosen)
        } else {
            redBackground();
            cards[optionOneId].setAttribute('src', 'images/back.jpg');
            cards[optionTwoId].setAttribute('src', 'images/back.jpg');


        }
        cardsChoosen = [];
        cardsChoosenId = [];
        resultDisplay.textContent = cardsWon.length;
        document.querySelector('.progress-bar').style.width = cardsWon.length * (100 / 6) + '%';
        if (cardsWon.length === cardArray.length / 2) {
            h3.textContent = "";
            resultDisplay.textContent = "Congratulations!"
            document.getElementById('container').classList.replace('container', 'container-win');

        }
    }

    function redBackground() {
        const container = document.querySelector(".container");
        container.style.backgroundColor = "#e26d5c";
        setTimeout(function() {
            container.style.backgroundColor = "#ffd166";

        }, 500);
    }


    function greenBackground() {
        const container = document.querySelector(".container");
        container.style.backgroundColor = "#90be6d";
        setTimeout(function() {
            container.style.backgroundColor = "#ffd166";

        }, 500);
    }




    //flipcard Pas2
    function flipcard() {

        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name);
        cardsChoosenId.push(cardId);


        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChoosen.length === 2) {

            setTimeout(checkForMatch, 500)


        }

    }



    createBoard();


})