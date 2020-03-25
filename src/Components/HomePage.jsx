import React from 'react'
import UserInfo from './UserInfo'
import Tweets from './Tweets'


export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 full-h b-r">
                        <UserInfo 
                        user = {this.state.user}
                        />
                    </div>
                    <div className="col-md-6">
                        <Tweets />
                    </div>
                    <div className="col-md-3 b-l">
                        {/* <Search /> */}
                    </div>
                </div>
            </div>
        )
    }
}