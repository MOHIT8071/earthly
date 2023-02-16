import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
    constructor(private service: OrderDetailsService) { }
    productData:any;
    ngOnInit(): void{
      this.productData=this.service.productDetail;
    }
}
