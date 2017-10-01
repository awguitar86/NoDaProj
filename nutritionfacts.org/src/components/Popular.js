import React, {Component} from 'react';
import '../../src/App.css';
import beans from './images/topicsComponent/Beans.jpeg'
import blood from './images/topicsComponent/Blood-Pressure.jpeg'
import cancer from './images/topicsComponent/Cancer.jpeg'
import depression from './images/topicsComponent/Depression.jpeg'
import flax from './images/topicsComponent/Flax-Seeds.jpeg'
import heart from './images/topicsComponent/Heart-Health.jpeg'
import nuts from './images/topicsComponent/Nuts.jpeg'
import omega from './images/topicsComponent/Omega-3-Fatty-Acids.jpeg'

export default class Popular extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="popular">
                <div className="popular-container">

                    <div className="popularheading">
                        <h2 className="health-nutrition">Popular Health and Nutrition</h2>
                        <button className="view-all-topics"><a href="https://nutritionfacts.org/topics/">View All Topics</a></button>
                    </div>

                    <div className="popular-imgs-row-one">
                        <img src={beans} alt="beans"/>
                        <img src={blood} alt="blood"/>
                        <img src={cancer} alt="cancer"/>
                        <img src={depression} alt="depression"/>
                    </div>

                    <div className="row-one-img-footer">
                        <div>
                            <a href="" className="video-name">Beans</a>
                            <h3 className="video-number">75</h3>
                            <span className="videos">videos</span>
                        </div>

                        <div>
                            <a href="" className="video-name">Blood Pressure</a>
                            <h3 className="video-number">37</h3>
                            <span className="videos">videos</span>
                        </div>

                        <div>
                            <a href="" className="video-name">Cancer</a>
                            <h3 className="video-number">23</h3>
                            <span className="videos">videos</span>
                        </div>

                        <div>
                            <a href="" className="video-name">Depression</a>
                            <h3 className="video-number">48</h3>
                            <span className="videos">videos</span>
                        </div>
                    </div>

                    <div className="popular-imgs-row-two">
                        <img src={flax}/>
                        <img src={heart}/>
                        <img src={nuts}/>
                        <img src={omega}/>
                    </div>

                    <div className="row-two-img-footer"> 
                        <div>
                            <a href="" className="video-name">Flax Seeds</a>
                            <h3 className="video-number">27</h3>
                            <span className="videos">videos</span>
                        </div>

                        <div>
                            <a href="" className="video-name">Heart Healthy</a>
                            <h3 className="video-number">58</h3>
                            <span className="videos">videos</span>
                        </div>

                        <div>
                            <a href="" className="video-name">Nuts</a>
                            <h3 className="video-number">23</h3>
                            <span className="videos">videos</span>
                        </div>

                        <div>
                            <a href="" className="video-name">Omega 3 Fatty Acids</a>
                            <h3 className="video-number">18</h3>
                            <span className="videos">videos</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}