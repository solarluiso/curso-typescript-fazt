// pasar valores opcionales como props

"use client";

type ButtonProps = {
  title?: string;
  count?: number;
};

function Button({ title = "click here", count = 0 }: ButtonProps) {
  return (
    <button>
      {title} {count}
    </button>
  );
}

function Page() {
  return (
    <div>
      <Button />
      <Button title="click there" />
      <Button count={10} />
      <Button title="click everywhere" count={20} />
    </div>
  );
}

export default Page;
