  
import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

import useFirestore from './hooks/useFirestore';

function App() {
  const { docs } = useFirestore('images');

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid docs={docs} />
    </div>
  );
}

export default App;
