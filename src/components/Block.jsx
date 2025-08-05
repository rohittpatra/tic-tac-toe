import { useState } from 'react';

function Block({ value, onClick }) {
  return (
    <div className="Block" onClick={onClick}>
      {value}
    </div>
  );
}

export default Block;