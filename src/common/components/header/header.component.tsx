import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderInfo, HeaderQR, HeaderLabels } from "./header.model";
import { NameSection } from "./name-section.component";
import { TitleSection } from "./title-section.component";
import { ContactSection } from "./contact-section.component";

const useStyles = makeStyles(theme => ({}));

interface Props {
  info: HeaderInfo;
  labels: HeaderLabels;
  qr: HeaderQR;
  overlay?: React.ComponentType; // Space for picture of location map
}

export const Header: React.FC<Props> = ({
  info: { name, surname1, surname2, title, titleHighlights, birthdate, location, nationality, contact },
  labels,
  qr,
}) => {
  const classes = useStyles({});

  return (
    <>
      <NameSection name={name} surname1={surname1} surname2={surname2} qr={qr} />
      <br />
      <TitleSection
        title={title}
        titleHighlights={titleHighlights}
        birthdate={birthdate}
        location={location}
        nationality={nationality}
        labels={labels}
      />
      <ContactSection contact={contact} />
    </>
  );
};
