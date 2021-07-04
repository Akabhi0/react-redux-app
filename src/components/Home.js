import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="container">
            <div className="container_card">
                <img
                alt="img1" 
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000"/>
                <h3>I Phone</h3>
                <h3>Rs. 62400</h3>
                <button>Add to cart</button>
            </div>
            <div className="container_card">
                <img
                alt="img2"  
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000"/>
                <h3>I Phone</h3>
                <h3>Rs. 62400</h3>
                <button>Add to cart</button>
            </div>
            <div className="container_card">
                <img
                alt="img3"  
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000"/>
                <h3>I Phone</h3>
                <h3>Rs. 62400</h3>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Home
