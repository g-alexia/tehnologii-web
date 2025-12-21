import React, { useState } from "react"

const App = () => {
  const [steps, setSteps] = useState(0);

  return (
    <div className="container">
      <p>Today you've taken {steps} steps!</p>

      {steps === 0 && <p>E timpul pentru miscare</p>}

      {steps > 0 && steps < 1000 && <p>Continua miscarea</p>}

      {steps >= 1000 && (
        <p style={{ color: "navy", fontWeight: "bold" }}>
          Ati atins obiectivul zilnic!
        </p>
      )}
       <button onClick={() => setSteps(steps + 1)}>Click Me</button>
   </div >
  )

}

export default App;

