import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { HeaderInfo, HeaderQR } from "./header.model";

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
  },
  name: {
    gridArea: "name",
    fontFamily: "Bebas Neue",
  },
  surname1: {
    gridArea: "surname1",
    fontFamily: "Bebas Neue",
  },
  surname2: {
    gridArea: "surname2",
    fontFamily: "Bebas Neue",
  },
  qr: {
    gridArea: "qr",
    fill: theme.palette.text.primary,
    height: "100%",
    justifySelf: "end",
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem 0 0.75rem 0",
    },
    padding: "0.4rem 0 0.60rem 0",
  },
}));

type Props = Pick<HeaderInfo, "name" | "surname1" | "surname2"> & { qr: HeaderQR };

export const NameSection: React.FC<Props> = ({ name, surname1, surname2, qr }) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <Typography variant="h2" color="primary" classes={{ root: classes.name }}>
        {name}
      </Typography>
      <Typography variant="h3" classes={{ root: classes.surname1 }}>
        {surname1}
      </Typography>
      <Typography variant="h3" classes={{ root: classes.surname2 }}>
        {surname2}
      </Typography>
      <qr.Svg className={classes.qr} />
    </div>
  );
};
