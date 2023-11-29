export interface PublicRoutes {
    default:string
    home:string
    administrador:string
    contacto:string
    
}
export interface AdminRoutes extends PublicRoutes{
    login:string
    generarCerti:string
    cargarCurso:string
    cargarFirma:string
    cargarPalntilal:string

}

export const clientRoutes: PublicRoutes={
    default:"/",
    home:"/",
    
    administrador:"/Admin",
    contacto:"/contacto"
   
    

}

export const adminRoute: AdminRoutes={
    ...clientRoutes,
    login: "/login",
    generarCerti: "/generarCerti",
    cargarFirma: "/cargarFirma",
    cargarCurso: "/cargarCurso",
    cargarPalntilal:"/cargarPal"

}