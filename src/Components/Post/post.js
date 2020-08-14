import React, {Component} from 'react';
import axios from 'axios';

export default class Post extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            auther: '',
            authorPicture: ''
        }
    }
    componentDidMount(){
        axios.get()
    }

    render(){
        return(
            <div>
                <h1>Title</h1>
                <div>
                    <img alt=""/>
                    <content>

                    </content>
                </div>
                <div>
                    <h3>username</h3>
                    <img/>
                </div>
            </div>
        )
    }
}