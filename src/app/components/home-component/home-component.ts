import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServicePixar } from '../../services/service.pixars';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {

  mensajeSaludo!: string;

  constructor(
    private _service: miServicePixar,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.mensajeSaludo = this._service.getSaludo();
    this._cdr.detectChanges();
  }
}
