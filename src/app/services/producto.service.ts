
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  public listarProductos(){
    return this.http.get(`${baserUrl}/producto/`);
  }

  public agregarProducto(producto:any){
    return this.http.post(`${baserUrl}/producto/`,producto);
  }

  public eliminarProducto(productoId:any){
    return this.http.delete(`${baserUrl}/producto/${productoId}`);
  }

  public obtenerProducto(productoId:any){
    return this.http.get(`${baserUrl}/producto/${productoId}`);
  }

  public actualizarProducto(producto:any){
    return this.http.put(`${baserUrl}/producto/`,producto);
  }

  public listarProductoDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baserUrl}/producto/categoria/${categoriaId}`);
  }

}
