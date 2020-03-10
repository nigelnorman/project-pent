import { Component, OnInit } from '@angular/core';
import { FeatureItem } from 'src/app/core/models/feature-item';
import { FeatureItemService } from 'src/app/core/services/feature-item.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public featuredItems: FeatureItem[];

  constructor(private readonly featureItemService: FeatureItemService) { }

  ngOnInit() {
    this.featuredItems = this.featureItemService.getFeaturedItems();
  }

}
