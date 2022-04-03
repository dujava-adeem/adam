import { Component } from '@angular/core';

export class Osoba { // KLASA
  meno: string;
  priezvisko: string;
  firma: string;

  constructor(meno: string, priezvisko: string, firma: string) {
    this.meno = meno;
    this.priezvisko = priezvisko;
    this.firma = firma;
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'auto'; // TEXT
  title1: number = 14; // CISLO
  title99: number = 999; // CISLO
  title2: boolean = false;
  pole: string[] = [ // POLE
    'Oveckin',
    'Tatar',
    'Crosby'
  ];

  vek: number;

  osoby = [
    new Osoba("Stevo", "Onofrej", "asashnknf"),
    new Osoba("Martin", "Onofrej", "asasaaaaaaanf"),
    new Osoba("Marek", "Onofrej", ""),
  ];



  constructor() {
    if (this.title2 === true) {
      this.vek = this.title1;
    } else {
      this.vek = this.title99;
    }
     console.log(this.pole);
    this.pole.forEach( utocnik => console.log(utocnik))
  }




}
