import React from "react";
type Props = {
  placeholder?: string;
  value?: string;
};

export default function Search({ placeholder, value }: Props) {
  return (
    <div>
      <input
        data-testid="input-search"
        placeholder={placeholder}
        value={value}
        className="border-2"
        type="text"
      />
    </div>
  );
}
