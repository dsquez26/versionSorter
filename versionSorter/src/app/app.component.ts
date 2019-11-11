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

  parseVersion(version: string): number[] | null {
    const parts = version.split('.')
    if (parts.length > 3) return null;
    if (!parts.every(this.isNumber)) return null 
    const numParts = parts.map(x => Number(x))         
    return numParts;
  }

  compareVersion(version1: number[], version2: number[]): boolean {
    const [a1, a2, a3] = version1;
    const [b1, b2, b3] = version2;
    if (a1 > b1) return true;
    if (a1 < b1) return false;
    if (a2 > b2) return true;
    if (a2 < b2) return false;
    if (a3 > b3) return true;
    if (a3 < b3) return false;
    return true;
  }

  filterData(inputVersion: string): { name: string; version: string}[] {
    const parsedVersion = this.parseVersion(inputVersion)
    if (parsedVersion === null)
    return null;
    const filteredVersion = this.data.filter(obj => this.compareVersion(this.parseVersion(obj.version), parsedVersion))
    return filteredVersion;
  }

  onChangeVersion(event) {
    console.log(this.filterData(event.target.value))
  }

}
