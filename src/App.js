import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setIsTokenAvailable(true);
  });

  return <div className="App">{}</div>;
}

export default App;
