import React, { useState } from "react";

type RenderInputProps = {
  onClick: (value: string) => void;
};

export const RenderInput: React.VFC<RenderInputProps> = ({ onClick }) => {
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Enter"
        data-testid="input-area"
      />
      <button
        onClick={() => {
          if (value) {
            onClick(value);
          }
        }}
      >
        ボタン
      </button>
    </div>
  );
};
