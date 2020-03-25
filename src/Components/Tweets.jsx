import React from 'react'
import CreateTwit from './CreateTwit'
import ListTwit from './ListTwit'


export default class Tweets extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            twits: [1,2]
        }
    }

    show_comments() {
        
    }

    list_twits(id) {
        
        if(this.state.twits) {
            return (
                <div className="container-fluid">
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
                    <CreateTwit />
                </div>
                {this.list_twits()}
            </div>
        )
    }
}