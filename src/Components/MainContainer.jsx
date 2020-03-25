import React from 'react'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import Navigation from './Navigation'


export default class MainContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active_tab: "home"
        }
    }

    render() {
        return (
            <div>
                <Navigation 
                    changeTab = {(value) => this.setState({active_tab: value})}
                    active_tab = {this.state.active_tab}
                />
                {this.state.active_tab === "home" && <HomePage />}
                {this.state.active_tab === "profile" && <ProfilePage/>}
            </div>
        )
    }
}
