import { Component, OnInit } from '@angular/core';
import {RepEffSL} from '../models/upwell';

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
  tableData: RepEffSL[];
  displayedColumns: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  displayedRows: string[] = ['0', '1', '2', '3', '4', '5'];
  dataSource: RepEffSL[];
  constructor() {
    this.rigs = ["none", "T1", "T2"];
    this.structures = ["none", "tatara", "athanor"];
    this.securities = ["high sec", "low sec", "null sec"];
    this.rigValue = "none";
    this.structure = "none";
    this.security = "high sec";
    this.reprocessingSL = [0, 1, 2, 3, 4, 5];
    this.IceOreSL = [0, 1, 2, 3, 4, 5];
    this.tableData = [{a: 23, b: 1, c: 2, d: 3, e: 4, f: 5},
                      {a: 24, b: 11, c: 22, d: 33, e: 44, f: 55}] ;
    this.dataSource = this.tableData;
  }

  ngOnInit(): void {

    this.dataSource = this.tableData;

  }
  fillData(): void {
    this.dataSource = [{a: 23, b: 1, c: 2, d: 3, e: 4, f: 5},
      {a: 24, b: 11, c: 22, d: 33, e: 44, f: 55},
      {a: 44, b: 5.5, c: 6.6, d: 77, e: 88, f: 99}] ;
  }

}
