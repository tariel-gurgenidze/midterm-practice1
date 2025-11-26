import { Component, inject, OnInit, signal } from '@angular/core';
import { ShopItem } from '../models/shop-item';
import { ShopService } from '../shop-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usb-search',
  imports: [ReactiveFormsModule],
  templateUrl: './usb-search.html',
  styleUrl: './usb-search.css',
})
export class UsbSearch implements OnInit {
  shopService = inject(ShopService);
  searchResult = signal<ShopItem[]>([]);

  searchForm = new FormGroup({
    model: new FormControl(''),
    priceForm: new FormControl<number | null>(null),
    priceTo: new FormControl<number | null>(null)
  });

  ngOnInit(): void {
    let allItems = this.shopService.getItems();

    this.searchResult.set(allItems);
  }
}
