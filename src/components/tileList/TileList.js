import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({listArray}) => {
  return (
    <div>
      {listArray.map((value, index) => {
        return (
          <Tile value={value} key={index} />
              );
      })
      }
    </div>
  );
};
