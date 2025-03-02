type ButtonProps = {
  userAges: Record<"Alice" | "Bob" | "Jose", number>;
};

function Button({}: ButtonProps) {
  return <button>click me</button>;
}

function Page() {
  return (
    <div>
      <Button
        userAges={{
          Alice: 20,
          Bob: 30,
          Jose: 45,
        }}
      />
    </div>
  );
}

export default Page;
