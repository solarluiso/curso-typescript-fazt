"use client";

type ButtonProps = {
  children: React.JSX.Element | React.JSX.Element[] | string;
};

function Button({ children }: ButtonProps) {
  return <button>click me</button>;
}

function Page() {
  return (
    <div>
      <Button>
        <span>click me</span>
        <div>dlk</div>
        <p>sfg</p>
      </Button>
    </div>
  );
}

export default Page;
