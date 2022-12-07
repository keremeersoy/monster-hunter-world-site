import React from "react";
import axios from "axios";
import MonsterCard from "../components/MonsterCard";

const baseURL = "https://mhw-db.com/monsters"; //https://fakestoreapi.com/products

export default function Monsters() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <div className="flex items-center justify-center m-20">
      <div className="grid grid-cols-3 gap-x-40 gap-y-20">
        {data.map((item) => (
          <MonsterCard
            name={item.name}
            type={item.type}
            description={item.description}
            species={item.species}
            resistances={item.resistances[0]?.element}
            weaknesses={item.weaknesses[0]?.element}
          />
        ))}
      </div>
    </div>
  );
}

{
  /* {data.map((item) => (
        <div>
          <h2 className="font-bold">{item.name}</h2>
          <p className="">{item.description} </p>
        </div>
      ))} */
}
