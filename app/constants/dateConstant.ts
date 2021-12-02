import moment from "moment";

export const yesterday = moment().add(-1, 'd').format('D/M/Y');
export const lastW = moment().add(-7, 'd')
export const lastM = moment().add(-1, 'M');
export const lastY = moment().add(-1, 'y');