import React from 'react'
import {connect} from 'react-redux'
import {requestAllTweets} from '../action/main_action'
import CreateTwit from './CreateTwit'
import ListTwit from './ListTwit'


class Tweets extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            clicked: false
        }
    }

    componentWillMount(){
        this.props.allTweets()
    }

    list_twits() {
        return (
            <div className="container-fluid" style={{overflowY: 'scroll', height: '440px'}}>
                {this.props.tweets.map((tweet, i) => {
                    return [
                        <div key={i}>
                            <ListTwit 
                                tweet = {tweet}
                                enable_reply = {(id, clicked) => this.setState({id: id, clicked: clicked})}
                            />
                        </div>,
                        <div>
                            {this.state.id === tweet.id && this.state.clicked &&
                                <CreateTwit 
                                    parent_id = {tweet.id}
                                    hide = {() => this.setState({clicked: false})}
                                />
                            }
                        </div>
                    ]
                })}
            </div>
        )
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="row pad-h">
                    <div className="container-fluid">
                        <div className="row text-left m-b m-t">
                            <span className="f-md">Home</span>
                        </div>
                        <CreateTwit 
                            parent_id = {null}
                            hide = {() => console.log("helo")}
                        />
                    </div>
                    {this.list_twits()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tweets: state.tweets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        allTweets: () => {
            dispatch(requestAllTweets())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tweets)
