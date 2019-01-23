import React, { Component } from 'react';
import "./Header.css"

class Header extends Component {


    welcome() {
        if(this.props.name != undefined){
            return <h3>{this.props.name}</h3>;
        }
    }

    render() {
        return (
            <header>
                <h3> Welcome to chatApp  {this.welcome()}</h3>
            </header>
        );
    }
}

export default Header;
