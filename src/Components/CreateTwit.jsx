import React from 'react'


export default class CreateTwit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row twit-row-mar">
                <div className="col-md-12 text-left m-b">
                    <span className="f-md">Home</span>
                </div>
                <div className="col-md-12 b-a h-md box-shadow-lg">
                    <div className="row pad-v">
                        <div className="col-md-2">
                            <img src="twitter_profile.png" className="rounded-circle prf-pic" alt="profile"/>
                        </div>
                        <div className="col-md-9">
                            <form>
                                <textarea className="form-control no-b" name="tweet_msg" id="" cols="30" rows="3" placeholder="Whats going on in your mind?"></textarea>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-11 text-right v-center" style={{height: "90px"}}>
                            <button type="button" className="btn btn-primary btn-lg" style={{marginTop: "20px"}}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}