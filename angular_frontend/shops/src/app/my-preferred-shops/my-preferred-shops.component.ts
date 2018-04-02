import { Component, OnInit } from '@angular/core';
import { shop } from '../models/shop';
import { shopref } from '../models/shoppref';
import { PreferredRourcesService } from './preferred-rources.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-my-preferred-shops',
  templateUrl: './my-preferred-shops.component.html',
  styleUrls: ['./my-preferred-shops.component.css']
})
export class MyPreferredShopsComponent implements OnInit {
  Shoprefs:shopref[]
  constructor(private prefshopservice:PreferredRourcesService,private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.prefshopservice.getPreferred().subscribe(shops=>{
      this.spinnerService.hide();
    this.Shoprefs=shops['data'];
},error=>{
  this.spinnerService.hide();
});
  }
  

}
