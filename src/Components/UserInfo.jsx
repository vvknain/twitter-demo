import React from 'react'


export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="">
                    <img src="twitter_profile.png" className="rounded profile-pic box-shadow-lg" alt="Profile Pic" />
                </div>
                <br/>
                <div className="text-center">
                    <span className="f-md txt-color">{this.props.user.full_name? this.props.user.full_name : "Vivek Nain"}</span>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        Tweets
                        <p className="txt-color">{this.props.user.tweet_count ? this.props.user.tweet_count : 0}</p>
                    </div>
                    <div className="col-md-4">
                        Following
                        <p className="txt-color">{this.props.user.follow_count ? this.props.user.follow_count : 0}</p>
                    </div>
                    <div className="col-md-4">
                        Followers
                        <p className="txt-color">{this.props.user.follower_count ? this.props.user.follower_count : 0}</p>
                    </div>
                </div>
            </div>
        )
    }
}