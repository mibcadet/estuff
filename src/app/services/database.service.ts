import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export interface dbFilter {
  field: string;
  value: Subject<string>;
}

@Injectable()
export class DatabaseService {

  constructor(private afs: AngularFirestore) {
  }

  getItems(collection: string, filter: dbFilter) {
    return filter.value
      .switchMap(items => this.afs.collection(collection, (itemRef) => {
        if (items)
          return itemRef.where(filter.field, '==', items);
        return itemRef;
      }).valueChanges());
  }

  ngAfterViewInit() {
  }
}
