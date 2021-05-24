import React from 'react';
import { Link } from 'react-router-dom'; 
import Rating from '../components/Rating';
import data from '../data';

export default function ShirtScreen(props){ 
    const shirt=data.shirts.find(x => x._id === props.match.params.id);
    if(!shirt){
        return <div>Shirt not found!</div>
    }
    return (
        <div>
            <Link className="backto" style={{textDecoration: "none" , fontSize:"2.1rem"}} to="/">Back to Result</Link>
            <div className="row cntr">
                <div className="col-sm-2 col2">
                    <img src={shirt.image} className="large" alt={shirt.name}></img>
                </div>
                <div className="col-sm-1 col1">
                    <ul>
                        <li>
                            <h1>{shirt.name}</h1>
                        </li>
                        <li>
                            <Rating rating={shirt.rating} numReviews={shirt.numReviews}></Rating>
                        </li>
                        <li><b>Price :</b> {shirt.price} Rs</li>
                        <li><b>Description :</b> 
                            <p>{shirt.descriptn}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-1 col1">
                    <div className="card card-body"><ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div>{shirt.price} Rs</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div> 
                                <div>{shirt.countInStock>0?<span className="success">In Stock</span>:
                                    <span className="error">Unavailable</span>}</div>   
                            </div>    
                        </li> 
                        <li>
                            <div className="row">
                                <div>Size</div>
                                <div style={{fontSize:"1.8rem"}}><select name="size" id="sizeNo" style={{borderRadius:"0.7rem", background:"whitesmoke"}}>
                                <option value="">--select--</option>
                                <option value="X">X</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option></select>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block" style={{fontSize:"1.8rem"}}>Add to Cart</button>
                        </li>   
                    </ul></div>
                </div>
            </div>
        </div>
    );
}