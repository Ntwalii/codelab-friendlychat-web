import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import AngularFire modules
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAuth,
  getAuth,
  connectAuthEmulator,
} from '@angular/fire/auth';
// import {
//   provideFirestore,
//   getFirestore,
//   enableIndexedDbPersistence,
// } from '@angular/fire/firestore';
import { HeaderComponent } from './components/header/header.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// Import other necessary modules

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatPageComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [
    // Initialize Firebase app
    {
      provide: 'firebaseApp',
      useFactory: () => initializeApp(environment.firebase),
      deps: [],
    },
    // Provide AngularFire app instance
    {
      provide: 'firebaseAppInstance',
      useExisting: 'firebaseApp',
    },
    // Provide Auth module
    {
      provide: 'auth',
      useFactory: () => getAuth(),
      deps: ['firebaseAppInstance'],
    },
    // Provide Firestore module
    // {
    //   provide: 'firestore',
    //   useFactory: () => getFirestore(),
    //   deps: ['firebaseAppInstance'],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}