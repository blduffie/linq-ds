import { Component, Inject, Input } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertType } from '../../services/snack-bar.service';

export class MsgData {
  constructor(public type: string, public message: string) {}
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() data: MsgData;
  alert = AlertType;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) response: MsgData,
    public snackBarRef: MatSnackBarRef<MessageComponent>
  ) {
    if (response) {
      this.data = response;
    }
  }

  close(): void {
    this.snackBarRef.dismiss();
  }
}
