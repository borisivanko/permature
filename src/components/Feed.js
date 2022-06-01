import React, {useEffect, useState} from 'react';
import Permature from './Permature';

const Feed = () => {
  const [permatures, setPermatures] = useState([]);

  const getPermatures = async () => {
    const response = await fetch('https://permature.borisivanko.sk/api/get-all-permatures');
    const JSONdata = await response.json();

    JSONdata.sort((a, b) => b.permature_id - a.permature_id);

    setPermatures(JSONdata);
  };

  useEffect(() => {
    getPermatures();
  }, []);
  return (
    <section className='container'>
      {permatures.map((permature) => {
        return (
          <Permature
            key={permature.permature_id}
            content={permature.content}
            signature={permature.signature}
          ></Permature>
        );
      })}
    </section>
  );
};

export default Feed;
