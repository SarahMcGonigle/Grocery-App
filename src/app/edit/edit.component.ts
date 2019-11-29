import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {GroceryServiceService} from '../Services/grocery-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
grocery:any=[];
  constructor(private groceryService:GroceryServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.groceryService.GetGrocery(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.grocery = data;
          console.log(this.grocery);
      }
    );

  }
  onEditGrocery(form:NgForm){
    console.log(form.value.name);
    this.groceryService.UpdateGrocery(this.grocery._id, form.value.name,
      form.value.price, form.value.category, form.value.amount).subscribe();
  }
}