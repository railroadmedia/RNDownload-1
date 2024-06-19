import React, { ReactElement, forwardRef, useImperativeHandle } from 'react';
import type { ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ICircularProgressBar {
  size: number;
  strokeWidth?: number;
  children?: ReactElement;
  style?: ViewStyle;
}

const CircularProgressBar = forwardRef<
  { updateProgress: (p: number) => void },
  ICircularProgressBar
>((props, ref) => {
  const { size = 20, strokeWidth = 1.82, style, children } = props;
  const [percentage, setPercentage] = React.useState<number>(0);
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;

  useImperativeHandle(ref, () => ({
    updateProgress: (p: number) => {
      setPercentage(p);
    },
  }));

  return (
    <Svg width={size} height={size} style={style}>
      {children}
      <Circle
        stroke='transparent'
        fill='none'
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <Circle
        stroke='#FFAE00'
        fill='none'
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circum} ${circum}`}
        strokeDashoffset={radius * Math.PI * 2 * (1 - percentage)}
        strokeLinecap='round'
        transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
});

export default CircularProgressBar;
