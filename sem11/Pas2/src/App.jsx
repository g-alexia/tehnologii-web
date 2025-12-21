import React, { useState, useEffect } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Afisata prima data');
    document.title = 'Bine ati venit';
  }, []);
  return (
    <div className="container">
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div >
  )

}

export default App;

