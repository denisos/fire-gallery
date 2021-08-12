import React, { useState } from 'react';

import ProgressBar from './ProgressBar';

const allowedTypes = ['image/jpeg', 'image/png']; 

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setError(false);
    let selected = e.target.files[0];

    // if there is a file and it's an allowed type then set it
    // else error
    if (selected && allowedTypes.includes(selected.type)) {
      // console.log(selected);
      setFile(selected);
    } else {
      setFile(null);
      setError(true);
    }
  }

  return (
    <form>
      <label>
        <input type="file" data-testid="file-upload" onChange={changeHandler} />
        <span>+</span>
      </label>

      { error &&  <p className="error">Please enter a png or jpeg</p> }

      { file && `You selected to upload ${file.name}`}

      { file && <ProgressBar file={file} setFile={setFile} /> }
    </form>
  )
}

export default UploadForm;
