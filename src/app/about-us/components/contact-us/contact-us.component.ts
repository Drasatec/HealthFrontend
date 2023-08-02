import { Component, Input} from '@angular/core';
import { HospitalModel } from 'src/app/Models/hospital.model';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  @Input() hospital!:HospitalModel

  }

