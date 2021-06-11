import './App.css'
import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto';

class App extends Component {

  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <Typography variant="h2" component="div">
              Demo
            </Typography>
            <Grid container direction="column">
            {[...Array(1)].map((v) =>
                <Grid container xs={2} justify="center">
                  <Grid container item xs={1} direction="column">
                    {[...Array(40)].map((v) =>
                      <Grid item>
                        <Paper style={{ height:10, width: 10 }}/>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                      <Paper style={{ height:400, width: 10 }}/>
                    </Grid>
                </Grid>
            )}
            </Grid>
          </header>
        </div>
      </Container>
  )}

}


export default App;
