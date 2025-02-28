let title = "Hello World";

function Button() {
  return <button>{title}</button>;
}

export default function Home() {
  return (
    <div>
      <Button />
    </div>
  );
}
