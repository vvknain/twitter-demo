import React from 'react'
import ListTwit from './ListTwit'


export default class Tweets extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list_twits: [1,2],
            main_tweet: {}
        }
    }

    show_comments() {
        
    }

    list_twits(id) {
        
        if(this.state.twits) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11"></div>
                    </div>
                    {this.state.twits.map((twit, i) => {
                        return (
                            <div key={i}>
                                <ListTwit 
                                    show_comments = {() => this.show_comments()}
                                />
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="row pad-h">
                <div className="container-fluid">
                    <ListTwit 
                        show_comments = {() => this.show_comments()}
                    />
                </div>
                {this.list_twits()}
            </div>
        )
    }
}