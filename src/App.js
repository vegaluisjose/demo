import './App.css'
import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Layout from './components/Layout';
import 'fontsource-roboto';

class App extends Component {

  state = {
    layout: [],
  }

  componentDidMount() {
    this.loadWasm();
  }

  loadWasm = async () => {
    try {
      const wasm = await import("demo");
      this.setState({ wasm });
      let layout = await wasm.greet("dsp");
      this.setState({ layout: layout.col });
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  loadLayout = async () => {
    const { wasm = {} } = this.state;
    let layout = await wasm.greet("dsp");
    this.setState({ layout: layout.col });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <Layout layout={this.state.layout} />
            <div className="controls">
              <Button
                color="primary"
                variant="contained"
                onClick={this.loadLayout}
              >
                Load
              </Button>
            </div>
          </header>
        </div>
      </Container>
    )
  }

}


export default App;
