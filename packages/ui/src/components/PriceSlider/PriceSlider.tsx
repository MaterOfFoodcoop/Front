import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

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

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: "#ffffff",
        },
        rail: {
          color: "#f2f2f2",
        },
        track: {
          color: "#ffd600",
        },
        markLabel: {
          color: "#c9c9c9",
          margin: "10px 0px",
          fontSize: "18px",
          fontFamily: "nanumSquareNeo",
        },
        markLabelActive: {
          color: "#ffd600",
        },
      },
    },
  },
});

export default function DiscreteSliderValues() {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (typeof newValue === "number") {
      setSelectedValue(newValue);
    }
  };

  function valuetext(value: number) {
    return `${value}`;
  }

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      <ThemeProvider theme={theme}>
        <PriceSlider
          onChange={handleChange}
          aria-label="Restricted values"
          defaultValue={1}
          getAriaValueText={valuetext}
          step={null}
          marks={marks}
          max={7}
          min={1}
        />
      </ThemeProvider>
    </Box>
  );
}

const PriceSlider = styled(Slider)`
  margin-top: 10.4rem;
  margin-bottom: 8.4rem;

  font-size: 1.125rem;
  height: 0.8rem;
`;
