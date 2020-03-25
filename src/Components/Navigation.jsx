import React from 'react'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'


export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    changeTab(value) {
        this.props.changeTab(value)
    }

    render() {
        return (
            <div className="hbox b-b text-md font-bold nav-header">
                <div className="col v-center"  style={{width: "30px"}}>
                    <img src="twitter_PNG9.png" className="header-logo" alt="logo" />
                </div>
                <div className="col v-center" style={{width: "40px"}}>
                    <h2 className="txt-color">Twitter</h2>
                </div>
                <div className="col" style={{width: "300px"}}>
                </div>
                <div className={`col v-center cursor ${this.props.active_tab == "home"? "b-b b-blue b-3x txt-color " : ""}`} 
                style={{width: "50px"}} onClick={() => this.changeTab("home")}>
                    <i className="fa fa-home"></i>
                    <span className="f-heavy"> Home</span>
                </div>
                <div className={`col v-center cursor ${this.props.active_tab == "profile"? "b-b b-blue b-3x txt-color" : ""}`} 
                style={{width: "50px"}} onClick={() => this.changeTab("profile")}>
                    <i className="fa fa-user"></i>
                    <span className="f-heavy"> Profile</span>
                </div>
                <div className="col v-center cursor" style={{width: "50px"}}>
                    <span className="f-heavy">{0? "Login/SignUp": "Signout"}</span>
                </div>
            </div>
        )
    }
}
