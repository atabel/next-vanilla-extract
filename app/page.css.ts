import { createVar, fallbackVar, style } from "@vanilla-extract/css";

const backgroundColor = createVar();

export const vars = {backgroundColor};

export const example = style({
    backgroundColor: fallbackVar(backgroundColor, "pink"),
    border: "1px solid red",
    padding: 16,
    borderRadius: 8,
    width: 200,
    height: 200,
})