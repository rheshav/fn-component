import { useState, useEffect } from 'react';

const Effect = () => {
  let [text, setText] = useState('');
  let [user, setUser] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  return (
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Effect;
