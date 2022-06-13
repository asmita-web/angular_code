import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 public filterdata=""
  public datalist:any
  public id;
  public getiddata
  public newarraydata=[]
  public detailpage = false
  // public managepage = true
  constructor(private http:HttpClient,
    private route:Router) { }

  ngOnInit() {

    this.getemployeedata()
    //  this.searchdata()
    // this.route.url === '/homepage/' + encodeURIComponent(this.id)
    // this.getemployeebyid()
    
  }

  getemployeedata(){
    this.http.get('https://retoolapi.dev/GFHqAV/getemployees')
    .subscribe((response)=>{
      this.detailpage = false
      this.datalist = response;
      // this.newarraydata = response;
      this.newarraydata= this.datalist
      this.id = this.datalist.id
      console.log(response);
    })
  }

  getemployeebyid(id){
    this.detailpage = true
    this.route.navigate(['./homepage',id])
    this.http.get('https://retoolapi.dev/H2F0Ui/getemployedetail?id='+id)
    .subscribe((response)=>{
      this.getiddata = response;
      console.log(response)
    })
  }

  backmanagepage(){
    this.detailpage = false
  }
 
  searchdata(){
    console.log("this.searchdata")
  console.log(this.filterdata)
  this.datalist.filter((val)=>{
    if(this.filterdata == ""){
      return true
    }
  else if(val.name.toLowerCase().search(this.filterdata.toLowerCase()) !== -1 ||
    val.company.toLowerCase().search(this.filterdata.toLowerCase()) !== -1||
    val.designation.toLowerCase().search(this.filterdata.toLowerCase()) !== -1
    )
    {
       this.newarraydata = val
      return true
    }
    else{
      return false
    }
  })
  
  console.log("this.newarraydata")
  console.log(this.newarraydata)

  
  }
 
  logout(){
    localStorage.setItem('islogin','false')
    this.route.navigate(['./login'])
    localStorage.clear();
    // location.reload()
  }

}
