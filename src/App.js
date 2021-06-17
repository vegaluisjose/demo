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
      let layout = await wasm.init();
      this.setState({ layout: layout.col });
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  }

  clearLayout = async () => {
    const { wasm = {} } = this.state;
    let layout = await wasm.init();
    this.setState({ layout: layout.col });
  }

  randomLayout = async () => {
    const { wasm = {} } = this.state;
    let layout = await wasm.random();
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
                variant="contained"
                onClick={this.clearLayout}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                onClick={this.randomLayout}
              >
                Random
              </Button>
            </div>
          </header>
        </div>
      </Container>
    )
  }

}


export default App;
