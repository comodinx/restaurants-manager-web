import * as restaurants from "./restaurants";
import * as dates from "./dates";
import * as app from "./app";
import * as env from "./env";

const constants: any = {
  ...env,
  restaurants,
  dates,
  app,
};

export default constants;
