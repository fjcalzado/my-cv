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
    fontFamily: "Sofia Pro Light",
    color: theme.palette.text.primary,
  },
  avatar: {
    color: theme.palette.primary.main,
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
