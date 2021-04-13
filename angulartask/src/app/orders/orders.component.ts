import { Component, Inject } from '@angular/core';

@Component({

  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  {
  domains = [];
 
  isEditing: boolean = false;


  
  constructor(){
        this.domains = [
    {
      "OrderNumber" : "123",
      "OrderDueDate" : "2020-12-23",
      "BuyerName" : "geetha",
      "CustomerAddress":"hyd",
      "CustomerPhone":"9849256217",
      "OrderTotal":"2400",

      "editable": false
    },
    {
      "OrderNumber" : "124",
      "OrderDueDate" : "2020-12-24",
      "BuyerName" : "megha",
      "CustomerAddress":"xyz",
      "CustomerPhone":"3724333",
      "OrderTotal":"200",

      "editable": false
    },
    {
      "OrderNumber" : "32",
      "OrderDueDate" : "2020-12-24",
      "BuyerName" : "sneha",
      "CustomerAddress":"vizag",
      "CustomerPhone":"12345",
      "OrderTotal":"200",

      "editable": false
    },
    {
      "OrderNumber" : "124",
      "OrderDueDate" : "2020-12-24",
      "BuyerName" : "dhrithi",
      "CustomerAddress":"kompally",
      "CustomerPhone":"8787",
      "OrderTotal":"200",

      "editable": false
    }
  ]

}


addTable() {
  var Btn = confirm(" Are you sure you want to add  a new row");
  if ( Btn == true ) {
  const obj = {
    OrderNumber: '',
    OrderDueDate: '',
    BuyerName: '',
    CustomerAddress:'',
    CustomerPhone:'',
    OrderTotal:'',
    editemailable:''
  }
  this.domains.push(obj)
}
}
deleteRow(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.domains.splice(x, 1 );
  }   
} 
editDomain(domain:any){
  var delBtn = confirm(" Are you sure you want to update the row data");
  if ( delBtn == true ) {
  domain.editable = !domain.editable

  }
}
}

  
  

    
  
  



     


  





  


