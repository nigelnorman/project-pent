import { Injectable } from '@angular/core';
import { FeatureItem } from '../models/feature-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureItemService {

  public featuredItems: FeatureItem[];

  constructor() {
    this.featuredItems = [];
    this.featuredItems.push(
      {
        name: 'BAC App - Google Play',
        description: 'Android application written in C# using Xamarin; calculates your rough blood alcohol content using input data.',
        linkUri: 'https://play.google.com/store/apps/details?id=com.baccalculator',
        image: 'https://lh3.googleusercontent.com/GfKBYy8JHNEomLhYIZaFU0v5u_kidOiUWwJKRC7iPmW8P1T4g_avHUWjI_zS34noiMBm=s180-rw'
      } as FeatureItem
    );
   }

  public getFeaturedItems = (): FeatureItem[] => {
    return this.featuredItems;
  }

  public getFeaturedArtworkItems = (): FeatureItem[] => {
    let featuredArt = [] as FeatureItem[];
    featuredArt.push({
      image: 'https://imgur.com/s3uaHBY.jpg'
    } as FeatureItem);    
    featuredArt.push({
      image: 'https://imgur.com/ERiRVGf.jpg'
    } as FeatureItem);    
    featuredArt.push({
      image: 'https://imgur.com/m78AiiF.jpg'
    } as FeatureItem);    
    featuredArt.push({
      image: 'https://i.imgur.com/h4w7JEr.jpg'
    } as FeatureItem);

    return featuredArt;
  }
}
