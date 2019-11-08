import { Component, OnInit } from '@angular/core';
import { ProductDescription } from '../Model/product';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  constructor() { }

 products: Array<ProductDescription> =
 [{
  name: 'Limetone',
  image: `https://rukminim1.flixcart.com/image/800/960/jwzabgw0/watch/c/h/g/ls2821-limestone-original-imafhjcsffujvmhw.jpeg?q=50`,
  price: 500,
  description: 'LS2821 Bleed Blue Day and Date Functioning Steel Strap Adult Boys Analog Watch - For Men',
  imageAlt: 'item1',
  isAvailable: false},


  {
    name: 'Zido',
    image: `https://rukminim1.flixcart.com/image/800/960/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=50`,
    price: 792,
    description: 'Striped Men Polo Neck Multicolor T-Shirt',
    imageAlt: 'item2',
    isAvailable: true},


  {
    name: 'Darzi',
    image: `https://rukminim1.flixcart.com/image/800/960/jmux18w0/top/d/b/w/l-tandul-7991-tandul-original-imaf97t9qudsqnzz.jpeg?q=50`,
    price: 404,
    description: 'Party Bell Sleeve Floral Print Women Multicolor Top',
    imageAlt: 'item3',
    isAvailable: false},

  {
    name: 'Provogue',
    image: `https://rukminim1.flixcart.com/image/800/960/jmf76vk0/shoe/n/f/f/pro-em-aw-1006-9-provogue-brown-original-imaf9bwg3rfksufk.jpeg?q=50`,
    price: 699,
    description: 'Slip On For Men  (Brown)',
    imageAlt: 'item4',
    isAvailable: true},

  {
    name: 'Gloves',
    image: `https://rukminim1.flixcart.com/image/416/416/sport-glove/c/5/h/pbhcxl-left-right-200-pro-biker-10-driving-gloves-half-cut-xl-original-imaecydc8z2ydgxr.jpeg?q=70`,
    price: 299,
    description: 'Probiker Pro Biker Half Cut Gloves Black L Size Driving Gloves  (Black)',
    imageAlt: 'item5',
    isAvailable: false},

    
  {
    name: 'Shampoo',
    image: `https://rukminim1.flixcart.com/image/416/416/jraycnk0/shampoo/z/e/r/1-hair-fall-defense-shampoo-tresemme-original-imafd4fndftzcgne.jpeg?q=70`,
    price: 455,
    description: 'TRESemme Hair Fall Defense Shampoo  (1 L)',
    imageAlt: 'item6',
    isAvailable: false},

  {
    name: 'Fiction Book',
    image: `https://rukminim1.flixcart.com/image/416/416/jndhrbk0/book/4/6/4/the-girl-in-room-105-original-imafa2uy3zx8c7yn.jpeg?q=70`,
    price: 107,
    description: 'The Girl in Room 105  (English, Paperback, Bhagat Chetan)',
    imageAlt: 'item7',
    isAvailable: true},


    {
      name: 'Sofa Set',
      image: `https://rukminim1.flixcart.com/image/416/416/jxkpx8w0/sofa-set/3/h/x/blue-polyester-ssbl311bt101-3-1-1-flipkart-perfect-homes-blue-original-imafhzzazjb8fv5q.jpeg?q=70`,
      price: 46190,
      description: 'Flipkart Perfect Homes Salzburg Fabric 3 + 1 + 1 Blue Sofa Set',
      imageAlt: 'item8',
      isAvailable: false}
]
  ngOnInit() {
  }

}
