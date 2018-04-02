import { Component, OnInit } from '@angular/core';
import { NearRourcesService } from './near-rources.service';
import { shop } from '../models/shop';
import { shopref } from '../models/shoppref';
import { PreferredRourcesService } from '../my-preferred-shops/preferred-rources.service';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {
 Shops:shop[]
 shoplike:shopref
  constructor(private nearshops:NearRourcesService,private prefshopservice:PreferredRourcesService) { }

  ngOnInit() {
this.nearshops.getShopsNear().subscribe(shops=>{
  this.Shops=shops['data']
});
  }
  onLikeOrDislike(shoplike:shop,desion:boolean)
  {
    this.shoplike.Shoppart=shoplike;
    this.shoplike.type=desion

    this.prefshopservice.setPreferred(this.shoplike).subscribe(data=>{
     
    },
  error=>{
    
  });
  }

}
