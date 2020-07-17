export interface SidebarModel {
    titulo: string,
    icono: string,
    submenu: SubmenuModel[]
}

export interface SubmenuModel { 
    titulo: string, 
    url: string 
}