import { useEffect, useState } from "react";
import styled from "styled-components";

const Fitness = () => {
  const fitness = { category: "Fitness" };
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const data = await fetch("/product/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fitness),
      });
      const json = await data.json();
      setItem(json);
    };
    fetchingData().catch(console.error);
  }, []);
  const arrayData = item.data;
  return (
    <div>
      {arrayData &&
        arrayData.map((e) => (
          <div key={e._id}>
            <img src={e.imageSrc} alt={e.id} />
            <H2>{e.name}</H2>
            <H2>{e.price}</H2>
          </div>
        ))}
    </div>
  );
};
const H2 = styled.h2`
  color: black;
`;

export default Fitness;
