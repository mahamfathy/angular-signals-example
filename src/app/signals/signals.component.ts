import { Component } from '@angular/core';
import { DefaultComponent } from '../default/default.component';

@Component({
  standalone:true,
  selector: 'app-signals',
  imports:[DefaultComponent],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {

}
