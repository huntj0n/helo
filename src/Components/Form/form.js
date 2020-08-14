import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    changeHandler = () => {

    }
    submit = () => {

    }

    render(){
        return(
            <div>
                <div>
                    <h1>New Post</h1>
                    <div>
                        Title: <input/>
                        <img/>
                        Image URL: <input/>
                        Content: <input/>
                    </div>
                </div>
            </div>
        )
    }
}