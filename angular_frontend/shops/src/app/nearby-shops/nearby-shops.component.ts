import { Component, OnInit } from '@angular/core';
import { NearRourcesService } from './near-rources.service';
import { shop } from '../models/shop';
import { shopref } from '../models/shoppref';
import { PreferredRourcesService } from '../my-preferred-shops/preferred-rources.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {
 Shops:shop[]
 shoplike:shopref;
 ErrorShopVoid="";
  constructor(private nearshops:NearRourcesService,private prefshopservice:PreferredRourcesService
    ,private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
this.nearshops.getShopsNear().subscribe(shops=>{
  this.spinnerService.hide();
  this.Shops=shops['data']
  if(shops['data'].length<=0)
  this.ErrorShopVoid="There is no Shops"

  console.log("data",shops['data'])

},error=>{
  this.ErrorShopVoid="Error"
  this.spinnerService.hide();
});
  }
  onLikeOrDislike(shoplike:shop,desion:boolean,index)
  {
    console.log("data",shoplike)
    this.shoplike={Shoppart:shoplike,type:desion}  
    this.prefshopservice.setPreferred(this.shoplike).subscribe(data=>{
      console.log("data",data)
    this.Shops.splice(index,1);
    console.log("data",this.Shops)
    },
  error=>{
    
  });
  }

}
