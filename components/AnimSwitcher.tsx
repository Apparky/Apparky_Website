import React, { useState } from "react";
import { animations } from "../lib/animations";

export default function AnimSwitcher({
  anims,
  setAnimation,
 
  startIndex
}: {
  setAnimation: (value: any) => void;
  setExitBeforeEnter:(value:boolean)=>void;
  startIndex: number;
  anims: typeof animations;
}) {
  const [animValue, setAnimValue] = useState(startIndex);
  

  const handleAnimChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const v = Number(e.currentTarget.value);
    setAnimValue(v);
    setAnimation(anims[v]);
  };

  

  return (
    <div className="anim-switch">
  {/*    <select value={animValue} onChange={handleAnimChange}>
        {anims.map((animation, index) => {
          return (
            <option value={index} key={animation.name}>
              {animation.name}
            </option>
          );
        })}
      </select> */}
    { /* <label className="exit-box">
        
      </label>  */}
    </div>
  );
}