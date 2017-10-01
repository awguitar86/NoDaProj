import React, {Component} from 'react';
import '../../src/App.css';
import logo from './images/nutritionfacts-logo.png'

export default class Nav extends Component{
    constructor(){
        super()
    }

    render(){
        return(
                <nav className="nav">
                    <div className="nav-container">
                        <MagicDropdown className="video" text="VIDEO LIBRARY" options={[
                            {text: "Introductory Videos", url: "https://nutritionfacts.org/introduction/"},
                            {text: "Latest Video", url: "https://nutritionfacts.org/video/fever-benefits-for-autism-in-a-food/"},
                            {text: "Random Video", url: "https://nutritionfacts.org/video/which-are-better-chia-seeds-or-flax-seeds/"},
                            {text: "All Videos", url: "https://nutritionfacts.org/videos/"},
                            {text: "Brows Videos by Topic", url: "https://nutritionfacts.org/topics/"},
                        ]}/>
                        <div className="podcast">PODCAST</div>
                        <MagicDropdown className="hownot" text="HOW NOT TO DIE" options={[
                            {text: "How Not to Die", url: "https://nutritionfacts.org/book/"},
                            {text: "How Not to Die Cookbook", url: "https://nutritionfacts.org/cookbook/"},
                        ]}/>
                        <MagicDropdown className="about" text="ABOUT" options={[
                            {text: "About NutritionFacts.org", url: "https://nutritionfacts.org/about/"},
                            {text: "Meet the Team", url: "https://nutritionfacts.org/video/team/"},
                            {text: "Frequently Asked Questions", url: "https://nutritionfacts.org/faq/"},
                        ]}/>
                        <MagicDropdown className="donate" text="DONATE" options={[
                            {text: "Donate", url: "https://nutritionfacts.org/donate/"},
                            {text: "Volunteer", url: "https://nutritionfacts.org/video/volunteer/"},
                            {text: "Our Supporters", url: "https://nutritionfacts.org/supporters/"},
                            {text: "Donar Rewards and Recognition", url: "https://nutritionfacts.org/rewards/"},
                        ]}/>
                        <MagicDropdown className="subscribe" text="SUBSCRIBE" options={[
                            {text: "E-Mail Subscriptions", url: "https://nutritionfacts.org/subscribe/"},
                            {text: "Volunteer Newsletter", url: "https://nutritionfacts.org/volunteer/nutritionmission/"},
                            {text: "Facebook", url: "https://www.facebook.com/NutritionFacts.org"},
                            {text: "Twitter", url: "https://www.twitter.com/nutrition_facts"},
                            {text: "Google+", url: "https://plus.google.com/+NutritionfactsOrgMD"},
                            {text: "Instagram", url: "https://www.instagram.com/nutrition_facts_org/"},
                            {text: "Pinterest", url: "https://www.pinterest.com/drgreger/"},
                            {text: "YouTube", url: "https://www.youtube.com/user/NutritionFactsOrg"},
                            {text: "Vimeo", url: "https://vimeo.com/nutritionfacts"},
                        ]}/>
                    </div>   
                </nav>
        )
    }
}

class MagicDropdown extends Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
    }

    handleHover(){
        this.setState({
            open: !this.state.open
        });
    }

    render () {
        return (
            <div 
                onMouseEnter={this.handleHover.bind(this)} 
                onMouseLeave={this.handleHover.bind(this)}>

                <div className={this.props.className}>
                    {this.props.text}
                </div>
                    {this.state.open && 
                    <div className="video-menu">{
                        this.props.options.map(option => (
                        <div className="video-menu-text-box"><a href={option.url} className="video-menu-text">{option.text}</a></div>
                    ))}
                    </div>}
            </div>
        )
    }
}
