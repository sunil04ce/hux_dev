const Greeting = () => {
  const name = "John";
  const dob = new Date();
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>Your birthday is on {dob.toLocaleDateString()}</p>
    </div>
  );
};

export default Greeting;
