// Recibir un hook en un estado y poder asignarlo

"use client";

import { Dispatch, SetStateAction, useState } from "react";

type ButtonProps = {
  setCount: Dispatch<SetStateAction<number>>;
};

function Button({ setCount }: ButtonProps) {
  return <button onClick={() => setCount(10)}>click here</button>;
}

function Page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button setCount={setCount} />
      <p>{count}</p>
    </div>
  );
}

export default Page;
