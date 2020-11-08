import {Injectable} from '@angular/core';
import {Alert, AlertType} from '../../models/alert';
import {Queue} from '../../models/queue';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertLifeTimeInSeconds = 5;
  secondsInMillis = 1000;

  private limitOfAlerts = 5;
  private isLimited = true;

  private alerts: Queue<Alert> = new Queue<Alert>();

  constructor() {
  }

  public getAlerts(): Alert[] {
    return this.alerts.values;
  }

  public closeOldestAlert(): void {
    this.alerts.dequeue();
  }

  public createSuccessAlert(message: string): void {
    const alert = new Alert(message, AlertType.SUCCESS);
    this.createAlert(alert);
  }

  public createInfoAlert(message: string): void {
    const alert = new Alert(message, AlertType.INFO);
    this.createAlert(alert);
  }

  public createWarningAlert(message: string): void {
    const alert = new Alert(message, AlertType.WARNING);
    this.createAlert(alert);
  }

  public createErrorAlert(message: string): void {
    const alert = new Alert(message, AlertType.DANGER);
    this.createAlert(alert);
  }

  private createAlert(alert: Alert): void {
    if (this.isLimited && this.alerts.size === this.limitOfAlerts) {
      this.closeOldestAlert();
    }
    this.alerts.enqueue(alert);
    interval(this.alertLifeTimeInSeconds * this.secondsInMillis)
      .pipe(take(1))
      .subscribe({
        next: (_) => this.closeOldestAlert(),
      });
  }
}
