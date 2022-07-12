import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

declare function walidacja(): any;

export interface Item {
  name: string;
  author: string;
  date: string;
  id: string;
  type: string;
  place: string;
  description: string;
  email: string;
  phone: string;
  verified: string;
}

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit{
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges({ id: 'id' });

    //afs.collection<Item>('items').add({ name: 'item',  author: 'a', date, id, type, place, description, email, phone });
  }


  addItem(event: any) {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = { 
      name: event.target.tytul.value, 
      author: event.target.login.value, 
      date: event.target.data.value, 
      id,
      type: event.target.rodzaj.value, 
      place: event.target.miejsce.value, 
      description: event.target.opis.value,
      email: event.target.email.value,
      phone:event.target.telefon.value,
      verified: "Oczekuje na weryfikację"
    };


    
    if (walidacja() == 1) {
      this.itemsCollection.doc(id).set(item);
    }
  }

  
  
  ngOnInit(): void {
    
  }
}

