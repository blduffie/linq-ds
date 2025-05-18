import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TaskTamer';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'plus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/plus-sign.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'trash',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/trash.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'complete',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/complete.svg')
    );
  }
}
