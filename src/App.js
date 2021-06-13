import './App.css'
import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto';

class App extends Component {

  state = {
    data: "NEW"
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
    const { wasm = {} } = this.state;
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <Typography variant="h2" component="div">
              Demo
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={async () => {
                const t0 = await wasm.greet("Luis");
                this.setState({ data: t0 });
              }}>
                Calculate
              </Button>
              <Typography variant="h4" component="div">
                {this.state.data}
              </Typography>
          </header>
        </div>
      </Container>
  )}

}


export default App;
