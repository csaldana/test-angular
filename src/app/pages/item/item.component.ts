import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import {ProductoDetalle} from "../../interfaces/productoDetalle.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDetalle = {};
  id: string = '';
  cargar = true;

  constructor(private route:ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(parametros => {
        this.productoService.getProduct(parametros['id']).subscribe( (resp: ProductoDetalle) => {
          setTimeout(() =>{
            this.id = parametros['id'];
            this.producto = resp;
            this.cargar = false;

          },1000);
     
        });
      });
  }

}
