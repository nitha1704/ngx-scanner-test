import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  scanResult:string = '';

  handleScan(value: string) {
    alert(value);
    console.log(value);
    this.scanResult = value;
  }
}
