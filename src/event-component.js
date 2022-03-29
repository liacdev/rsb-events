function Football() {
  const shoot = () => {
    alert("Great Shot!  This button triggers an onClick event!");
    alert("You need to finish this lesson");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

export default Football;
