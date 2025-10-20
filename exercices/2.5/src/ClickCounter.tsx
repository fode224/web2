import { useState } from "react";

interface ClickCounterTitle {
  title: string;
  message:string;
}

function ClickCounter({ title,message }: ClickCounterTitle) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {title && <h2>{title}</h2>}
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        {count>=10 && <p>{message}</p>}
      </button>
    </div>
  );
}

export default ClickCounter;
