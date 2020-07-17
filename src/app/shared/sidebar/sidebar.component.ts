import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SidebarModel } from 'src/app/models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  sidebar: SidebarModel[];
  constructor(
    private sidebarService: SidebarService
  ) { }

  async ngOnInit() {
     this.sidebar = await this.sidebarService.getSidebar();
     console.log(this.sidebar);
  }

  

}
