import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:OrderDetailsService){ }
  productData:any;

  ngOnInit(): void{
    this.productData = this.service.productDetail;
  }

}