import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { StripesSpacer } from "../stripes-spacer";
import { HeaderInfo, HeaderLabels } from "./header.model";
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
    gridColumnGap: theme.spacing(1),
    justifyContent: "start",
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
}));

type Props = Pick<HeaderInfo, "title" | "titleHighlights" | "birthdate" | "nationality" | "location"> & {
  labels: HeaderLabels;
};

export const TitleSection: React.FC<Props> = ({
  title,
  titleHighlights = [],
  birthdate,
  nationality,
  location,
  labels,
}) => {
  const classes = useStyles({});

  const titleFormatted: React.ReactNode = (
    <span>
      {title
        .split(" ")
        .map(w =>
          titleHighlights.includes(w) ? <span className={classes.hightlight}>{`${w} `}</span> : `${w} `
        )}
    </span>
  );
  console.log([title]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" classes={{ root: classes.title }}>
        {titleFormatted}
      </Typography>
      <StripesSpacer className={classes.separator} />
      <Typography variant="h4" color="secondary" classes={{ root: classes.resume }}>
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
    </div>
  );
};
