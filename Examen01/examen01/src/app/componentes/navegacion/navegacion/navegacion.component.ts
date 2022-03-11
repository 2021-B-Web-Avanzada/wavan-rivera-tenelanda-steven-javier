import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  @Input()
  titulo_ = '';

  @Input()
  icono_ = '';

  @Input()
  flecha_ = '';

  constructor() { }

  ngOnInit(): void {
  }

}
