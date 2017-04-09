import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// Angular 1:
// agGrid.LicenseManager.setLicenseKey("SHI_on_behalf_of_AIG_Site_10Devs23_January_2018__MTUxNjY2NTYwMDAwMA==8b08adcfc0c4594bacd6eb06e88e1d3b");
// agGrid.initialiseAgGridWithAngular1(angular);
//
// https://github.com/ceolter/ag-grid-angular-example/search?utf8=%E2%9C%93&q=license&type=
// Angular 4:
import { LicenseManager } from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("SHI_on_behalf_of_AIG_Site_10Devs23_January_2018__MTUxNjY2NTYwMDAwMA==8b08adcfc0c4594bacd6eb06e88e1d3b");


platformBrowserDynamic().bootstrapModule(AppModule);
