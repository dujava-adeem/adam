import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  generatedNames: string = "";
  meno = ["Fero", "Jožo", "Adam"];
  priezvisko = ["Dujava", "Škovranko", "Podolský"];
  constructor() { }

  ngOnInit(): void {
  }
  generate() {
    this.generatedNames = this.meno[Math.floor(Math.random() * this.meno.length)] + " " + this.priezvisko[Math.floor(Math.random() * this.priezvisko.length)];
  }
}
