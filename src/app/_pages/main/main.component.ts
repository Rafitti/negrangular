import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  status: boolean = true;
  menuItems!: any[];
  selectedItem: any;
  ngOnInit() {
    this.menuItems = [
      { name: "Home", path: ["/"], icon: "fa-home" },
      { name: "Users", path: [""], icon: "fa-user" },
      { name: "Folder", path: [""], icon: "fa-folder" },
      { name: "Files", path: [""], icon: "fa-file" }
    ];
    this.status = true;
  }
  

  activeItem(event: any, name: any){
    this.selectedItem = name;
  }
  clickEvent(){
    this.status = !this.status;
    console.log(this.status);
  }
}