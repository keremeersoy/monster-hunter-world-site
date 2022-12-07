import React from "react";
import axios from "axios";

const baseURL = "https://mhw-db.com/weapons";
export default function Weapons() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <div>
      {data.map((weapon) => (
        <div>
          <div>{weapon.name}</div>
        </div>
      ))}
      {/* {console.log(data)} */}
    </div>
  );
}
