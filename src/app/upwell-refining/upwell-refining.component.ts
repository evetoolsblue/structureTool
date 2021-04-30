import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upwell-refining',
  templateUrl: './upwell-refining.component.html',
  styleUrls: ['./upwell-refining.component.css']
})
export class UpwellRefiningComponent implements OnInit {
  rigValue: string;
  structure: string;
  security: string;
  rigs: [string, string, string];
  structures: [string, string, string];
  securities: [string, string, string];
  reprocessingSL: [number, number, number, number, number, number];
  IceOreSL: [number, number, number, number, number, number];

  constructor() {
    this.rigs = ["none", "T1", "T2"];
    this.structures = ["none", "tatara", "athanor"];
    this.securities = ["high sec", "low sec", "null sec"];
    this.rigValue = "none";
    this.structure = "none";
    this.security = "high sec";
    this.reprocessingSL = [0, 1, 2, 3, 4, 5];
    this.IceOreSL = [0, 1, 2, 3, 4, 5];
  }

  ngOnInit(): void {



  }
  fillData() {

  }

}
