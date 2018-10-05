import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from './components/grid/grid';

class App extends Component {
  grid;
  rowsCount;
  cellsCount;

  constructor() {
    super();
    this.state = {
      grid: {
        rows: [
          {
            id: 0,
            cells: [{ id: 0 }]
          }
        ]
      }
    };
    this.rowsCount = 300;
    this.cellsCount = 100;
  }

  renderGrid() {
    this.generate();
  }

  clearIt() {
    const grid = {
      rows: []
    };
    this.setState({grid});
  }

  generate() {
    const grid = {
      rows: []
    };
    for (let i = 0; i < this.rowsCount; i++) {
      const row = {
        id: i,
        cells: []
      };
      for (let j = 0; j < this.cellsCount; j++) {
        row.cells.push({ id: j });
      }
      grid.rows.push(row);
    }
    this.setState({
      grid
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.renderGrid.bind(this)}> Render</button>
        <button onClick={this.clearIt.bind(this)}> Clear</button>
        <Grid grid={this.state.grid} />
      </div>
    );
  }
}

export default App;
