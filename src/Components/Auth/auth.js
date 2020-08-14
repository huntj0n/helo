import React, {Component} from 'react';


export default class Auth extends Component {
    constructor(){
        super()
        this.State = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {

    }

    register = () => {

    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}