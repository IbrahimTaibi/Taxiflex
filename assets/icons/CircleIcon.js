import React from 'react';
import Svg, {Circle} from 'react-native-svg';

const CircleIcon = ({
  size = 24,
  innerColor = '#ADD8E6', // Light blue color for the fill
  innerStrokeColor = '#FFFFFF', // White color for the first stroke
  outerStrokeColor = '#ADD8E6', // Light blue color for the second stroke
  strokeWidth = 2,
}) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Circle
      cx="12"
      cy="12"
      r="10" // Radius of the inner circle
      stroke={outerStrokeColor}
      strokeWidth={strokeWidth + 2} // Outer stroke width
      fill="none" // No fill for the outer stroke
    />
    <Circle
      cx="12"
      cy="12"
      r="10" // Radius of the inner circle
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth} // Inner stroke width
      fill={innerColor} // Fill color for the inner circle
    />
  </Svg>
);

export default CircleIcon;
