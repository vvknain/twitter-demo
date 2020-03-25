import React from 'react'


export default class CreateTwit extends React.Component {
    constructor(props) {
        super(props)
    }

    show_comments() {
        this.props.show_comments()
    }

    render() {
        return (
            <div className="row twit-row-mar">
                <div className="col-md-12 b-a h-sm box-shadow-lg">
                    <div className="row pad-v">
                        <div className="col-md-2">
                            <img src="twitter_profile.png" className="rounded-circle prf-pic" alt="profile"/>
                        </div>
                        <div className="col-md-10">
                            <div className="text-left">
                                <span className="txt-color">{this.props.user && this.props.user.full_name ? this.props.user.full_name : "Vivek Nain"}</span>&nbsp;&nbsp;
                                <span className="f-xs">{this.props.twit && this.props.twit.timestamp ? this.props.twit.timestamp : "34 mins ago"}</span>
                            </div>
                            <div className="text-left">
                                <span className="f-sm dis-in">{this.props.twit && this.props.twit.msg ? this.props.twit.msg : "Hello there! this is a sample twit.nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"}</span>
                            </div>
                            <div className="hbox h-xs">
                                <div className="col txt-grey cursor v-center" onClick={() => this.show_comments()}>
                                    <i className="fa fa-comment txt-color"></i>
                                    <span className="f-sm"> Comments</span>
                                </div>
                                <div className="col txt-grey cursor v-center">
                                    <i className="fa fa-reply"></i>
                                    <span className="f-sm"> Reply</span>
                                </div>
                                <div className="col txt-grey cursor  v-center">
                                    <i className="fas fa-heart"></i>
                                    <span className="f-sm"> Like</span>
                                </div>
                                <div className="col txt-grey cursor  v-center">
                                    <i class="far fa-trash-alt"></i>
                                    <span className="f-sm"> Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}