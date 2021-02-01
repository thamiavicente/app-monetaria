import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './lista-usuarios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios() {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios/');
  }

  createUsuario (usuario: Usuario){
    return this.http.post<Usuario[]>('http://localhost:3000/usuarios/', usuario);
  }

  updateUsuario (id: number, usuario: Usuario){
    return this.http.put<Usuario[]>('http://localhost:3000/usuarios/'+ id, usuario);
  }

  deleteUsuario (id: number){
    return this.http.delete<Usuario[]>('http://localhost:3000/usuarios/'+ id);
  }
}
