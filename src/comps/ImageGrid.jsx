import React from 'react';

const ImageGrid = (props) => {
  const { docs } = props;

  return (
    <div className="img-grid">
      { docs.map((doc) => (
        <img src={doc.url} alt="your picture" key={doc.id} />
      ))}
    </div>
  )
}

export default ImageGrid;

/*
const ImageGrid = (props) => {
  const { docs } = props;

  return (
    <ul className="img-grid">
      { docs.map((doc) => (
        <li className="img-wrap" key={doc.id}>
          <img src={doc.url} alt="your picture" />
        </li>
      ))}
    </ul>
  )
}
*/