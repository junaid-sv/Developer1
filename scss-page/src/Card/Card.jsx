import React from 'react';
import '../Card/Card.scss';

const Card = (props) => {
    return (
        <>
        <div className="card">{props.children}</div>
        </>
    );
}
export default Card;