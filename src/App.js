import { useState, useEffect } from "react";

function AdviceCountMessage({ count }) {
  return (
    <p>
      Tou have read <strong>{count}</strong> pieces of advice
    </p>
  );
}

function App() {
  let [advice, setAdvice] = useState("");
  let [count, setCount] = useState(0);

  async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <AdviceCountMessage count={count} />
    </div>
  );
}

export default App;
