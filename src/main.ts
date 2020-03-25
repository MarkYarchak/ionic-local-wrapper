import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
// import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// const { PushNotifications } = Plugins;

if (environment.production) {
  enableProdMode();
}

// PushNotifications.register();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

defineCustomElements(window);
