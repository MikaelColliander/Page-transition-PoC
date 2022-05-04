import React from "react";
import GenericPage, { GenericPageProps } from "./GenericPage";
import MyTravel from "./MyTravel";

const Outbound = () => {
  const props: GenericPageProps = {
    title: "Välj återresa",
    routes: [
      {
        linkPath: "/sok-resa/valj-utresa/min-resa/valj-aterresa/min-resa",
        Component: MyTravel,
        name: "Min resa",
      },     
    ]
  };

  return <GenericPage {...props} />;
};

export default Outbound;
