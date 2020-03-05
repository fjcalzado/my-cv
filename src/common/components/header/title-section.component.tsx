import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { StripesSpacer } from "../stripes-spacer";
import { HeaderInfo, HeaderLabels, HeaderOverlay } from "./header.model";
import { InfoChip } from "./info-chip.component";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateAreas: `
      "title title title title"
      "separator separator separator separator"
      "resume resume . ."
      "birthdate nationality location ."
    `,
    gridColumnGap: theme.spacing(4),
    justifyContent: "start",
    alignItems: "center",
  },
  title: {
    gridArea: "title",
    fontFamily: "Sofia Pro Light",
    wordBreak: "break-word",
  },
  hightlight: {
    color: theme.palette.primary.main,
  },
  separator: {
    gridArea: "separator",
    margin: `${theme.spacing(1)}px 0`,
  },
  resume: {
    gridArea: "resume",
    fontFamily: "Novecento Bold",
  },
  birthdate: {
    gridArea: "birthdate",
  },
  nationality: {
    gridArea: "nationality",
  },
  location: {
    gridArea: "location",
  },
  overlay: {
    gridArea: "overlay",
    color: theme.palette.secondary.main,
    "& circle": {
      fill: theme.palette.primary.main,
    },
    position: "absolute",
    right: theme.spacing(4),
    top: "5rem",
    height: "7rem",
    [theme.breakpoints.up("sm")]: {
      height: "8rem",
    },
    [theme.breakpoints.up("md")]: {
      height: "9rem",
    },
    [theme.breakpoints.up("lg")]: {
      height: "10rem",
    },
  },
}));

type Props = Pick<HeaderInfo, "title" | "titleHighlights" | "birthdate" | "nationality" | "location"> & {
  labels: HeaderLabels;
  Overlay?: HeaderOverlay;
  className?: string;
};

export const TitleSection: React.FC<Props> = ({
  title,
  titleHighlights = [],
  birthdate,
  nationality,
  location,
  labels,
  Overlay,
  className,
}) => {
  const classes = useStyles({});

  const titleFormatted: React.ReactNode = title
    .split(" ")
    .map((w, i) =>
      titleHighlights.includes(w) ? <span key={i} className={classes.hightlight}>{`${w} `}</span> : `${w} `
    );

  return (
    <div className={clsx(classes.container, className)}>
      <Typography variant="h4" classes={{ root: classes.title }}>
        {titleFormatted}
      </Typography>
      <StripesSpacer className={classes.separator} />
      <Typography variant="h5" color="secondary" classes={{ root: classes.resume }}>
        {labels.resume?.toUpperCase()}
      </Typography>
      <InfoChip label={labels.birthdate} className={classes.birthdate}>
        {birthdate}
      </InfoChip>
      <InfoChip label={labels.nationality} className={classes.nationality}>
        {nationality}
      </InfoChip>
      <InfoChip label={labels.location} className={classes.location}>
        {location}
      </InfoChip>
      {Overlay ? <Overlay className={classes.overlay} /> : null}
    </div>
  );
};
