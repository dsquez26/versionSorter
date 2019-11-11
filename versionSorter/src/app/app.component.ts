import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'versionSorter';

  data = [
    {
      "name": "MS Word",
      "version": "13.2.1"
    },
    {
      "name": "MS Excel",
      "version": "13.4.2"
    },
    {
      "name": "AngularJS",
      "version": "1.7.1"
    },
    {
      "name": "Angular",
      "version": "8.1.13"
    },
    {
      "name": "React",
      "version": "0.0.5"
    },
    {
      "name": "Vue.js",
      "version": "2.6"
    },
    {
      "name": "Ember.js",
      "version": "3.10.1"
    },
    {
      "name": "Visual Studio Code",
      "version": "1.39.2"
    },
    {
      "name": "Atom",
      "version": "1.41.0"
    },
    {
      "name": "Sublime",
      "version": "3.12.0"
    },
    {
      "name": "DataGrip",
      "version": "2019.2.6"
    }
  ]

  isNumber(x: string): boolean  {
    return x !== "" && !isNaN(Number(x))
  }

}
