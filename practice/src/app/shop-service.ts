import { Injectable, model } from '@angular/core';
import { ShopItem } from './models/shop-item';
import { v4 } from 'uuid';
import { ItemFilter } from './models/item-filter';

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
  ];

  getItems() {
    return this.items;
 }

 addItem(item: ShopItem) {
  item.id = v4();
  this.items.push(item);
  return item.id;
 }

 filterItems(filter: ItemFilter) {
  let result = this.items;

  if(filter.model !== null && filter.model !== undefined && filter.model !== ''){
    result = result.filter(c => c.modelName.includes(filter.model!));
  }

  if(filter.priceFrom!==null && filter.priceFrom !== undefined){
    result = result.filter(c => c.price >= filter.priceFrom!);
  }

  if(filter.priceTo!==null && filter.priceTo !== undefined){
    result = result.filter(c => c.price <= filter.priceTo!); 
  }
  return result;
 } 
}