import 'core-js';
import 'zone.js/dist/zone';

import * as angular from 'angular';
(window as any).angular = angular;

import {StaticProvider, PlatformRef, NgModuleRef, NgZone} from '@angular/core';
import {downgradeModule, downgradeComponent} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {rootModule} from '../app/root.module';
import { AppModule } from './app.module';
import {UrlService, UIRouter} from '@uirouter/core';
import { BootstrapComponent } from './bootstrap.component';

const ng2BootstrapFn = (extraProviders: StaticProvider[]) =>  {
  const platformRef: PlatformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(AppModule)
    .then((platformRef: NgModuleRef<AppModule>) => {
      const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;
      function startUIRouter() {
        urlService.listen();
        urlService.sync();
      }
      platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
      return platformRef;      
    });
};

rootModule
   .directive(
     'bootstrap',
     downgradeComponent({component: BootstrapComponent, propagateDigest: false}) as angular.IDirectiveFactory
   );

rootModule.config(['$urlServiceProvider', ($urlService: UrlService) => {
  $urlService.deferIntercept();
}]);

angular.bootstrap(document.body,
  [
    rootModule.name,
    downgradeModule(ng2BootstrapFn),
  ]
);

// setTimeout(() => {
//   const injector: angular.auto.IInjectorService = angular.element(document.body).injector();
//   const urlService: UrlService = injector.get('$urlService');
  
//   // setTimeout needed to allow angular routes to initialize after refresh
//   urlService.listen();
//   urlService.sync();

// });
