import { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

class Layout extends Component {

    renderLut = (placed) => {
        return (
            <Grid item>
                <Paper style={{ backgroundColor: placed ? "#61dafb" : "#626366", height:10, width: 10 }}/>
            </Grid>
        );
    }

    renderDsp = (placed) => {
        return (
            <Grid item>
                <Paper style={{ backgroundColor: placed ? "#61dafb" : "#626366", height:25, width: 10 }}/>
            </Grid>
        );
    }

    renderDefault = (placed) => {
        return (
            <Grid item>
                <Paper style={{ backgroundColor: placed ? "#61dafb" : "#626366", height:10, width: 10 }}/>
            </Grid>
        );
    }

    renderCell = (prim, placed) => {
        switch (prim) {
            case "dsp": return this.renderDsp(placed);
            case "lut": return this.renderLut(placed);
            default: return this.renderDefault(placed);
        }
    }

    renderColumn = (prim, elem) => {
        return (
            <Grid container item direction="column">
                {elem.map((placed) => this.renderCell(prim, placed))}
            </Grid>
        );
    }

    render() {
        return (
            <Grid container wrap="nowrap" xs={1} justify="center">
                {this.props.layout.map((col, i) => this.renderColumn(col.prim, col.elem))}
            </Grid>
        );
    }

}

export default Layout;
