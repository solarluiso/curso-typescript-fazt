// Tipado de props
type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: string;
};

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

// const Button = (props: ButtonProps) => {
//   return <button>{props.text}</button>;
// }

// const Button: React.FC<ButtonProps> = ({ text }) => {
//   return <button>{text}</button>;
// }

function Page() {
  return (
    <div>
      <Button text="click me" />
    </div>
  );
}

export default Page;
