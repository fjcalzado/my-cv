import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

interface Props {
  mode?: "horizontal" | "vertical";
  size?: number;
  thickness?: number;
  separation?: number;
  rotation?: number;
}

export const SpacerStripes: React.FC<Props> = ({
  mode = "horizontal",
  size = 50,
  thickness = 20,
  separation = 3,
  rotation = 0,
}) => {
  const classes = useStyles({});
  const h = mode === "horizontal";
  const width = h ? "100%" : size;
  const height = h ? size : "100%";
  const patternWidth = thickness + separation; // thickness + separation;
  const patternHeight = size;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <defs>
        <pattern
          id="stripe"
          patternUnits="userSpaceOnUse"
          width={patternWidth}
          height={patternHeight}
          patternTransform={`rotate(${rotation} ${patternWidth / 2} ${patternHeight / 2}) `}
        >
          <line
            x1={patternWidth / 2}
            y1={0}
            x2={patternWidth / 2}
            y2={size}
            stroke-width={thickness}
            stroke="orange"
          />
        </pattern>
      </defs>
      <rect fill="url(#stripe)" width={width} height={height} />
    </svg>
  );
};
