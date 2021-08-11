import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collectionName) => {
  const [ docs, setDocs ] = useState([]);

  useEffect(() => {
    // onSnapshot fires once at start and thereafter every time the colleciton changes
    const unSubscribe = projectFirestore.collection(collectionName)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];

        snap.forEach((doc) => {
          documents.push({ 
            ...doc.data(), 
            id: doc.id 
          });
        });

        setDocs(documents);
      });

    // cleanup function to unsubscribe
    return () =>  unSubscribe();

  }, [collectionName])

  return { docs };   // return the img urls from firebase db
}

export default useFirestore;
