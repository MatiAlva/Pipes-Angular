import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18N Select 
  public name: string = 'Matias'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Maria'
    this.gender = 'female'
  }

  // i18N Plural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Luis', 'Ana', 'Matias']
  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos # clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name: 'Matias',
    age: 22,
    addres: 'Colombia, Bogota'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( val => console.log(val) )
  )

  public promiseValue:Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500)
  })


}
