import React, {Component} from 'react';
import '../../src/App.css';
import logo from './images/nutritionfacts-logo.png'
import searchicongray from './images/searchicon-gray.png'
import searchiconteal from './images/searchicon-teal.png'

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchImg: searchicongray

        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState ({
            searchImg: searchiconteal
        });
       
    }

    handleMouseOut() {
        this.setState ({
            searchImg: searchicongray
        });
       
        
    }

    render(){
        return(
            <nav className="header">
                <div className="topline"></div>
                <div className="header-container">

                    <div className="logo">
                        <a href="https://nutritionfacts.org/"><img src={logo} alt="nutritionfacts logo" className="logoimg"/></a>
                        <a className="logotext" href="https://nutritionfacts.org">NutritionFacts.org</a>
                    </div>
            
                    <div className="search">
                        <img className="searchicon" onMouseEnter={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.searchImg}/>
                        <input className="input" placeholder="SEARCH"/>
                        <button className="searchbutton">SEARCH</button>
                    </div>

                    <div className="register-signin">
                        <h3 className="register">REGISTER</h3>
                        <h3 className="signin">SIGN IN</h3>
                    </div>
                
                </div>
            </nav>
        )
    }
}