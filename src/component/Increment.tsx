import { useState } from "react";

const Increment = () => {
  const [increase, setIncrease] = useState({ plus: 1, minus: 1, fromInput: 0 });

  return (
    <div>
      Increment <br />
      <button
        onClick={() => setIncrease({ ...increase, plus: increase.plus + 1 })}
      >
        Set Increament
      </button>
      <br />
      <button
        onClick={() => setIncrease({ ...increase, minus: increase.minus + 1 })}
      >
        Set Decreament
      </button>
      <form>
        <input
          type="number"
          onChange={(e) =>
            setIncrease({ ...increase, fromInput: Number(e.target.value) })
          }
          value={increase.fromInput}
        />
      </form>
      <br />
      {increase.plus}
      <br />
      {increase.minus}
      <br />
      {increase.fromInput}
      <br />
    </div>
  );
};

export default Increment;
