import React from 'react';
import HomeHeader from './HomeHeader';

function ShoppingDetails(props) {
    let item = props.location.data;
    return (
        <div className="main" style={{ position: "absolute", margin: "2%" }}>
            <HomeHeader />
            <div className="contentDetails">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={require(`../Images/${item.name}.jpg`)} style={{ height: "400px", width: "100%" }} alt="Not found" />

                        <div className="allImages">
                        <img className="smallImg" src={require(`../Images/${item.name}.jpg`)}  alt="Not found" /> 
                        <img className="smallImg" src={require(`../Images/${item.name}.jpg`)}  alt="Not found" />
                        <img className="smallImg" src={require(`../Images/${item.name}.jpg`)}  alt="Not found" />
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <label className="filter">{item.name}</label>
                        <h6>{item.category} Collection</h6>
                        <p>{item.desc}</p>
                        <label className="filter">Color</label> <br/>
                          Red  <input className="bottom" type="radio" name="color"/> &nbsp;
                          Green <input className="bottom" type="radio" name="color" /> <br/>
                          <p className="bottom"></p>
                          <label className="filter bottom">Price per unit</label> <br/>
                          <h4 style={{float:"left"}}>{item.price}</h4>
                          <button className="buyNow" style={{float:"left"}}> Buy Now</button>
                          <i tyle={{float:"left"}} className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default ShoppingDetails
