import React, {Component} from 'react';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    componentDidMount(){

    }
    resetSearch = () => {

    }
    render(){
        return(
            <div>
                {/* this.state.map for each post form database */}
                <div>
                    <h1>post title</h1>
                    <div>
                        <h3>username</h3>
                        <img/>
                    </div>
                </div>
            </div>
        )
    }
}