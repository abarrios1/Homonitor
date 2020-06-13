import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class WelcomeUser extends Component {
    constructor(props) {
        super(props);

        // Pass name property to variable
        let firstName = this.props.name;
        // Assign default values to state of user
        this.state = {
            name: firstName
        }
    };

    render() {
        return <Typography variant='h7'>Welcome {this.state.name}!</Typography>
    }
};

export default WelcomeUser;