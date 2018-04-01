import { Component, OnInit } from '@angular/core';
import { NearRourcesService } from './near-rources.service';
import { shop } from '../models/shop';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {
 Shops:shop[]
  constructor(private nearshops:NearRourcesService) { }

  ngOnInit() {
this.nearshops.getShopsNear().subscribe(shops=>{
  this.Shops=shops
});
  }

}
