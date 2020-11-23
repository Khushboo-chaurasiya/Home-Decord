import React from 'react'

function HomeHeader() {
    return (
        <div>
            <div className="navbar-top">
                <nav className="navbar navbar-expand-md navbar-light">
                    <p  className="navbar-brand"><i className="fa fa-bars" aria-hidden="true"></i></p>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <p  className="nav-item nav-link active"><b>HOME</b></p>
                            <p  className="nav-item nav-link active"><b>SHOP</b></p>
                            <p  className="nav-item nav-link active"><b>MAGZINE</b></p>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <p  className="nav-item nav-link active"><i className="fa fa-search" aria-hidden="true"></i> 

                            &nbsp; &nbsp;
                            
                            <input className="inputBox" type="text" aria-describedby="emailHelp" placeholder="living room" />

                            
                            </p>
                            <p  className="nav-item nav-link active"><i className="fa fa-shopping-cart" aria-hidden="true"></i></p>
                            <p  className="nav-item nav-link active"><b>LOGIN</b></p>
                        </div>
                    </div>
                </nav>
            </div>

            
        </div>
    )
}

export default HomeHeader
