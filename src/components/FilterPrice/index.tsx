import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './FilterPrice.module.scss';
import { TypeContext } from '../../context/TypeProvider';

function valuetext(value: number) {
  return `$ ${value}`;
}

export default function FilterPrice() {
  const { setPriceMax, setPriceMin } = useContext(TypeContext);
  const [value, setValue] = React.useState<number[]>([50, 200]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    const [minValue, maxValue] = newValue as number[];
    setPriceMin(minValue);
    setPriceMax(maxValue);
  };

  return (
    <div className={styles.price}>
      <div className={styles.title}>
        <h2>Price</h2>
        <MdKeyboardArrowUp />
      </div>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
          max={300}
          min={0}
          sx={{
            color: '#000000',
            '& .MuiSlider-thumb': {
              backgroundColor: '#000000',
              '&:hover, &:active': {
                boxShadow: 'none',
              },
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            },
            '& .MuiSlider-valueLabel': {
              fontSize: 12,
              lineHeight: 0,
              color: '#000000',
              background: 'transparent',
              width: 'auto',
            },
            '& .MuiSlider-thumb.Mui-focusVisible': {
              boxShadow: 'none',
            },
            '& .MuiSlider-track': {
              height: 6,
              backgroundColor: '#000000',
              borderRadius: 3,
            },
            '& .MuiSlider-rail': {
              height: 6,
              backgroundColor: 'rgb(181, 171, 150)',
              borderRadius: 3,
            },
          }}
        />
      </Box>
    </div>
  );
}
