import React, { Component } from 'react';
import not_found from "../../assets/imgs/not_found.png"

class NotFound extends Component {
    render() {
        return (
            <div >
                <img src={not_found} className='not'/>
            </div>
        );
    }
}

export default NotFound;