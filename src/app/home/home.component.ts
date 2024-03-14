import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaProd = [
    { nome: 'Carro', preco: 2000000, imagem:"./assets/product1.jpg" },
    { nome: 'Rodas', preco: 400, imagem:"https://http2.mlstatic.com/D_NQ_NP_627143-MLB54800786887_042023-O.webp" },
    { nome: 'Oleo', preco: 200, imagem:"https://a-static.mlcdn.com.br/450x450/oleo-de-motor-15w40-semissintetico-ipiranga-gm-fiat-volkswagen/fsautopecas/0ea16ffe418511ec80d24201ac185039/3bfb698b7b6f61be73c781a08bdbaabc.jpeg"},
    { nome: 'Filtro de ar', preco: 100, imagem:"https://strikebrasil.com/wp-content/uploads/2020/12/trocar-filtro-de-ar-comum.jpg" },
  ];
}