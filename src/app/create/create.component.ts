import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { GroceryServiceService } from '../Services/grocery-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private groceryService: GroceryServiceService) { }

  ngOnInit() {
  }
  
  onAddGrocery(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);

    this.groceryService.AddGroceryInformation(form.value.name,
      form.value.price, form.value.category, form.value.amount).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }

}