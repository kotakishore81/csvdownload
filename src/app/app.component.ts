import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//npm i ngx-csv
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  downloadCSV() {
    var data = [
      {
        name: 'Test 1',
        age: 13,
        average: 8.2,
        description: 'Kuala Lmpuer, Malaysia',
      },
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        description: 'Jakarta, Indonesia',
      },
      {
        name: 'Test 3',
        age: 10,
        average: 8.2,
        description: 'Bangkok, Thailand',
      },
    ];
    const fileInfo = new ngxCsv(data, "dummydata");

    console.log(fileInfo);
  }
}
