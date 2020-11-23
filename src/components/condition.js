import React, { useState } from "react";

function Condition() {
  const [Logger, setLogger] = useState(false);
  return Logger ? <h1> You are logged in </h1> : <h1> Is logged out </h1>;
}

export default Condition;
