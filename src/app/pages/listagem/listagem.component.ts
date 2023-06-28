import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';
import { NgToastService } from 'ng-angular-popup';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent {
  name: string | undefined = '';
  description: string | undefined = '';
  price: string | undefined = '';

  editName: string = '';
  editDescription: string = '';
  editPrice: string = '';

  productList: any[] = [];
  router: any;
  authService: any;
  product: any;

  constructor(
    private http: HttpClient,
    private toast: NgToastService,
    private primengConfig: PrimeNGConfig
  ) {}

  /*Modal*/
  visible: boolean = false;

  showDialog(product: any) {
    this.visible = true;
    this.editName = product.name;
    this.editDescription = product.description;
    this.editPrice = product.price;
    this.product = product;
  }

  closeDialog() {
    this.name = '';
    this.description = '';
    this.price = '';
    this.product = null;
    this.visible = false;
  }

  ngOnInit() {
    this.fetchProducts();
    this.primengConfig.ripple = true;
  }

  /*Modal*/

  /*chamada para Editar produtos*/
  saveItem() {
    const productData = {
      name: this.editName,
      description: this.editDescription,
      price: this.editPrice,
    };

    axios
      .put('http://localhost:8080/product/' + this.product.id, productData)
      .then((response) => {
        console.log('Produto atualizado com sucesso:', response.data);
        this.toast.success({
          detail: 'Register sucess',
          summary: 'successfully',
          duration: 5000,
        });
        window.location.href = '/listagem';
      });
  }

  /*chamada para Editar produtos*/

  /*Chamada para Excluir produtos*/
  deleteItem(id: any) {
    axios
      .delete('http://localhost:8080/product/' + id)
      .then((response) => {
        console.log('Produto deletado com sucesso:', response.data);
        this.toast.success({
          detail: 'delete sucess',
          summary: 'successfully',
          duration: 5000,
        });
        window.location.href = '/listagem';
      })
      .catch((error) => {
        this.toast.error({
          detail: 'Error delete',
          summary: 'Error delete',
          duration: 5000,
        });
        console.log('Ocorreu um erro ao deletar o produto:', error);
      });
  }
  /*Chamada para Excluir produtos*/

  /*chamada para cadastrar produtos*/
  addProduct() {
    const productData = {
      name: this.name,
      description: this.description,
      price: this.price,
    };

    axios
      .post('http://localhost:8080/product', productData)
      .then((response) => {
        console.log('Produto cadastrado com sucesso:', response.data);
        this.toast.success({
          detail: 'Register sucess',
          summary: 'successfully',
          duration: 5000,
        });
        window.location.href = '/listagem';
      })
      .catch((error) => {
        this.toast.error({
          detail: 'Error Register',
          summary: 'Plis fill in the fields',
          duration: 5000,
        });
        console.log('Ocorreu um erro ao cadastrar o produto:', error);
      });
  }

  /*chamada para listar os produtos*/
  fetchProducts() {
    const url = 'http://localhost:8080/product';
    axios
      .get(url)
      .then((response) => {
        this.productList = response.data;
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao obter os produtos:', error);
      });
  }
  /*chamada para listar os produtos*/
}
