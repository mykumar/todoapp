import { setValues } from "./taskData";

export const getAndSetValues = (name, options) => dispatch => {
  dispatch(setValues(name, options));
};
