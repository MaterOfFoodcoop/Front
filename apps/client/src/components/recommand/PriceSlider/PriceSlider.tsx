import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "1,000",
  },
  {
    value: 17,
    label: "2,000",
  },
  {
    value: 33,
    label: "3,000",
  },
  {
    value: 50,
    label: "5,000",
  },
  {
    value: 67,
    label: "10,000",
  },
  {
    value: 83,
    label: "30,000",
  },
  {
    value: 100,
    label: "50,000",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        color="secondary"
      />
    </Box>
  );
}
