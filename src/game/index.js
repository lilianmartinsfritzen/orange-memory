let game = {

  gameCards: [
    'fcamara',
    'fc-nuvem',
    'imagine',
    'omnik',
    'orange-ventures',    
    'prog-formacao'   
  ],

  lockMode: false,
  firstCard: null,
  secondCard: null,

  setCard: function(id) {

    let card = this.cards.filter(card => card.id === id)[0];
    if (card.turned || this.lockMode) {
      return false;
    }

    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.turned = true;
      return true;

    } else {
      this.secondCard = card;
      this.secondCard.turned = true;
      this.lockMode = true;
      return true;
    }
  },

  checkMatch: function() {
    if (!this.firstCard || !this.secondCard) {
      return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function() {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },

  unturnedCards: function() {
    this.firstCard.turned = false;
    this.secondCard.turned = false;
    this.clearCards();
  },

  checkGameOver: function() {
    return this.cards.filter(card => !card.turned).length === 0;
  },

  createGameCards: function () {
    this.cards = [];
  
    this.gameCards.forEach((gameCard) => {
      this.cards.push(this.createGameCardPair(gameCard))
    })
  
    this.cards = this.cards.flatMap(pair => pair);
    this.mixCards();
    return this.cards;
  },  
  
  createGameCardPair: function (gameCard) {
    return [{
      id: this.createGameCardId(gameCard),
      icon: gameCard,
      turned: false,
    }, {
      id: this.createGameCardId(gameCard),
      icon: gameCard,
      turned: false,
    }]
  },
  
  createGameCardId: function (gameCard) {
    return gameCard + parseInt(Math.random() * 1000);
  },

  mixCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;
  
    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    }
  },

  turnCard: function(cardId, gameOverCallBack, noMatchCallBack) {
    if (this.setCard(cardId)) {
      if (this.secondCard) {
        if (this.checkMatch()) {
          this.clearCards();
  
          if (this.checkGameOver()) {
            gameOverCallBack();
          }
  
        } else {
          setTimeout(() => {
            this.unturnedCards();
            noMatchCallBack();
          }, 1000);
        }
      }
    }
  }
}

export default game;