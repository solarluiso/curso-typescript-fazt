"use client";

type ButtonProps = {
  onClick: (text: string) => void;
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={() => onClick("Hello world!")}>Click me!</button>;
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
