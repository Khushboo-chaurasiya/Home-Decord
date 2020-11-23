import React from 'react'

function ShoppingFooter() {
    const ratingGiven = () => {
        let menuItems = [];
        for (var j = 1; j < 11; j++) {
            menuItems.push(<li className="page-item"><p className="page-link" >{j}</p></li>);
        }
        return (menuItems);
    }
    return (
        
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                {ratingGiven()}
                    <li className="page-item">
                        <p className="page-link"  aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ShoppingFooter
