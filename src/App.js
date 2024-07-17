import React from 'react';
import Matrix from './components/Matrix';

const App = () => {
  const headingStyle = {
    textAlign: 'center',
    color: '#38A68B',
    marginTop: '20px'
  };
  return (
    <div>
      <h1 style={headingStyle}>3x3 Matrix</h1>
      <Matrix />
    </div>
  );
};

export default App;