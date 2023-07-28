import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { embedDashboard } from "@superset-ui/embedded-sdk";
@Component({
  selector: 'mifosx-superset',
  templateUrl: './superset.component.html',
  styleUrls: ['./superset.component.scss']
})
export class SupersetComponent implements OnInit {

  supersetEnable: Boolean;
  dashboardId: any;
  token: any;
  constructor() {
    console.log(environment.superset);
    this.supersetEnable = environment.superset.enabled;
    console.log(this.supersetEnable);
    // console.log(this.supersetEnable);
  }

  ngOnInit() {
    // this.supersetEnable = environment.superset.enabled;

    // this.supersetEnable = environment.superset.enabled;
    // console.log(this.supersetEnable);
    // http://localhost:8088/superset/dashboard/10?standalone=true&token=e0be1a3c-328e-4a27-9f0f-36f8200c3c1e
    const apiKey = 'e0be1a3c-328e-4a27-9f0f-36f8200c3c1e';
    
    // Replace 'your-superset-dashboard-url' with the URL of your Superset dashboard
    const dashboardUrl = 'http://localhost:8088/superset/dashboard/';

    
    // embedDashboard({
    //   id: "abc123",
    //   supersetDomain:dashboardUrl,
    //   mountPoint: document.getElementById("my-superset-container"),
    //   // fetchGuestToken:  apiKey,
    //   dashboardUiConfig: { // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional
    //     hideTitle: true, filters: {
    //     expanded: true, }
    //     },
    // });
  }

}
