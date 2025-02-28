// Array of numbers
type ButtonProps = {
  padding: [number, number, number?, number?];
};

function Button({}: ButtonProps) {
  return <button>click me</button>;
}

function Page() {
  return (
    <div>
      <Button padding={[10, 20, 10, 20]} />
    </div>
  );
}
