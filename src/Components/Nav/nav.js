import React, {Component} from 'react';

export default class Nav extends Component {
    render(){
        return(
            <div>
                <div>
                    <img/>
                    <h4>username</h4>
                </div>
                    <div>
                        <button>Home</button>
                        <button>New Post</button>
                    </div>
                <div>
                    <button>Logout</button>
                </div>
            </div>
        )
    }
}