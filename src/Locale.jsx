import React from "react";
import { useIntl } from "react-intl";

const Locale = () => {
  const intl = useIntl();

  return <div>{`Current locale: ${intl.locale}`}</div>;
};

export default Locale;
