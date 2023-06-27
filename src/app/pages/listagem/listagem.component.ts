import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';
import { NgToastService } from 'ng-angular-popup';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent {
  name: string | undefined;
  description: string | undefined;
  price: string | undefined;

  productList: any[] = [];
  router: any;
  authService: any;

  constructor(
    private http: HttpClient,
    private toast: NgToastService,
    private primengConfig: PrimeNGConfig
  ) {}

  /*Modal*/
  BasicShow: boolean = false;

  showDialog() {
    this.BasicShow = true;
  }
  /*Modal*/

  ngOnInit() {
    this.fetchProducts();
    this.primengConfig.ripple = true;
  }

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

  /*chamada para excluir os produtos*/

  /* onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  SignUp() {
    this.upload();
    this.addProduct();
  }

  upload(): void {
    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile, this.selectedFile.name);

      this.http
        .post<any>('http://localhost:8080/product/upload', uploadData)
        .subscribe(
          (response) => {
            console.log(response);
            // Faça algo com a resposta do backend, se necessário
          },
          (error) => {
            console.error(error);
            // Trate o erro, se necessário
          }
        );
    } else {
      console.log('Nenhum arquivo selecionado.');
    }
  }
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
        // Atualizar a lista de produtos após o cadastro bem-sucedido
        window.location.href = '/listagem';
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao cadastrar o produto:', error);
      });
  }
*/
}
