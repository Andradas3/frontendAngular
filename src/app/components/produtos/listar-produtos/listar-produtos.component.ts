import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-listar-produtos',
    templateUrl: './listar-produtos.component.html',
    styleUrls: ['./listar-produtos.component.css']
  })
export class ListarProdutosComponent implements OnInit{

    listaStrings: string[] = ['Primeiro', 'Segundo' , 'Terceiro'];
    listaNumeros: number[] = [15, 15.18 ,100];

    objetoModelo = { 
        nome: 'Ronan', 
        idade:33, 
        altura: 1.81, 
        graduado: true
    };

    listaProdutos: any[] = [
        {nome:'Curso de Angular',preco:35.36, validade: '2021-12-31', id:1},
        {nome:'Curso de ionic',preco:50, validade: '2021-12-31', id:2},
        {nome:'Curso de ionic avançado',preco:80, validade: '2021-12-31', id:3},
        {nome:'Curso de Angular avançado',preco:80, validade: '2021-12-31', id:4},
        {nome:'Curso de Java avançado',preco:80, validade: '2021-12-31', id:5}

];
    constructor(){
        for (let item of this.listaStrings)  {console.log(item);}
        for(const item of this.listaNumeros) {console.log(item);}
        console.log(this.objetoModelo);
        console.log(this.objetoModelo.nome);
    }   
     ngOnInit(): void {
       
    }}