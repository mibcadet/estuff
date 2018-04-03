import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebase } from '../../../environments/firebase.conf';
import { DatabaseService } from './services/database.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [DatabaseService]
})
export class BackendApiModule { }
