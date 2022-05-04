import React, { useRef, useState } from "react";
import { StationPicker } from "@sjse/component-library";

const stations = [
  {
    name: "Stockaryd",
    synonyms: [],
    frequentLocation: false,
    frequentLocationIndex: -1,
  },
  {
    name: "Stockholm Central",
    synonyms: [],
    frequentLocation: true,
    frequentLocationIndex: 0,
  },
  {
    name: "Stockholm Södra",
    synonyms: [],
    frequentLocation: true,
    frequentLocationIndex: 0,
  },
  {
    name: "Största Bästa",
    synonyms: [],
    frequentLocation: true,
    frequentLocationIndex: 0,
  },
  {
    name: "Stora Levene",
    synonyms: [],
    frequentLocation: true,
    frequentLocationIndex: 0,
  },
  {
    name: "Markaryd",
    synonyms: [],
    frequentLocation: true,
    frequentLocationIndex: 0,
  },
];

const Stations = () => {
  const [value, setValue] = useState("");

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const ref = useRef<HTMLInputElement | undefined>();

  return (
    <StationPicker
      label="Iam a label"
      errorMessage={""}
      id="station"
      inputRef={ref}
      stations={stations}
      onChange={onChange}
      placeholder="Iam a placeholder"
      value={value}
      ariaLabel="Iam a aria-label"
    />
  );
};

export default Stations;
