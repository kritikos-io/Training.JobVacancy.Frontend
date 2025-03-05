import { Component, inject, OnInit } from '@angular/core';

import { SupersetService } from '../services/superset.service';

@Component({
  selector: 'aa-private',
  imports: [],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent implements OnInit {


  dashboardPlaceholder = document.getElementById('superset_embedding_div_class')!;

  superset = inject(SupersetService);

  ngOnInit() {
    this.superset.embedDashboard('l2GPBvC_6Lg', this.dashboardPlaceholder);
  }

}
