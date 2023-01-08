import React, { useState } from "react";

const Home = () => {
  const [first, setfirst] = useState<string>("main");
  return <div className="text-3xl font-bold underline">{first}</div>;
};

export default Home;
