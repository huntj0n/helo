import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';


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
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password})
        .then(res => {
            //set user to state

            this.props.history.push('/dashboard')
        })
        .catch(err => {console.log(err)})
    }

    register = () => {
        const {username, password} = this.state;

        axios.post('/auth/register', {username, password})
        .then( res => {
             //set user to state

             this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    render(){
        const {username, password} = this.state;
        return(
            <div>
                <div>
                    <img/>
                    <h1>HELO</h1>
                    <div>
                        <input onChange={e=> this.changeHandler(e)} name="email" type="text" value={username}/>
                        <input onChange={e=> this.changeHandler(e)} name="email" type="password" value={password}/>
                        <div>
                            <button onClick={this.login}>Login</button>
                            <button onClick={this.register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;