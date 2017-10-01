import React, {Component} from 'react';
import '../../src/App.css';
import sodium from './images/latestComponent/Is-Sodium-Lauryl-Sulfate-safe.jpg';
import yearReview from './images/latestComponent/Year-in-Review.jpg';
import cannabis from './images/latestComponent/Cannabis-Webinar.png';


export default class Latest extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="latest">
                <div className="latest-container">
                    <div className="latest-video">
                        <h3 className="latest-headers">Latest Video</h3>
                        <div className="latest-body">
                            <a href="" className="latest-picture"><img src={sodium} alt="sodium" className="latest-picture"/></a>
                            <div className="latest-text">
                                <h4><a href="">Is Sodium Lauryl Sulfate Safe?</a></h4>
                                <p>
                                    Just because the toothpaste ingredient sodium lauryl sulfate doesn’t 
                                    cause cancer doesn’t mean it can’t cause problems.
                                </p>
                                <div className="watch-video"><a href="">Watch Video</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="year-in-review">
                        <h3 className="latest-headers">2016 Year-in-Review</h3>
                        <div className="latest-body">
                            <a href="" className="latest-picture"><img src={yearReview} alt="year" className="latest-picture"/></a>
                            <div className="latest-text">
                                <h4><a href="">How Not to Die: Preventing, Arresting,<br/> and Reversing Our Top 15 Killers</a></h4>
                                <p>
                                    As part of his book tour, Dr. Greger has compiled all of the most compelling evidence from his 
                                    last four annual year-in-review talks into one presentation, in which he explores the role diet 
                                    may play in preventing, treating, and even curing our leading causes of death.
                                </p>
                                <div className="watch-video"><a href="">Watch Video</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="latest-blog">
                        <h3 className="latest-headers">Latest Blog</h3>
                        <div className="latest-body">
                            <a href="" className="latest-picture"><img src={cannabis} alt="canabis" className="latest-picture"/></a>
                            <div className="latest-text">
                                <h4><a href="">Recipe Testing and the Straight Dope</a></h4>
                                <p>
                                    Become a Recipe Tester Just a few months to go before the How Not to Die Cookbook comes 
                                    out in December! Want a sneak peek at some […]
                                </p>
                                <div className="watch-video"><a href="">Watch Video</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}