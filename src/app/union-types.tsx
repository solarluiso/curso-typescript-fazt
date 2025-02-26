// Union types
type Color = "red" | "blue" | "green";

type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
  backgroundColor?: Color;
};

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function Page() {
  return (
    <div>
      <Button text="click me" color="blue" backgroundColor="red" />
    </div>
  );
}

export default Page;
