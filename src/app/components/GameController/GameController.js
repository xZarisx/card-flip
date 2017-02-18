import styles from './GameController.css';
// import classes from 'classnames';
import images from '../../images/images.js';
import FlipCard from '../FlipCard/FlipCard.js';

import {Component} from 'react';

const randomize = () => 0.5 - Math.random();
const doubleArray = (p, c) => [...p, c, c];

const newGameCards = () => {
    return Object.keys(images)
        .sort(randomize)
        .slice(0,8) // grab first 8
        .reduce(doubleArray, [])
        .sort(randomize)
        .map((cardNum) => ({cardNum, flipped: false, matched: false}));
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: newGameCards(),
            score: 0
        }
        // this.flipCard = this.flipCard.bind(this);
        this.activeCard = null;
        this.checkingMatch = false;
        this.matchedCards = 0;
        this.cardsFlipped = 0;
    }

    flipCardUp(i) {
        const cards = [...this.state.cards];
        if(!this.checkingMatch) {
            cards[i].flipped = true;

            this.setState({
                cards: cards
            });
        }
    }


    flipCardDown(i) {
        const cards = [...this.state.cards];
        cards[i].flipped = false;

        this.setState({
            cards: cards
        });
    }

    calculateScore() {
        console.log(this.cardsFlipped , this.state.cards.length);
        this.setState({
            score: this.cardsFlipped * this.cardsFlipped / this.state.cards.length
        })
    }

    checkCardMatch(i) {
        const cards = [...this.state.cards];
        if(this.activeCard !== i && !this.checkingMatch){
            this.cardsFlipped += 1;
            if (this.activeCard === null) {
                this.activeCard = i;
            }
            else {
                this.checkingMatch = true;
                if (cards[i].cardNum === cards[this.activeCard].cardNum ) {
                    cards[i].cardNum
                    cards[this.activeCard].cardNum
                    this.activeCard = null;
                    this.checkingMatch = false;
                    this.matchedCards += 2;
                    if (this.matchedCards === this.state.cards.length) {
                        this.calculateScore();
                    }
                }
                else {
                    setTimeout(
                        () => {
                            this.checkingMatch = false;
                            this.flipCardDown(i);
                            this.flipCardDown(this.activeCard);
                            this.activeCard = null;
                        }, 500
                    )
                }
            }
        }

    }



    render() {
        const {cards, score} = this.state;
        return (
            <div className={styles.GameController}>
                {cards.map(({cardNum, onClick, flipped}, i) => (
                    <FlipCard key={i} card={cardNum} onClick={() => {
                        this.flipCardUp(i);
                        this.checkCardMatch(i);
                    }} flipped={flipped}/>
                ))}
                score: {score}
            </div>
        )
    }
}
