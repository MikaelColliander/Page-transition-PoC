import React from "react";
import { FlowButton, makeStyles, createStyles, Box } from "@sjse/component-library";

interface Props {
  text: string;
}

export const CTA = (props: Props) => {

  const useStyles = makeStyles(() =>
    createStyles({
      wrapper: {
        position: "fixed",
        bottom: 0,
        width: "100%",
      },
    })
  );
  const classes = useStyles();

  return (
    <Box p={2} className={classes.wrapper}>
      <FlowButton fullWidth color="primary">
        {props.text}
      </FlowButton>
    </Box>
  );
};

export default CTA;
