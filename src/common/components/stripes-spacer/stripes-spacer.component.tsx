import React from "react";
import { useTheme } from "@material-ui/core/styles";

interface Props {
  mode?: "horizontal" | "vertical";
  size?: number | string;
  thickness?: number;
  separation?: number;
  rotation?: number;
  color?: string;
  className?: string;
}

export const StripesSpacer: React.FC<Props> = props => {
  const theme = useTheme();

  const { mode = "horizontal", rotation = 45, className } = props;
  const size = props.size || theme.spacing(1);
  const thickness = props.thickness || theme.spacing(1 / 5);
  const separation = props.separation || theme.spacing(1 / 5);
  const color = props.color || theme.palette.secondary.light;

  const h = mode === "horizontal";
  const width = h ? "100%" : size;
  const height = h ? size : "100%";
  const patternWidth = thickness + separation;
  const patternHeight = size;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className}>
      <defs>
        <pattern
          id="stripe"
          patternUnits="userSpaceOnUse"
          width={patternWidth}
          height={patternHeight}
          patternTransform={`rotate(${rotation}) `}
        >
          <line
            x1={patternWidth / 2}
            y1={0}
            x2={patternWidth / 2}
            y2={size}
            strokeWidth={thickness}
            stroke={color}
          />
        </pattern>
      </defs>
      <rect fill="url(#stripe)" width={width} height={height} />
    </svg>
  );
};
