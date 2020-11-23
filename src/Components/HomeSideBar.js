import React, { useState } from 'react'

function HomeSideBar() {
    const [sliderValue, setSliderValue] = useState(1300);

    const changeSliderValue = () => {
        var slider = document.getElementById("myRange");


        slider.oninput = function () {

            setSliderValue(this.value);
        }
    }
    return (
        <div>
            <div className="sidebar">
                <label className="filter">FILTER BY</label>
                <select className="form-control">
                    <option value="">Collection</option>
                    <option value="New">New</option>
                    <option value="Progress">Progress</option>
                    <option value="Close">Old</option>
                </select>
                <select className="form-control">
                    <option value="">Color</option>
                    <option value="New">Red</option>
                    <option value="Progress">Green</option>
                    <option value="Close">Blue</option>
                </select>
                <select className="form-control">
                    <option>Category</option>
                    <option value="New">Chair</option>
                    <option value="Progress">Shelf</option>
                    <option value="Close">Kitchen</option>
                </select>
                <p className="sliderBar"> Price Range </p>
                <div className="slideDiv">
                    <input type="range" min="1300" max="10000" value={sliderValue} onChange={changeSliderValue} className="slider" id="myRange" />
                    <span style={{ float: "left" }}>$1300</span>
                    <span style={{ float: "right" }}>$10,000+</span>
                </div>

            </div>
        </div>
    )
}

export default HomeSideBar
