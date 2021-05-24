import React from 'react'
import Rating from './Rating'

export default function Shoe(props){
    const {shoe}=props;
    return(
        <div key={shoe._id} className="card">
            <a href={`/shoe/${shoe._id}`}><img className="shoe-img" src={shoe.image} alt={shoe.name}></img></a>
            <div className="card-body">
                <a style={{textDecoration:"none"}} href={`/shoe/${shoe._id}`}>
                    <h2>{shoe.name}</h2>
                </a>
                <Rating rating={shoe.rating} numReviews={shoe.numReviews}></Rating>
                <div className="price">{shoe.price} Rs.</div>
            </div>
        </div>
    );
}