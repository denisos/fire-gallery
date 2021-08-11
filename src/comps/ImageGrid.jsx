import React from 'react';

const ImageGrid = (props) => {
  const { docs } = props;

  return (
    <ul className="img-grid">
      { docs.map((doc) => (
        <li className="img-wrap" key={doc.id}>
          <img src={doc.url} alt="your image pic" />
        </li>
      ))}
    </ul>
  )
}

export default ImageGrid;
