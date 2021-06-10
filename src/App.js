import './App.css'
import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto';

// const classes = {
//   paper: {
//     height: 140,
//     width: 100
//   },
//   control: {
//     padding: 20,
//     marginTop: 15,
//     background: "#fc3"
//   }
// };

class App extends Component {

  renderCell = (value, index) => {
    return (
      <Grid item>
        <Paper style={{ height:75, width: 50 }}/>
      </Grid>
    );
  }

  render() {
    const elements = ['lut', 'lut', 'lut', 'dsp', 'lut', 'lut'];
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <Typography variant="h2" component="div">
              Demo
            </Typography>
            <Grid container spacing={2} justify="center">
              {[...Array(50)].map((v, i) => this.renderCell(v, i))}
            </Grid>
          </header>
        </div>
      </Container>
    );
  }

}


export default App;
