import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeSideBar from './HomeSideBar';
import ShoppingFooter from './ShoppingFooter';

function HomeMainBody(props) {
    const [homeDecors, setHomeDecors] = useState([]);
    useEffect(() => {
        let arr = [];
        arr.push({
            name: 'Coombes',
            category: 'lounge',
            price: '$2,600',
            rating: 4,
            desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
        },
            {
                name: 'Keeve Set',
                category: 'table and chairs',
                price: '$2,600',
                rating: 4,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."

            },
            {
                name: 'Nille',
                category: 'armchair',
                price: '$2,600',
                rating: 5,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
            },
            {
                name: 'Momo',
                category: 'shelves',
                price: '$2,600',
                rating: 4,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
            },
            {
                name: 'Penemille',
                category: 'chair',
                price: '$2,600',
                rating: 4,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
            },
            {
                name: 'Kappu',
                category: 'shelves',
                price: '$2,600',
                rating: 4
            },
            {
                name: 'Hikipo Magic Sticker',
                category: 'magic sticker',
                price: '$2,600',
                rating: 3,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
            },
            {
                name: 'Wood Kappu',
                category: 'shelves',
                price: '$2,600',
                rating: 4,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
            },
            {
                name: 'Gift storage',
                category: 'shelves',
                price: '$2,600',
                rating: 5,
                desc : "These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also.These things will make your life really comfortable, you will fell very happy once you buy it. It's too comfortable. Easy to clean also."
            });
        setHomeDecors(arr);
    }, [])


    const ratingGiven = (item) => {
        let menuItems = [];
        for (var j = 0; j < item; j++) {
            menuItems.push(<span className="fa fa-star checked"></span>);
        }

        for (var i = 0; i < 5 - item; i++) {
            menuItems.push(<span className="fa fa-star-o stars-inactive"></span>);
        }

        return (menuItems);
    }

    return (
        <div className="main" style={{ position: "absolute", margin: "2%" }}>
            <HomeSideBar />
            <div className="content">
                <div className="row">

                    {
                        homeDecors.map(item => (
                            <div key={item.name} style={{ marginBottom: "-7%" }} className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <Link to=
                                    {{
                                        pathname: "/details",
                                        data: item
                                    }}>
                                    <img className="card-img-top" src={require(`../Images/${item.name}.jpg`)} alt="Not found" style={{ height: "50%" }} />

                                </Link>

                                <div>
                                    <p><b>{item.name}</b></p>
                                    <span className="filter" style={{ float: "left" }}>{item.category}</span>
                                    <span style={{ float: "right" }}>{item.price}</span> <br />
                                    <h6 style={{ paddingTop: "4%", float: "left" }}>{ratingGiven(`${item.rating}`)}</h6>
                                    <p style={{ float: "right" }} className="nav-item nav-link active"><i className="fa fa-shopping-cart" aria-hidden="true"></i></p>
                                </div>

                            </div>

                        ))
                    }
                </div>



            </div>
            <ShoppingFooter />

        </div>
    )
}

export default HomeMainBody
