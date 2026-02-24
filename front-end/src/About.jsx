import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/about").then(res => {
      setData(res.data);
    });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>About</h1>
      <img src={data.image} width="200" />
      {data.bio.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}