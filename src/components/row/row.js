import React from 'react';
import { Cells } from '../cells/cells';

export const Row = ({ row }) => {
  return (
    <div className="cells">
      <Cells cells={row.cells} />
    </div>
  );
};
