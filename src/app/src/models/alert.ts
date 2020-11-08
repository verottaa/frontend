export class Alert {
  message: string;
  type: AlertType;

  constructor(message: string,
              type: AlertType,
  ) {
    this.message = message;
    this.type = type;
  }
}

export enum AlertType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
}
