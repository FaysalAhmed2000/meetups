import classes from './Card.module.css';

//wraps all 'children' in a card for styling
function Card(props) {
    return <div className={classes.card}>
        {props.children}
    </div>;
}

export default Card;