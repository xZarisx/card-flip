import styles from './FlipCard.css';
import classes from 'classnames';
import images, {background} from '../../images/images.js';



export default ({ onClick, flipped=false, card=0 }) => (
    <div className={classes(styles.FlipCard, {[styles.flipped]: !flipped})} onClick={onClick}>
        <div className={styles.flipper}>
            <div className={styles.front}>
                <img className={styles.image} src={images[card]}/>
            </div>
            <div className={styles.back}>
                <img className={styles.image} src={background}/>
            </div>
        </div>
    </div>
);
