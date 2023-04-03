import { Component } from '@angular/core';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-specialty',
  templateUrl: './all-specialty.component.html',
  styleUrls: ['./all-specialty.component.css']
})
export class AllSpecialtyComponent {
  faHeartPulse = faHeartPulse;
  spectialty: any[] = [];
  constructor() {
    this.spectialty = [
      {id:1 , specialty:"جراحة الفم والاسنان " },
      {id:2 , specialty:" قلب وأوعية دموية "  },
      {id: 3, specialty: "  صدر وأمراض تنفس " },
      {id:4 , specialty:"جراحة الفم والاسنان " },
      {id:5, specialty:" قلب وأوعية دموية "  },
      { id: 6, specialty: "  صدر وأمراض تنفس " },
      {id:7 , specialty:"جراحة الفم والاسنان " },
      {id:8 , specialty:" قلب وأوعية دموية "  },
    ]
  }
}
