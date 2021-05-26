const { Products } = require('../models');

const productData = [
  {
    product_name: 'Dell 24" Monitor',
    description: 'Dell SE2419Hx 24" IPS Full HD (1920x1080) Monitor, Black',
    price: 145.98,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: 'ASUS 24" Monitor',
    description: 'ASUS VP248QGL 24” Full HD 1920x1080 1ms DP HDMI VGA Adaptive Sync/FreeSync Eye Care Monitor, Black',
    price: 149.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'HP Desktop',
    description: 'Fastest hp Desktop Business Tower Computer PC (Intel Ci5-4570, 16GB Ram, 2TB HDD + 120GB SSD, Wireless WiFi, Display Port, USB 3.0) ',
    price: 259.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'Lenovo Desktop',
    description: 'lenovo ThinkCentre M900 Tiny Desktop Micro Tower PC (Intel Core i5-6500T, 8 GB Ram, 256 GB SSD, USB 3.0, WiFi) ',
    price: 275.00,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: 'Dell Laptop',
    description: 'Dell Inspiron 15 3000 Series Premium Laptop, 15.6” HD Anti-Glare Non-Touch Display, Intel Celeron 4205U Processor, 8GB DDR4 RAM, 256GB PCIe SSD, Webcam, WiFi, HDMI, Bluetooth',
    price: 469.00,
    stock: 5,
    category_id: 3,
  },
  {
    product_name: 'Apple Laptop',
    description: '2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage)',
    price: 949.99,
    stock: 8,
    category_id: 3,
  },
  {
    product_name: 'Dell Server',
    description: 'Dell PowerEdge R710 Server | 2X 2.80GHz 12 Cores | 64GB RAM | H700 | 18TB Storage',
    price: 638.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: 'Dell Server',
    description: 'Dell PowerEdge R610 Server | 2x2.66GHz 12 Cores | 32GB | PERC6i | 4X 300GB',
    price: 274.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: 'Logitech Wired Keyboard/Mouse Combo',
    description: 'Logitech Media Combo MK200 Full-Size Keyboard and High-Definition Optical Mouse ',
    price: 19.99,
    stock: 30,
    category_id: 5,
  },
  {
    product_name: 'Logitech Wireless Keyboard/Mouse Combo',
    description: 'Logitech MK335 Wireless Keyboard and Mouse Combo - Black/Silver',
    price: 29.99,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'NETGEAR Switch',
    description: 'NETGEAR 28-Port PoE Gigabit/10G Stackable Smart Switch (GS728TXP) - Managed, with 24 x PoE+ @ 195W, 2 x 10G Copper and 2 x 10G SFP+, Desktop or Rackmount',
    price: 1120.00,
    stock: 2,
    category_id: 6,
  },
  {
    product_name: 'NETGEAR Switch',
    description: 'NETGEAR 10-Port Ultra60 PoE Gigabit Ethernet Smart Switch (GS110TUP) - 8 x 1G, Managed, Optional Insight Cloud Management, 4 x PoE+ and 4 x PoE++ @240W, 2 x 1G Uplinks, Desktop, Wall, or Rackmount ',
    price: 240.00,
    stock: 10,
    category_id: 6,
  },
  {
    product_name: 'Samsung Tablet',
    description: 'Samsung Galaxy Tab S6 10.5", 128GB WiFi Tablet Mountain Gray',
    price: 399.00,
    stock: 12,
    category_id: 7,
  },
  {
    product_name: 'Apple Tablet',
    description: '2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)',
    price: 299.00,
    stock: 8,
    category_id: 7,
  },
  
  
];

const seedProducts = () => Products.bulkCreate(productData);

module.exports = seedProducts;
