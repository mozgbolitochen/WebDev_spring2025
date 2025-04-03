import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() category: string = 'All';
   categories = ['All', 'Smartphones', 'Laptops', 'Gaming', 'Accessories','InCart'];
   products = [
    // 📱 Смартфоны (5)
    {
      name: 'iPhone 15',
      description: 'Последняя модель Apple iPhone',
      likes: 0,
      InCart: false,
      rating: 4.9,
      category: 'Smartphones',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      name: 'Samsung Galaxy S24',
      description: 'Флагманский Android-смартфон',
      category: 'Smartphones',
      likes: 0,
      InCart: false,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/'
    },
    {
      name: 'Google Pixel 7',
      description: 'Смартфон с чистым Android и топовой камерой',
      category: 'Smartphones',
      likes: 0,
      InCart: false,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/haf/63603321208862.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-256-gb-belyi-107066176/?c=750000000'
    },
    {
      name: 'OnePlus 11',
      description: 'Флагман с высокой производительностью',
      category: 'Smartphones',
      likes: 0,
      InCart: false,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hd0/69204747845662.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/oneplus-11-16-gb-256-gb-zelenyi-108973593/?c=750000000'
    },
    {
      name: 'Xiaomi Redmi Note 12 Pro+',
      description: 'Доступный смартфон с отличными характеристиками',
      category: 'Smartphones',
      likes: 0,
      InCart: false,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h65/79777237827614.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-sinii-podarok-109744675/?c=750000000'
    },
    // 💻 Ноутбуки (5)
    {
      name: 'MacBook Air M2',
      description: 'Тонкий и лёгкий ноутбук от Apple с чипом M2',
      category: 'Laptops',
      likes: 0,
      InCart: false,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      name: 'ASUS ROG Zephyrus G14',
      description: 'Игровой ноутбук с мощной графикой и процессором',
      category: 'Laptops',
      likes: 0,
      InCart: false,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h3d/85808084615198.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-16-gb-ssd-1000-gb-bez-os-ga403uu-qs077-90nr0hz2-m003s0-118634611/?c=750000000'
    },
    {
      name: 'Lenovo Legion 5',
      description: 'Мощный ноутбук для гейминга и работы',
      category: 'Laptops',
      likes: 0,
      InCart: false,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/h47/86276583194654.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16-16-gb-ssd-512-gb-bez-os-16irx9-83dg00dwrk-120392379/?c=750000000'
    },
    {
      name: 'Dell XPS 15',
      description: 'Премиальный ультрабук с OLED-дисплеем',
      category: 'Laptops',
      likes: 0,
      InCart: false,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paf/p90/26151125.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9500-15-6-16-gb-ssd-512-gb-win-11-pro-p91f001-135093177/?c=750000000'
    },
    {
      name: 'HP Spectre x360',
      description: 'Трансформируемый ноутбук с сенсорным экраном',
      category: 'Laptops',
      likes: 0,
      InCart: false,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-16-gb-ssd-1000-gb-win-11-14-eu0003ci-a19gjea-118723256/?c=750000000'
    },  
    // 🎮 Игровые устройства (5)
    {
      name: 'PlayStation 5',
      description: 'Игровая консоль нового поколения от Sony',
      category: 'Gaming',
      likes: 0,
      InCart: false,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h1f/85207910383646.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-geimpad-zarjadnaja-stantsija-gripsy-fifa23-ps4-ufc4-mortal-kombat-11-ultimate-gta5-call-of-duty-cold-war-need-for-speed-heat-116749438/?c=750000000'
    },
    {
      name: 'Xbox Series X',
      description: 'Мощная игровая консоль от Microsoft',
      category: 'Gaming',
      likes: 0,
      InCart: false,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/pe1/12631853.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-belyi-131268902/?c=750000000'
    },
    {
      name: 'Nintendo Switch OLED',
      description: 'Портативная консоль с улучшенным дисплеем',
      category: 'Gaming',
      likes: 0,
      InCart: false,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000'
    },
    {
      name: 'Sony PlayStation 4 Slim',
      description: 'Игровая консоль прошлого поколения от Sony',
      category: 'Gaming',
      likes: 0,
      InCart: false,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he3/h45/85183684837406.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-playstation-4-slim-1tb-ea-sports-fc-24-ps4-dualshock-black-v2-116670186/?c=750000000'
    },
    {
      name: 'SEGA Mega Drive',
      description: 'Погрузись в дествтво',
      category: 'Gaming',
      likes: 0,
      InCart: false,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/hda/84577687765022.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sega-mega-drive-300-game-114863302/?c=750000000'
    },
  
    // 🎧 Аксессуары (5)
  
    {
      name: 'Samsung 4K Smart TV',
      description: 'Смарт-телевизор с разрешением 4K от Samsung',
      category: 'Accessories',
      likes: 0,
      InCart: false,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
    },
    {
      name: 'Apple Watch Series 9',
      description: 'Новые умные часы от Apple с улучшенными функциями',
      category: 'Accessories',
      likes: 0,
      InCart: false,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h66/83874218508318.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-s-m-45-mm-sinii-chernyi-113398151/?c=750000000'
    },
    {
      name: 'Dyson V15 Vacuum Cleaner',
      description: 'Мощный пылесос от Dyson с технологией лазерной очистки',
      category: 'Accessories',
      likes: 0,
      InCart: false,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/hfb/84133909102622.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      name: 'Logitech MX Master 3',
      description: 'Эргономичная беспроводная мышь с высокой точностью',
      category: 'Gaming',
      likes: 0,
      InCart: false,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pad/p8e/25625883.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3-darkgrey-temno-seryi-134843985/?c=750000000'
    },
    {
      name: 'Sony WH-1000XM5',
      description: 'Беспроводные наушники с лучшим шумоподавлением',
      category: 'Accessories',
      likes: 0,
      InCart: false,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/?c=750000000'
    },
    {
      name: 'Razer BlackWidow V4',
      description: 'Механическая клавиатура с RGB-подсветкой.',
      category: 'Accessories',
      likes: 0,
      InCart: false,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/he5/84703180750878.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/razer-blackwidow-v4-rz03-04692500-r3r1-chernyi-115284926/?c=750000000'
    }
  ];
  
  get filteredProducts() {
    if (!this.category || this.category === 'All') {
      return this.products;
    }else if(this.category === 'InCart'){
    return this.products.filter(p => p.InCart === true);
    }
    return this.products.filter(p => p.category === this.category);
  }

  setCategory(category: string) {
    this.category = category;
  }


  likeProduct(productName: string) {
    const product = this.products.find(p => p.name === productName);
    if (product) {
      product.likes++;
    }
  }

  
  removeProduct(productName: string) {
    this.products = this.products.filter(p => p.name !== productName);
  }
  
  addToCart(productName: string){
    
    this.products = this.products.map(product =>
      product.name === productName ? { ...product, inCart: true } : product
    );
  
    const product = this.products.find(p => p.name === productName);
    if (product) {
      product.InCart = true;
    }
  }
  removeFromCart(productName: string){
    this.products = this.products.map(product =>
      product.name === productName ? { ...product, inCart: false } : product
    );
  
    const product = this.products.find(p => p.name === productName);
    if (product) {
      product.InCart = false;
    }
  }
  // toggleCart(productName: string) {
  //   this.products = this.products.map(product =>
  //     product.name === productName ? { ...product, inCart: !product.inCart } : product
  //   );
  //   const product = this.products.find(p => p.name === productName);
  //   if (product) {
  //     product.InCart = true;
  //   }
  // }
  

}
