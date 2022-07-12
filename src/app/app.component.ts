import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges({ id: 'id' });

    //afs.collection<Item>('items').add({ name: 'item',  author: 'a', date, id, type, place, description, email, phone });
  }



}