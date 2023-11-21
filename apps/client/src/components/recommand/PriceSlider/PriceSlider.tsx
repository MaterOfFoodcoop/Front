import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styled from 'styled-components';

const marks = [
  {
    value: 1,
    label: "1,000",
  },
  {
    value: 2,
    label: "2,000",
  },
  {
    value: 3,
    label: "3,000",
  },
  {
    value: 4,
    label: "5,000",
  },
  {
    value: 5,
    label: "10,000",
  },
  {
    value: 6,
    label: "30,000",
  },
  {
    value: 7,
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
      <PriceSlider
        aria-label="Restricted values"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        max={7}
        min={1}
      />
    </Box>
  );
}

const PriceSlider = styled(Slider)`
  .MuiSlider-thumb {
    color: white;
  }
  .MuiSlider-rail {
    color: #f2f2f2;
  }
  .MuiSlider-track {
    color: #ffd600;
  }
  color: #a0a0a0;

`