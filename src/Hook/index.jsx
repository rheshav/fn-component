import { useState } from 'react';
import { useToggle } from './custom/useToggle';
import Counter from './pembahasan/Counter';
import Effect from './pembahasan/Effect';
import Identity from './pembahasan/Identity';

const Hooks = () => {
  let [label, setLabel] = useState('ON');
  let [lampu, setLampu] = useToggle();

  const style = {
    background: lampu ? 'yellow' : 'black',
    textAlign: 'center',
    height: '400px',
  };
  const saklar = () => {
    setLampu(!lampu);
    setLabel((e) => {
      if (e === 'ON') {
        return 'OFF';
      } else return 'ON';
    });
  };

  return (
    <div style={style}>
      <button onClick={saklar}>{label}</button>
    </div>
  );
};
export default Hooks;
