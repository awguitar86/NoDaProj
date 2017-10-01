import React, {Component} from 'react';
import '../../src/App.css';
import drgreger from './images/dr-greger.png'

export default class Hero extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="hero">
                <div className="hero-container">
                    <h1 className="heroheadline">What is the healthiest diet?</h1>
                    <p className="heropara1">
                        Find out what the latest science is 
                        saying about your favorite foods to help<br/> 
                        you make the healthiest choices for you and your family
                    </p>
                    <p className="heropara2">
                        Watch our free videos on more than 2,000 health and nutrition topics<br/> 
                        with new videos and articles uploaded every day
                    </p>
                    <img src={drgreger} alt="Dr. Greger" className="greger"/>
                    <a href="https://nutritionfacts.org/introduction/"><button className="findoutmore">Find Out More</button></a>
                    <a href="https://nutritionfacts.org/videos/"><button className="startwatching">Start Watching</button></a>
                    <a href="https://nutritionfacts.org/video/fever-benefits-for-autism-in-a-food/"className="gotolatestvideo">or go straight to our latest video</a>
                    <p className="michaelgreger"><strong>Michael Greger, M.D. FACLM</strong><br/>Founder, NutritionFacts.org</p>
                </div>
            </div>
        )
    }
}