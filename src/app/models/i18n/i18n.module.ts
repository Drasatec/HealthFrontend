import { NgModule } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { I18nService } from './i18n.service';
import { environment } from 'src/environment/environment.prod';

@NgModule({
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            isolate: true,
        })
    ],
    providers: [{
        provide: TranslateService,
        useClass: I18nService
    }]
})
export class i18nModule {
    constructor(protected translateService: TranslateService) {
        (async () => {

            const en = await import(`./translations/en.json`);
            const ar = await import(`./translations/ar.json`);

            translateService.setTranslation('en', en);
            translateService.setTranslation('ar', ar);
            translateService.setDefaultLang(environment.defaultLanguage);
        })()
    }
}