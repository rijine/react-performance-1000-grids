import React from 'react';
import { Cell } from '../cell/cell';
import './cells.css';

export const Cells = ({ cells }) => {
  return cells.map((cell, id) => (
    <div className="cell">
      <Cell key={id} cell="1" />
    </div>
  ));
};
