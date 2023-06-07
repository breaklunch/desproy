
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import  Swal  from 'sweetalert2';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  categorias:any = [];

  productoData = {
    nombre: '',
    marca: '',
    fecha: '',
    costo: '',
    categoria:{
      categoriaId:''
    }
  }

  constructor(
    public dialog: MatDialog,
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private productoService:ProductoService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  guardarProducto(){
    console.log(this.productoData);
    if(this.productoData.nombre.trim() == '' || this.productoData.nombre == null){
      this.snack.open('El nombre es requerido','',{
        duration:3000
      });
      return;
    }

    this.productoService.agregarProducto(this.productoData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Producto guardado','El producto ha sido guardado con éxito','success');
        this.productoData = {
          nombre: '',
          marca: '',
          fecha: '',
          costo: '',
          categoria:{
            categoriaId:''
          }
        }
        this.router.navigate(['/admin/productos']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el producto','error');
      }
    )
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}
@Component({
  selector: 'instrucciones-dialog',
  templateUrl: 'instrucciones-dialog.html',
})
export class DialogElementsExampleDialog {}
