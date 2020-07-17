import React from 'react';

function Icon({ src }) {
  return <div className="custom-icon" style={{ backgroundImage: `url("${src}")`}} />
}

export default Icon;
