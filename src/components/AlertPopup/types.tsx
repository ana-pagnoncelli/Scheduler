export enum AlertColors {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning"
}

export type AlertMessage = {
  text: string;
  type: AlertColors;
};
