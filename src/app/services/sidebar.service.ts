import { Injectable } from '@angular/core';
import { SidebarModel } from '../models/sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: SidebarModel[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }
      ]
    }
  ];
  constructor() { }

  async getSidebar(){
    return this.menu;
  }
}
