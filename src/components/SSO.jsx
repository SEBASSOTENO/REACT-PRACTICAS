import React, { Component } from 'react';

class SSO extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        mevoy: 'Me voy ',
        nombre:'SSO'
    }
}

render () {
    return (
        <h1>{this.state.mevoy}
        {this.state.nombre}</h1>
    )
}
};

export default SSO;