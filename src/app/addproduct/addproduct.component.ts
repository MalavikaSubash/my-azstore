import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;

  constructor(private productlist: ProductlistService) { }

  ngOnInit() {
      this.myForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5), Validators.pattern(/[a-z]/), Validators.pattern(/[A-Z]/)]),
        price: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
        image: new FormControl('', [Validators.required, Validators.maxLength(500)]),
        description: new FormControl(Validators.required),
        isAvailable: new FormControl('', [ Validators.required, Validators.pattern(/[true|false]/)])
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    if(this.myForm.valid){
      this.productlist.add(this.myForm.value);
    } else {
      alert('Invalid entry !');
    }
  }
}
