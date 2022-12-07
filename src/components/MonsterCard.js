import React from "react";
export default function MonsterCard(props) {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center bg-sky-200 py-2 px-6 rounded-lg">
        <h2 className="text-lg font-bold">{props.name.toUpperCase()}</h2>
        <h3 className="text-zinc-500 text-sm">
          {props.species.charAt(0).toUpperCase() + props.species.slice(1)}
        </h3>
      </div>
      <div className="my-4 text-zinc-800">{props.description}</div>
      <div>
        <ul>
          {props.resistances && (
            <li>
              <h2>
                Resistance :{" "}
                {props.resistances.charAt(0).toUpperCase() +
                  props.resistances.slice(1)}
              </h2>{" "}
            </li>
          )}
          {props.weaknesses && (
            <li>
              <h2>
                Weaknesses :{" "}
                {props.weaknesses.charAt(0).toUpperCase() +
                  props.weaknesses.slice(1)}
              </h2>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
