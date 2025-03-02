"use client";

type ButtonProps = {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Click me!</button>;
}

function Page() {
  return (
    <div>
      <Button
        onClick={() => {
          alert("Button clicked!");
        }}
      />
    </div>
  );
}

export default Page;
