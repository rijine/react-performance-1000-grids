import React from 'react'
import { Row } from '../row/row';

export const Grid = props => {
  return props.grid.rows.map( (row, id) => <Row key={id} row={row}></Row>)
};
