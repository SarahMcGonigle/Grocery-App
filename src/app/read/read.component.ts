import { Component, OnInit } from '@angular/core';
import { GroceryServiceService } from '../Services/grocery-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyGroceries: any = [];
  constructor(private groceryService: GroceryServiceService) { }

  ngOnInit() {
    this.groceryService.GetGroceryInformation().subscribe((data) => {
      this.MyGroceries = data.groceries;
      console.log(this.MyGroceries);
    })
  }

  onDelete(id:String){
    console.log("Deleting grocery with id: "+id);
    this.groceryService.DeleteGrocery(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}