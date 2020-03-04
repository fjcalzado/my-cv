import React from "react";
import Typography from "@material-ui/core/Typography";
import { StripesSpacer } from "../../common/components/stripes-spacer";
import { Header } from "../../common/components/header";
import { headerInfo, qr, headerLabels } from "../../data/en.mock";

export const Overview: React.FC = () => {
  return <Header info={headerInfo} qr={qr} labels={headerLabels} />;
};
