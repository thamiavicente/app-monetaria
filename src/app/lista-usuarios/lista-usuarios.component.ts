import { Component, OnInit } from '@angular/core';
import { Usuario } from './lista-usuarios.interfaces';
import { ListaUsuariosService } from './lista-usuarios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
 
  listaUsuarios: Usuario[];

  constructor(
    private listaUsuariosService: ListaUsuariosService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.listaUsuariosService.getUsuarios()
    .subscribe(response => {
      this.listaUsuarios = response;
    })
  }

  deletarUsuario(idUsuario: number){
    this.listaUsuariosService.deleteUsuario(idUsuario)
    .subscribe(
      response => this.onSucessDeletarUsuario(idUsuario),
      error => this.onErrorDeletarUsuario(),
    );
  }

  onSucessDeletarUsuario(idUsuario) {
    this.toastr.success('Usuário Deletado', 'Tchau tchau, Usuário!');
    this.listaUsuarios = this.listaUsuarios.filter(usuario => usuario.id !== idUsuario);
  }

  onErrorDeletarUsuario() {
    console.log("erro ao deletar")
  }
}
