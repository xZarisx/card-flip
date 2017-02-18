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
        .reduce((p, c, i) => ({...p, [i]: {cardNum: c, flipped: false}}), {});
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: newGameCards()
        }
        this.flipCard = this.flipCard.bind(this);
        this.activeCard = null;
    }

    flipCard(i) {
        const {cards} = this.state;
        this.setState({
            cards: Object.assign(cards, {[i]:{cardNum: cards[i].cardNum, flipped: !cards[i].flipped}})
        });
    }

    checkCardMatch(i) {
        if (!this.activeCard) {
            this.activeCard = i;
        }
        else if (this.state.cards[i].cardNum === this.state.cards[this.activeCard].cardNum ) {
            // cards matched
        }
        else {
            this.activeCard = null;

            this.state.cards[i].cardNum
            this.state.cards[this.activeCard].cardNum
        }

    }



    render() {
        console.log(this.state);
        const cards = Object.keys(this.state.cards).map((item, i) => this.state.cards[i]);
        console.log(cards);
        return (
            <div className={styles.GameController}>
                {cards.map(({cardNum, flipped}, i) => (
                    <FlipCard key={i} card={cardNum} onClick={() => this.flipCard(i)} flipped={flipped}/>
                ))}
            </div>
        )
    }
}
