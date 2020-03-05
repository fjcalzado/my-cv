import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiLinkedinBox, mdiGithubCircle, mdiGmail, mdiCellphoneAndroid } from "@mdi/js";
import clsx from "clsx";
import { HeaderInfo } from "./header.model";
import { ContactChip } from "./contact-chip.component";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridColumnGap: theme.spacing(1),
    justifyContent: "space-between",
  },
}));

type Props = Pick<HeaderInfo, "contact"> & { className?: string };

export const ContactSection: React.FC<Props> = ({
  contact: { email, phone, github, linkedin },
  className,
}) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.container, className)}>
      <ContactChip Icon={<Icon path={mdiLinkedinBox} color="currentColor" />} link={linkedin.link}>
        {linkedin.label}
      </ContactChip>
      <ContactChip Icon={<Icon path={mdiGithubCircle} color="currentColor" />} link={github.link}>
        {github.label}
      </ContactChip>
      <ContactChip Icon={<Icon path={mdiGmail} color="currentColor" />} link={email.link}>
        {email.label}
      </ContactChip>
      <ContactChip Icon={<Icon path={mdiCellphoneAndroid} color="currentColor" />} link={phone.link}>
        {phone.label}
      </ContactChip>
    </div>
  );
};
