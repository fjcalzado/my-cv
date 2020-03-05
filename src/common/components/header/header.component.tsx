import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { StripesSpacer } from "../stripes-spacer";
import { HeaderInfo, HeaderQR, HeaderLabels, HeaderOverlay } from "./header.model";
import { NameSection } from "./name-section.component";
import { TitleSection } from "./title-section.component";
import { ContactSection } from "./contact-section.component";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateAreas: `
      "name separator title"
      "contact contact contact"
    `,
    gridColumnGap: theme.spacing(4),
    gridRowGap: theme.spacing(2),
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  name: {
    gridArea: "name",
  },
  separator: {
    gridArea: "separator",
  },
  title: {
    gridArea: "title",
  },
  contact: {
    gridArea: "contact",
  },
}));

interface Props {
  info: HeaderInfo;
  labels: HeaderLabels;
  qr: HeaderQR;
  Overlay?: HeaderOverlay; // Space for picture or location map
}

export const Header: React.FC<Props> = ({
  info: { name, surname1, surname2, title, titleHighlights, birthdate, location, nationality, contact },
  labels,
  qr,
  Overlay,
}) => {
  const classes = useStyles({});

  return (
    <Paper className={classes.container} elevation={3} square={true}>
      <NameSection className={classes.name} name={name} surname1={surname1} surname2={surname2} qr={qr} />
      <StripesSpacer className={classes.separator} mode="vertical" />
      <TitleSection
        className={classes.title}
        title={title}
        titleHighlights={titleHighlights}
        birthdate={birthdate}
        location={location}
        nationality={nationality}
        labels={labels}
        Overlay={Overlay}
      />
      <ContactSection className={classes.contact} contact={contact} />
    </Paper>
  );
};
