import React from "react";
import { Header } from "../../common/components/header";
import { headerInfo, headerLabels, qr, MapSvg } from "../../data/en.mock";

export const Overview: React.FC = () => {
  return (
    <>
      <Header info={headerInfo} qr={qr} labels={headerLabels} Overlay={MapSvg} />
      <MapSvg />
    </>
  );
};
