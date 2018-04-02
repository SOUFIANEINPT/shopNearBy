import { Component, OnInit } from '@angular/core';
import { shop } from '../models/shop';
import { shopref } from '../models/shoppref';
import { PreferredRourcesService } from './preferred-rources.service';

@Component({
  selector: 'app-my-preferred-shops',
  templateUrl: './my-preferred-shops.component.html',
  styleUrls: ['./my-preferred-shops.component.css']
})
export class MyPreferredShopsComponent implements OnInit {
  Shoprefs:shopref[]
  constructor(private prefshopservice:PreferredRourcesService) { }

  ngOnInit() {
this.prefshopservice.getPreferred().subscribe(shops=>{
  this.Shoprefs=shops['data'];
});
  }
  

}
