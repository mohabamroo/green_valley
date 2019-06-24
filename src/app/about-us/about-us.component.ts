import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const anchor = queryParams.get('anchor');
      if (anchor) {
        setTimeout(() => {
          $('html, body').animate(
            {
              scrollTop: $('#' + anchor).offset().top - 100
            },
            1000
          );
        }, 200);
      }
    });
  }
}
