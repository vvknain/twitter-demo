import React from 'react'


export default class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active_tab: "home"
        }
    }

    render() {
        return (
            <div className="hbox b-b text-md font-bold">
                <div className="col"  style={{width: "30px"}}>
                    <img src="twitter_PNG9.png" className="header-logo" alt="logo" />
                </div>
                <div className="col v-center" style={{width: "40px"}}>
                    <h2>Twitter</h2>
                </div>
                <div className="col w-xlg" style={{width: "300px"}}>
                </div>
                <div className={`col v-center cursor ${this.state.active_tab == "home"? "b-b b-blue b-3x" : ""}`} style={{width: "50px"}} onClick={() => this.setState({active_tab: "home"})}>
                    <i className="fa-home"></i>
                    <span className="f-heavy">Home</span>
                </div>
                <div className={`col v-center cursor ${this.state.active_tab == "profile"? "b-b b-blue b-3x" : ""}`} style={{width: "50px"}} onClick={() => this.setState({active_tab: "profile"})}>
                    <span className="f-heavy">Profile</span>
                </div>
            </div>
        )
    }
}
