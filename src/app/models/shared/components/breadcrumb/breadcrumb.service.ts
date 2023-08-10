import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UiService {
  private breadcrumbTitleSubject = new BehaviorSubject("");
  breadcrumbTitle = this.breadcrumbTitleSubject.asObservable();
  private breadcrumbSubTitleTitleSubject = new BehaviorSubject("");
  breadcrumbSubTitle = this.breadcrumbSubTitleTitleSubject.asObservable();

  constructor() {}

  setBreadcrumbTitle(title: string) {
    this.breadcrumbTitleSubject.next(title);
  }

  setBreadcrumbSubTitle(subTitle: string) {
    this.breadcrumbSubTitleTitleSubject.next(subTitle);
  }
}
