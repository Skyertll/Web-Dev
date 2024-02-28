export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  images?:string[];
}

export const products = [
  {
    id: 1,
    name: 'Fenix HM65R',
    price: 99,
    description: 'The best light',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/fenix-hm65r-dt-chernyi-114951780/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/hec/ha9/84599878647838.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h82/84599878713374.jpg?format=gallery-large', 'https://fenixrussia.ru/image/catalog/Blog/001/fenix-hm65r-obzor-oblegchennogo-nalobnogo-fonarya-13.png']
  },
  {
    id: 2,
    name: 'Julbo Shadow',
    price: 199,
    description: 'Great Ski Mask',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/julbo-shadow-rv-aa2-3-j76673140-krasnyi-universal-nyi-102790264/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/hec/h22/64375630233630.jpg?format=gallery-large', 'https://alpindustria.ru/i/product/l/-42686_1.jpg', 'https://avatars.mds.yandex.net/i?id=5ff953132684204e3454ddfd154489804b2eb562-10836596-images-thumbs&n=13']
  },
  {
    id: 3,
    name: 'Petzl Ascension',
    price: 299,
    description: 'The best Jumar in the World',
    rating: 4.85,
    link: 'https://kaspi.kz/shop/p/petzl-ascension-za00001-zheltyi-101640949/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/h50/ha6/64061426008094.jpg?format=gallery-large', 'https://www.tradeinn.com/f/128/1283620_4/petzl-ascension-right.jpg', 'https://static-01.daraz.com.np/p/d08524c32c37449380e67da7c8b92db8.jpg']
  },
  {
    id: 4,
    name: 'Osprey Aether Pro 70',
    price: 500,
    description: 'The best tracking backpack',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/osprey-aether-pro-10001376-trekkingovyi-70-l-seryi-101729903/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/h43/h6e/64050383519774.jpg?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/h0d/hea/64050385846302.jpg?format=gallery-medium','https://avatars.mds.yandex.net/i?id=9bd163f74d426b852a60c489eb97c9956f5dae84-4033188-images-thumbs&n=13']
  },
  {
    id: 6,
    name: 'MSR Access 2',
    price: 1000,
    description: 'Tent for two',
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/msr-access-2-13117-oranzhevyi-112409287/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/h4b/h78/82625803255838.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h44/h53/82625802338334.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h6a/82625803780126.jpg?format=gallery-large']
  },
  {
    id: 7,
    name: 'Petzl Summit',
    price: 499,
    description: 'Great ice-axe',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/petzl-summit-u13b-059-chernyi-115731623/?c=750000000',
    images:['https://www.veloonline.com/images/catalog/pic/big/big_summit-2_23010_pic.jpg', 'https://www.weld.pl/files/products/2320/large/petzl_summit_new.jpg', 'http://blog.marcdaviet.com/wp-content/uploads/2015/03/©MDaviet_ARG_140407_018.jpg']
  },
  {
    id: 8,
    name: 'MSR Reactor',
    price: 1200,
    description: 'Ultimate Stove Kit',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/gorelka-msr-reactor-06898-bez-ballona-112409184/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/h2c/h5f/82625566146590.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h75/h43/82625566670878.jpg?format=gallery-large', 'https://i.ebayimg.com/images/g/Ia4AAOSws7diaZG6/s-l1600.jpg']
  },
  {
    id: 9,
    name: 'Scarpa Maestrale Boots',
    price: 799,
    description: 'Great Ski Boots',
    rating: 4.4,
    link: 'https://kaspi.kz/shop/p/scarpa-maestrale-12057-501-1-chernyi-oranzhevyi-43-5-116323241/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/hcf/hc1/85052804497438.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h6e/h43/85052804562974.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h72/h25/85052804628510.jpg?format=gallery-large']
  },
  {
    id: 10,
    name: 'Armada Stranger',
    price: 749,
    description: 'Professional Skis',
    rating: 4.75,
    link: 'https://kaspi.kz/shop/p/armada-stranger-ra0000400-2024-172-sm-chernyi-115134721/?c=750000000',
    images:['https://resources.cdn-kaspi.kz/img/m/p/h28/h06/84651071930398.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h91/84651071995934.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h3c/hae/84651072061470.jpg?format=gallery-large']
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/