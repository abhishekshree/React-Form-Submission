import { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OK");
    try {
    let colors = new Values(color).all(10);
    setList(colors);
    }catch (e){
      setError(true);
      console.log(e);
    }
  }

  return (
    <>
    <section className="container">
      <h3>Shade Generator: </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f15025" 
        className={`${error? 'error' : null}`}
        />
        <button className="btn" type="Submit">Submit</button>
      </form>
    </section>

    <section className="colors">
      
      {list.map(
        (color, index) => {
          // console.log(color);
          return <SingleColor key={index} {...color} index={index} hex={color.hex} />
        }
      )}

    </section>
    </>
    );

}

export default App