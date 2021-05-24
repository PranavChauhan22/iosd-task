import React from 'react'
import Rating from './Rating'

export default function Shirt(props){
    const {shirt}=props;
    return(
        <div key={shirt._id} className="card">
            <a href={`/shirt/${shirt._id}`}><img className="shirt-img" src={shirt.image} alt={shirt.name}></img></a>
            <div className="card-body">
                <a style={{textDecoration:"none"}} href={`/shirt/${shirt._id}`}>
                    <h2>{shirt.name}</h2>
                </a>
                <Rating rating={shirt.rating} numReviews={shirt.numReviews}></Rating>
                <div className="price">{shirt.price} Rs.</div>
            </div>
        </div>
    );
}