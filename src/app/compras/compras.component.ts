import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  user=" "
  password=" "

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irVentas(){
    this.router.navigateByUrl('/ventas')
  }
  iniciarSesion(){
    if(this.user=='maestro' && this.password =='1234'){
      alert("credenciales correctas")
      this.irVentas()
    }else{
      alert("credenciales incorrectas")
    }
  }
}
