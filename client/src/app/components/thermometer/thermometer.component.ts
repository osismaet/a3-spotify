import { Component, OnInit, Input } from '@angular/core';
import { Popularity } from 'src/app/data/popularity';

@Component({
    selector: 'app-thermometer',
    templateUrl: './thermometer.component.html',
    styleUrls: ['./thermometer.component.css'],
    standalone: false
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() popularity:number;
  @Input() label:string = 'Popularity';

  constructor() { }

  ngOnInit() {
  }
  get color():string {
    const hue = (this.popularity / 100) * 120;
    return 'hsl(' + hue + ', 70%, 45%)';
  }
}
