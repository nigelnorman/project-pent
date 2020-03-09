import { Component, OnInit } from '@angular/core';
import { FeatureItem } from '../core/models/feature-item';
import { FeatureItemService } from '../core/services/feature-item.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public featuredItems: FeatureItem[];

  constructor(private readonly featureItemService: FeatureItemService) { }

  ngOnInit() {
    this.featuredItems = this.featureItemService.getFeaturedItems();
  }

}
