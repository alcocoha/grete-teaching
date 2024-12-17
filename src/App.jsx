import PaginaDeListado from './containers/PaginaDeListados/PaginaDeListados';
import './App.css';

import React, { useCallback, useContext, useState } from 'react';

function App() {
  return (
    <div className="App">
      <PaginaDeListado />
    </div>
  );
}

export default App;
