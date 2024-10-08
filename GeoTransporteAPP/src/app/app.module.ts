import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment.prod';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig )), 
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"geo-trans-4e024","appId":"1:949019105855:web:089f6ad617be67fa35f68a","storageBucket":"geo-trans-4e024.appspot.com","apiKey":"AIzaSyAo0rQPfzmShwbPHg9cCzjCgqv9w0FdQgQ","authDomain":"geo-trans-4e024.firebaseapp.com","messagingSenderId":"949019105855","measurementId":"G-FD93ZHFVWQ"}))],
  bootstrap: [AppComponent],
})
export class AppModule {}
