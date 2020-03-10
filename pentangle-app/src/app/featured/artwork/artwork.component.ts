import { Component, OnInit } from '@angular/core';
import { FeatureItem } from 'src/app/core/models/feature-item';
import { FeatureItemService } from 'src/app/core/services/feature-item.service';

@Component({
  selector: 'artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  public featuredItems: FeatureItem[];

  constructor(private readonly featureItemService: FeatureItemService) { }

  ngOnInit() {
    this.featuredItems = this.featureItemService.getFeaturedArtworkItems();
  }


}
