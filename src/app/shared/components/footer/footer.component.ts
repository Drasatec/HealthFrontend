import { Component, OnInit } from '@angular/core';
import { faTwitter,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
