import React from "react";

type FrameworkListProps = {
  data?:
    | {
        id?: number;
        item?: string;
      }[];
};
export const FrameworkList: React.VFC<FrameworkListProps> = ({ data }) => {
  return !data ? (
    <h1>データがありません</h1>
  ) : (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};
