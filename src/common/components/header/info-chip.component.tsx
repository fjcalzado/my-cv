import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    fontFamily: "Novecento Normal",
  },
  content: {
    fontFamily: "Novecento Bold",
  },
}));

interface Props {
  label: string;
  className?: string;
}

export const InfoChip: React.FC<Props> = ({ label, className, children }) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.container, className)}>
      <Typography color="primary" classes={{ root: classes.label }}>
        {label.toUpperCase()}
      </Typography>
      <Typography classes={{ root: classes.content }}>
        {typeof children === "string" ? children.toUpperCase() : children}
      </Typography>
    </div>
  );
};
