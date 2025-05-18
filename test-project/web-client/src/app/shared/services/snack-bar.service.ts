import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from '../components/message/message.component';

export class MsgData {
  constructor(public type: string, public message: string) {}
}

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Error = 'error',
}

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private readonly _DEFAULT_DURATION = 5_000;

  constructor(private snackBar: MatSnackBar) {}

  /**
   * Show a snackbar message with green background
   * @param message
   */
  public success(message: string): void {
    this.showMessage(
      new MsgData(AlertType.Success, message),
      this._DEFAULT_DURATION,
      'snackbar-green'
    );
  }

  /**
   * Show a snackbar message with red background - will ONLY dismiss on user action
   * @param message
   */
  public error(message: string): void {
    this.showMessage(new MsgData(AlertType.Error, message), 0, 'snackbar-red');
  }

  /**
   * Show a snackbar message with a gray background
   * @param message
   */
  public info(message: string): void {
    this.showMessage(new MsgData(AlertType.Info, message), this._DEFAULT_DURATION, 'snackbar-info');
  }

  /**
   * Show a snackbar message with a yellow background
   * @param message
   */
  public warning(message: string): void {
    this.showMessage(
      new MsgData(AlertType.Warning, message),
      this._DEFAULT_DURATION,
      'snackbar-warning'
    );
  }

  /**
   * Generic method to open a snackbar
   * @param messageData
   * @param duration
   * @private
   */
  private showMessage(messageData: MsgData, duration = this._DEFAULT_DURATION, panelclass: string) {
    this.snackBar.openFromComponent(MessageComponent, {
      data: messageData,
      duration: duration,
      panelClass: [panelclass],
    });
  }
}
