import React from "react";

export default function MonsterCard() {
  return (
    <div className="w-full bg-indigo-600">
      <div className="flex justify-between mx-20 p-5 items-center">
        <h1 className="text-white font-extrabold text-2xl font-zendots">
          <a href="/">MONSTER HUNTER WORLD</a>
        </h1>

        <div>
          <ul className="flex gap-10">
            <li className="text-white text-lg hover:text-teal-200">
              <a href="/monsters">Monsters</a>
            </li>
            <li className="text-white text-lg hover:text-teal-200">
              <a href="/weapons">Weapons</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
