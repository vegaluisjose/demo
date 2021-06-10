import { Component } from 'react';

class Layout extends Component {

    state = {
        value: 0,
    }

    render() {
        return (
            <div>
                <p>Iteration: {this.state.value}</p>
            </div>
        );
    }

}

export default Layout;
