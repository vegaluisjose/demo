import { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

class Layout extends Component {

    renderLut = (placed) => {
        return (
            <Grid item>
                <Paper style={{ backgroundColor: placed ? "#006563" : "#00fff0", height:10, width: 10 }}/>
            </Grid>
        );
    }

    renderDsp = (placed) => {
        return (
            <Grid item>
                <Paper style={{ backgroundColor: placed ? "#FF0000" : "#000000", height:25, width: 10 }}/>
            </Grid>
        );
    }

    renderCell = (prim, placed) => {
        switch (prim) {
            case "dsp": return this.renderDsp(placed);
            case "lut": return this.renderLut(placed);
            default: return <h1>Error</h1>
        }
    }

    renderColumn = (prim, col) => {
        return (
            <Grid container item xs="auto" sm="auto" md="auto" lg="auto" xl="auto" direction="column">
                {col.map((placed) => this.renderCell(prim, placed))}
            </Grid>
        );
    }

    render() {
        return (
            <Grid container wrap="nowrap" xs="auto" sm="auto" md="auto" lg="auto" xl="auto" justify="center">
                {this.props.layout.map((col) => this.renderColumn(col.prim, col.placed))}
            </Grid>
        );
    }

}

export default Layout;
