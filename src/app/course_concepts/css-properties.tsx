type ButtonProps = {
  style: React.CSSProperties;
};

function Button({ style }: ButtonProps) {
  return <button style={style}>click me!</button>;
}

function Page() {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          fontSize: "1.5em",
          padding: "1em",
          borderRadius: "0.5em",
        }}
      />
    </div>
  );
}

export default Page;
