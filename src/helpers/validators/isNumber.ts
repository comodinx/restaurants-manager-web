//
// imports
//
import { isEmpty, isNumber as isNumeric } from "lodash";

//
// constants
//
const regexpNumber = /^[+-]?([0-9]*[.])?[0-9]+$/;

//
// validator
//
export const isNumber = (value: any) => {
  if (isNumeric(value)) {
    return true;
  }
  return !isEmpty(value) && regexpNumber.test(value);
};
