import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    // once successfully uploaded then will get a url so reset the file
    if (url) {
      setFile(null);
    }
  }, [ url, setFile]);

  return (
    <div className="progress-bar" style={{width: progress + '%'}}></div>
  );
} 

export default ProgressBar;
