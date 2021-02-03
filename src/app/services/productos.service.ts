import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../interfaces/productoModel.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductoModel[] = [];
  cargando = true;
  productosfiltrado: ProductoModel[] = [];

  constructor(private http:HttpClient) { 

    this.cargarProductos();
  }

  private cargarProductos(){

    //promesas
    return new Promise( (resolve, reject) => {

      this.http.get('https://angular-html-e583a-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {

        this.productos = resp;
        setTimeout(() =>{
          this.cargando = false;
          resolve('finish!');
        },2000);
        

      });

    });
    

  }

  public getProduct(id:string){
      return this.http.get(`https://angular-html-e583a-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino : string){

    if(this.productos.length === 0){
        this.cargarProductos().then(()=>{
            this.filtrarProductos(termino);
        })
    }else{
        this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string){

      this.productosfiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.productos.forEach( prod => {

        const tituloLower = prod.titulo.toLocaleLowerCase();
        if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ){
          this.productosfiltrado.push(prod);
        }
      });
  }

}
