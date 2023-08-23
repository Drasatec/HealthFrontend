import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';
import { from } from 'rxjs';

export enum Language { en = 'en', ar = 'ar' }

@Injectable({
  providedIn: 'root'
})
export class I18nService extends TranslateService {
  private readonly storageKey = '~lang~'
  constructor(
    translateStore: TranslateStore,
    translateLoader: TranslateLoader,
    translateCompiler: TranslateCompiler,
    translateParser: TranslateParser,
    missingTranslationHandler: MissingTranslationHandler,
    @Inject(DOCUMENT) document: Document
  ) {
    super(translateStore, translateLoader, translateCompiler, translateParser, missingTranslationHandler, true, false, false, 'ar');
    from(this.onLangChange).subscribe({
      next: next => {
        document.documentElement.lang = next.lang;
        document.documentElement.dir = next.lang === Language.en ? 'ltr' : 'rtl';
        document.body.className = next.lang === Language.en ? 'ltr' : 'rtl';
        localStorage.setItem(this.storageKey, next.lang);
        console.log(next.lang,localStorage.getItem(this.storageKey))
        
      }
    });
    this.restoreLang();
  }

  langToggle() {
    const currentLang = (this.currentLang || this.defaultLang) === Language.en ? Language.ar : Language.en;
    this.use(currentLang);
  }

  private restoreLang() {
    const lang = localStorage.getItem(this.storageKey) || this.getBrowserLang();
    if (lang) this.use(lang);
  }

  dir(): 'rtl' | 'ltr' {
    return document.documentElement.dir as 'rtl' | 'ltr';
  }
}
