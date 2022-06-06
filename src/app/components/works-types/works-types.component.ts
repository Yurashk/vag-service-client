import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-types',
  templateUrl: './works-types.component.html',
  styleUrls: ['./works-types.component.css']
})
export class WorksTypesComponent implements OnInit {
  panelOpenState = true;
  displayedColumns: string[] = ['name', 'speed', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
const ELEMENT_DATA: ChipTuningModel[] = [
  { name: 'Eco тюнинг', speed: '-', symbol: '250$'},
  { name: 'Stage 1', speed: 'DSG/S-tronic*', symbol: '300$'},
  { name: 'Stage 2', speed: 'DSG/S-tronic*', symbol: '400$'},
  { name: 'Stage 1', speed: 'до 150к.с', symbol: '350$'},
  { name: 'Stage 1', speed: 'від 151к.с до 250к.с', symbol: '400$'},
  { name: 'Stage 1', speed: 'від 251к.с до 350к.с', symbol: '450$'},
  { name: 'Stage 1', speed: 'від 351 к.с до 450к.с', symbol: '550$'},
  { name: 'Stage 1', speed: 'від 451 к.с', symbol: '700$'},
  { name: 'Stage 1', speed: 'Комерційні авто', symbol: '300$'},
  { name: 'Stage 2, 3, 4', speed: 'Дзвоніть', symbol: '-'},
];
export interface ChipTuningModel {
  name: string;
  speed: string;
  symbol: string;
}
