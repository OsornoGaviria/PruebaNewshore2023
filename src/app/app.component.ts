import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './Services/marvel-api.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title = 'Prueba-Newshore';
  // marvelPersonajes:any;
  // myControl = new FormControl<string | User>('');
  // options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  // filteredOptions: Observable<User[]>;

  // constructor(private marvelApi: MarvelApiService){

  // }

  // ngOnInit(){
  //   this.marvelApi.searchDeptos().subscribe(res=>{
  //    this.marvelPersonajes=res;
  //    this.marvelPersonajes=this.marvelPersonajes['data']['results']
  //    console.log(this.marvelPersonajes)
  //   })

  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => {
  //       const name = typeof value === 'string' ? value : value?.name;
  //       return name ? this._filter(name as string) : this.options.slice();
  //     }),
  //   );

    
  // }

  

}
