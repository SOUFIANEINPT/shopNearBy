import { Component, OnInit,Input} from '@angular/core';
import { shopref } from '../models/shoppref';

@Component({
  selector: 'app-shopcard',
  templateUrl: './shopcard.component.html',
  styleUrls: ['./shopcard.component.css']
})
export class ShopcardComponent implements OnInit {

  constructor() { }
  @Input('shopping-cart') shoppingCart:shopref;
  ngOnInit() {
  }

}
