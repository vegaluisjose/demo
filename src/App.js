import './App.css'
import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
import Layout from './components/Layout';
import 'fontsource-roboto';

class App extends Component {

  state = {
    layout: [
      {prim: "dsp", placed:[0, 1, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "dsp", placed:[0, 1, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "dsp", placed:[0, 1, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
      {prim: "lut", placed:[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]},
    ]
  }

  componentDidMount() {
    this.loadWasm();
  }

  loadWasm = async () => {
    try {
      const wasm = await import("demo");
      this.setState({ wasm });
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  render() {
    const { wasm } = this.state;
    return (
      <Container maxWidth="lg">
        <Layout layout={this.state.layout} />
        {/* <Button
          color="primary"
          variant="contained"
          onClick={async () => {
            const t0 = await wasm.greet("Luis");
            console.log(t0);
          }}>
          Load
        </Button> */}
      </Container>
    )
  }

}


export default App;
