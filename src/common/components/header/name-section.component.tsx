import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { HeaderInfo, HeaderQR } from "./header.model";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const nameBoldFont: CSSProperties = {
  fontFamily: "Bebas Neue",
  lineHeight: 1,
};

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateAreas: `
      "name name"
      "surname1 qr"
      "surname2 qr"
    `,
    gridColumnGap: theme.spacing(1),
    justifyContent: "start",
    alignContent: "center",
  },
  name: {
    gridArea: "name",
    ...nameBoldFont,
  },
  surname1: {
    gridArea: "surname1",
    ...nameBoldFont,
  },
  surname2: {
    gridArea: "surname2",
    ...nameBoldFont,
  },
  qr: {
    gridArea: "qr",
    fill: theme.palette.text.primary,
    justifySelf: "end",
    alignSelf: "end",
    height: "2.7rem",
    marginBottom: theme.spacing(0.75),
    [theme.breakpoints.up("sm")]: {
      height: "4.9rem",
      marginBottom: theme.spacing(1.25),
    },
    [theme.breakpoints.up("md")]: {
      height: "6rem",
      marginBottom: theme.spacing(1.5),
    },
    [theme.breakpoints.up("lg")]: {
      height: "7.4rem",
      marginBottom: theme.spacing(1.75),
    },
  },
}));

type Props = Pick<HeaderInfo, "name" | "surname1" | "surname2"> & { qr: HeaderQR; className?: string };

export const NameSection: React.FC<Props> = ({ name, surname1, surname2, qr, className }) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.container, className)}>
      <Typography variant="h2" color="primary" classes={{ root: classes.name }}>
        {name}
      </Typography>
      <Typography variant="h2" classes={{ root: classes.surname1 }}>
        {surname1}
      </Typography>
      <Typography variant="h2" classes={{ root: classes.surname2 }}>
        {surname2}
      </Typography>
      <qr.Svg className={classes.qr} />
    </div>
  );
};
