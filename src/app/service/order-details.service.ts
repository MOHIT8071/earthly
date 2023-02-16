import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  productDetails: any;

  constructor() { }



  // productDetails
  productDetail = [
    {
     id:1,
  prductName:"Sustainability Starter Kit",
  productDetails:"This starter kit is all you need to start the revolution.",
  productPrice:700,
  productImg:"https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_1735,h_975,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp"
  },
  {
     id:2,
  prductName:"Sustainability Starter Kit",
  productDetails:"This starter kit is all you need to start the revolution.",
  productPrice:700,
  productImg:"https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_1735,h_975,al_c,q_85,usm_0.66_1.00_0.01/ead566_14e75a560cbc411ead722de92eaf8189~mv2.webp"
  },
  {
     id:3,
  prductName:"Sustainability Starter Kit",
  productDetails:"This starter kit is all you need to start the revolution.",
  productPrice:700,
  productImg:"https://static.wixstatic.com/media/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.jpg/v1/fill/w_1735,h_975,al_c,q_85,usm_0.66_1.00_0.01/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.webp"
  },{
     id:4,
  prductName:"Sustainability Starter Kit",
  productDetails:"This starter kit is all you need to start the revolution.",
  productPrice:700,
  productImg:"https://static.wixstatic.com/media/ead566_32221ce4c71f4cccb618412c8801effe~mv2.jpg/v1/fill/w_1735,h_975,al_c,q_85,usm_0.66_1.00_0.01/ead566_32221ce4c71f4cccb618412c8801effe~mv2.webp"
  },{
     id:5,
  prductName:"Sustainability Starter Kit",
  productDetails:"This starter kit is all you need to start the revolution.",
  productPrice:700,
  productImg:"https://static.wixstatic.com/media/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.jpg/v1/fill/w_1735,h_975,al_c,q_85,usm_0.66_1.00_0.01/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.webp"
  }
  ]

}
