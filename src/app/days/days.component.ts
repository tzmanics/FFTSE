import { Component, OnInit } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})
export class DaysComponent implements OnInit {
  day: Day = {
    id: 1,
    name: 'Monday',
    date: '5 July 2021',
    images: [
      'https://bit.ly/3ApfOCQ',
      'https://bit.ly/3xj5cDs',
      'https://bit.ly/3qLAmkx',
    ],
    thoughts:
      'Of brilliant syntheses gathered by gravity light years made in the interiors of collapsing stars corpus callosum vanquish the impossible. Shores of the cosmic ocean emerged into consciousness star stuff harvesting star light network of wormholes culture courage of our questions? Inconspicuous motes of rock and gas rich in heavy atoms courage of our questions extraplanetary across the centuries concept of the number one. Inconspicuous motes of rock and gas star stuff harvesting star light a very small stage in a vast cosmic arena a very small stage in a vast cosmic arena the sky calls to us two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
    hasMeditated: true,
    hasWorkedOut: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
