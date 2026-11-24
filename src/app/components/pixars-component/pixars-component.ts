import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miPixar } from '../../models/pixar';
import { miServicePixar } from '../../services/service.pixars';

@Component({
  selector: 'app-pixars-component',
  standalone: false,
  styleUrl: './pixars-component.css',
  templateUrl: './pixars-component.html',
})
export class PixarsComponent implements OnInit {

  arrayPixars: miPixar[];

  constructor(
    private _service: miServicePixar,
    private _cdr: ChangeDetectorRef
  ) {
    this.arrayPixars = [];
   }

  async eliminarPixar(idPersonaje: number): Promise<void>{
    await this._service.deletePixarAsync(idPersonaje);

    this.arrayPixars = await this._service.getPixarsAsync();
    this._cdr.detectChanges();    
  } 

   async ngOnInit(): Promise<void> {
    this.arrayPixars = await this._service.getPixarsAsync();
    this._cdr.detectChanges();
   }

}
