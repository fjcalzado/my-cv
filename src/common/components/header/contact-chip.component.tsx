import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  label: {
    ...theme.typography.h6,
    fontFamily: "Sofia Pro Light",
    color: theme.palette.text.primary,
    alignSelf: "baseline",
    lineHeight: "unset",
  },
  avatar: {
    "$root &": {
      color: theme.palette.primary.main,
    },
  },
  outlined: {
    border: "none",
    "&&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

interface Props {
  Icon: React.ReactElement;
  link?: string;
  className?: string;
}

export const ContactChip: React.FC<Props> = ({ Icon, link, className, children }) => {
  const classes = useStyles({});

  return (
    <Chip
      variant="outlined"
      label={children}
      avatar={Icon}
      clickable={true}
      component="a"
      href={link}
      target="_blank"
      rel="noreferer"
      classes={classes}
      className={className}
    />
  );
};
