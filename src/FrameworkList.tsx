import React from "react";

type FrameworkListProps = {
  data:
    | {
        id?: number;
        item?: string;
      }[];
};
export const FrameworkList: React.VFC<FrameworkListProps> = ({ data }) => {
  return data.length === 0 ? (
    <h1>データがありません</h1>
  ) : (
    <div>
      <ul>
        {data.map((item, index) => (
          <div key={index}>
            <li>{item.id}</li>
            <li>{item.item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
