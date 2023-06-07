
import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-view-productos',
  templateUrl: './view-productos.component.html',
  styleUrls: ['./view-productos.component.css']
})
export class ViewProductosComponent implements OnInit {

  productos : any = [

  ]

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe(
      (dato:any) => {
        this.productos = dato;
        console.log(this.productos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los productos','error');
      }
    )
  }

  eliminarProducto(productoId:any){
    Swal.fire({
      title:'Eliminar producto',
      text:'¿Estás seguro de eliminar el producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.productoService.eliminarProducto(productoId).subscribe(
          (data) => {
            this.productos = this.productos.filter((curso:any) => curso.cursoId != productoId);
            Swal.fire('Producto eliminado','El producto ha sido eliminado de la base de datos','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el producto','error');
          }
        )
      }
    })
  }
}
