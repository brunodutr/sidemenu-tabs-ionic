import { Component } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  public appTabs = [
    {
      title: "Tab One",
      url: "/tabs/tab1",
      icon: "flash"
    },
    {
      title: "Tab Two",
      url: "/tabs/tab2",
      icon: "apps"
    },
    {
      title: "Tab Three",
      url: "/tabs/tab3",
      icon: "send"
    }
  ];

  constructor() {}
}
