import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Импортируем CommonModule

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // ✅ Добавляем CommonModule, чтобы работал *ngFor
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})export class ProductsComponent {
  products = [
    {
      name: 'iPhone 15',
      description: 'Последняя модель Apple iPhone',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      name: 'Samsung Galaxy S24',
      description: 'Флагманский Android-смартфон',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/'
    },
    {
      name: 'MacBook Air M2',
      description: 'Тонкий и лёгкий ноутбук от Apple с чипом M2',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      name: 'Xiaomi Redmi Note 12 Pro+',
      description: 'Доступный смартфон с отличными характеристиками',
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h65/79777237827614.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-sinii-podarok-109744675/?c=750000000'
    },
    {
      name: 'PlayStation 5',
      description: 'Игровая консоль нового поколения от Sony',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h1f/85207910383646.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-geimpad-zarjadnaja-stantsija-gripsy-fifa23-ps4-ufc4-mortal-kombat-11-ultimate-gta5-call-of-duty-cold-war-need-for-speed-heat-116749438/?c=750000000'
    },
    {
      name: 'Samsung 4K Smart TV',
      description: 'Смарт-телевизор с разрешением 4K от Samsung',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
    },
    {
      name: 'Apple Watch Series 9',
      description: 'Новые умные часы от Apple с улучшенными функциями',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-45-mm-sinii-chernyi-113398151/?c=750000000'
    },
    {
      name: 'Dyson V15 Vacuum Cleaner',
      description: 'Мощный пылесос от Dyson с технологией лазерной очистки',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/hfb/84133909102622.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      name: 'Logitech MX Master 3',
      description: 'Эргономичная беспроводная мышь с высокой точностью',
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pad/p8e/25625883.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3-darkgrey-temno-seryi-134843985/?c=750000000'
    },
    {
      name: 'Sony WH-1000XM5',
      description: 'Беспроводные наушники с лучшим шумоподавлением',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/?c=750000000'
    }
  ];

  share(link: string, platform: string) {
    const url = encodeURIComponent(link);
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}`;
    }
    window.open(shareUrl, '_blank');
  }
}

