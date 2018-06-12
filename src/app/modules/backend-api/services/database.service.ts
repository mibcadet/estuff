import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';


import { Observable } from 'rxjs';
import { Query } from '../../../models/query';

@Injectable()
export class DatabaseService {

  constructor(private afs: AngularFirestore) {
  }

  getDatabase(collection: string) {
    return this.afs.collection(collection);
  }

  getItems(collection: string, query?: Query) {
    if (query) {
      return query.value.pipe(switchMap(filter => this.getItemsCollection(collection, query, filter)));
    }
    return this.afs.collection(collection).valueChanges();
  }

  getItemsCollection(collection, query, filter) {
    return this.afs.collection(collection, (itemRef) => {
      if (filter) {
        return itemRef.where(query.field, '==', filter);
      }
      const order = query.order || 'desc';
      return itemRef.orderBy(query.field, order);
    }).valueChanges();
  }

  removeItem(collection: string, id: string) {
    return this.afs.collection(collection).doc(id).delete();
  }

  addItem(collection: string, item) {
    return this.afs.collection(collection).add(item)
      .then(newItem => this.afs.collection(collection).doc(newItem.id).update({ id: newItem.id }));
  }

  updateItem(collection: string, updateQuery) {
    return this.afs.collection(collection).doc(updateQuery.itemId).update(updateQuery.changes);
  }
}
