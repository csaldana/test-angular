import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoPaginaService: InfoPaginaService,
                private router: Router) { 

  }

  ngOnInit(): void {
  }

  buscarProdcuto(termino: string){

    if(termino.length < 1){
      return;
    }


    this.router.navigate(['/search',termino]);

    console.log(termino);
  }

}
