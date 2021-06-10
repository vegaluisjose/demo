import { Component } from 'react';
import Grid from './Grid';

class Layout extends Component {

    state = {
        value: 0,
    }

    render() {
        return (
            <div>
                <Grid/>
                <p>Iteration: {this.state.value}</p>
            </div>
        );
    }

}

export default Layout;
