import { Component } from '@angular/core';
import { digest } from '@angular/compiler/src/i18n/serializers/xmb';


@Component({
  selector: 'pm-root', // pm- product management
  template: `
  <div> <h1> {{pageTitle}} </h1>
      <pm-products></pm-products>
  </div>
  `
})

export class AppComponent {
  pageTitle = 'Amce Product Management';
}
