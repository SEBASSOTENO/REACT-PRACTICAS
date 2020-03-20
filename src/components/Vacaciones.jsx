import React, { Component } from 'react';

class Vacaciones extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        vaca: 'De Vacaciones ',
    }
}

render () {
    return (
        <h1>{this.state.vaca}</h1>
    )
}
};

export default Vacaciones;