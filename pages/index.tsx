import React, { useState } from "react";

const Home = () => {
  const [first, setfirst] = useState("hello world");
  return <div className="text-3xl font-bold underline">{first}</div>;
};

export default Home;
