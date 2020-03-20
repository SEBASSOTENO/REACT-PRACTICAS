import React, { Component } from 'react';

class ClassRoom extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        message: ' Pero DEBO conectarme en Classroom ',
    }
}

render () {
    return (
        <h1>{this.state.message}</h1>
    )
}
};

export default ClassRoom;