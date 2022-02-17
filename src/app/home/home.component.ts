import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metaService: Meta) {
    this.addTag();
  }
 
  addTag() {
    this.metaService.updateTag({property:"og:title", content:"article.title"});
    this.metaService.updateTag({property:"og:description", content:"article.category.name"});
    this.metaService.updateTag({property:"og:url", content:"https://www.nouliv.fr/detail/6202087c7462451de9988d43"});
    this.metaService.updateTag({property:"og:image", content:"https://www.nouliv.fr/api/article/body/questionnaire21644301178662.jpg"});
    this.metaService.updateTag({property:"og:image:alt", content:"article.title"});
    this.metaService.updateTag({property:"og:image:height", content:"600"});
    this.metaService.updateTag({property:"og:image:width", content:"400"});
    this.metaService.updateTag({property:"og:author", content:"@Nouliv"});

  }

  ngOnInit(): void {
    
  }

}
