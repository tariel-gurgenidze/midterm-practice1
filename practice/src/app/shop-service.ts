import { Injectable, model } from '@angular/core';
import { ShopItem } from './models/shop-item';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  items: ShopItem[] = [
    {
      id: 'e748619d-6d6d-49e7-af33-29a7de496ded',
      modelName: 'Kingston',
      price: 10,
      isAvailable: true
    },
    {
      id: '087cac17-600a-4233-a096-2271d2846ff7',
      modelName: 'Sandisk',
      price: 20,
      isAvailable: false
    }
  ]
}
