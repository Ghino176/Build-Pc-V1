-- Insert sample CPUs
INSERT INTO cpus (name, brand, cores, threads, base_clock, boost_clock, tdp, socket, price, image, description) VALUES
('Ryzen 9 7950X', 'AMD', 16, 32, '4.5 GHz', '5.7 GHz', '170W', 'AM5', 699.99, '/amd-ryzen-seeklogo.png', 'High-performance 16-core processor for enthusiasts'),
('Core i9-13900K', 'Intel', 24, 32, '3.0 GHz', '5.8 GHz', '125W', 'LGA1700', 589.99, '/intel-seeklogo.png', 'Intel flagship processor with hybrid architecture'),
('Ryzen 7 7800X3D', 'AMD', 8, 16, '4.2 GHz', '5.0 GHz', '120W', 'AM5', 449.99, '/amd-ryzen-seeklogo.png', 'Gaming-optimized processor with 3D V-Cache'),
('Core i7-13700K', 'Intel', 16, 24, '3.4 GHz', '5.4 GHz', '125W', 'LGA1700', 409.99, '/intel-seeklogo.png', 'High-performance processor for gaming and productivity'),
('Ryzen 5 7600X', 'AMD', 6, 12, '4.7 GHz', '5.3 GHz', '105W', 'AM5', 299.99, '/amd-ryzen-seeklogo.png', 'Mid-range processor with excellent gaming performance'),
('Core i5-13600K', 'Intel', 14, 20, '3.5 GHz', '5.1 GHz', '125W', 'LGA1700', 319.99, '/intel-seeklogo.png', 'Balanced processor for gaming and content creation'),
('Ryzen 9 7900X', 'AMD', 12, 24, '4.7 GHz', '5.6 GHz', '170W', 'AM5', 549.99, '/amd-ryzen-seeklogo.png', '12-core processor for high-end workstations'),
('Core i9-12900K', 'Intel', 16, 24, '3.2 GHz', '5.2 GHz', '125W', 'LGA1700', 499.99, '/intel-seeklogo.png', 'Previous generation flagship with hybrid cores'),
('Ryzen 7 7700X', 'AMD', 8, 16, '4.5 GHz', '5.4 GHz', '105W', 'AM5', 399.99, '/amd-ryzen-seeklogo.png', '8-core processor for gaming and productivity'),
('Core i5-12600K', 'Intel', 10, 16, '3.7 GHz', '4.9 GHz', '125W', 'LGA1700', 279.99, '/intel-seeklogo.png', 'Mid-range processor with hybrid architecture');

-- Insert sample Graphics Cards
INSERT INTO graphics_cards (name, brand, memory, core_clock, boost_clock, tdp, price, image, description) VALUES
('GeForce RTX 4090', 'NVIDIA', '24GB GDDR6X', '2230 MHz', '2520 MHz', '450W', 1599.99, '/nvidia-seeklogo.png', 'Ultimate gaming and content creation GPU'),
('GeForce RTX 4080', 'NVIDIA', '16GB GDDR6X', '2205 MHz', '2505 MHz', '320W', 1199.99, '/nvidia-seeklogo.png', 'High-end gaming GPU for 4K performance'),
('Radeon RX 7900 XTX', 'AMD', '24GB GDDR6', '2300 MHz', '2500 MHz', '355W', 999.99, '/amd-radeon-780m-seeklogo.png', 'AMD flagship GPU for 4K gaming'),
('GeForce RTX 4070 Ti', 'NVIDIA', '12GB GDDR6X', '2310 MHz', '2610 MHz', '285W', 799.99, '/nvidia-seeklogo.png', 'Excellent 1440p gaming performance'),
('Radeon RX 7900 XT', 'AMD', '20GB GDDR6', '2000 MHz', '2400 MHz', '300W', 899.99, '/amd-radeon-780m-seeklogo.png', 'High-performance GPU for 1440p and 4K'),
('GeForce RTX 4070', 'NVIDIA', '12GB GDDR6X', '1920 MHz', '2475 MHz', '200W', 599.99, '/nvidia-seeklogo.png', 'Great 1440p gaming GPU with DLSS 3'),
('Radeon RX 7800 XT', 'AMD', '16GB GDDR6', '2124 MHz', '2430 MHz', '263W', 499.99, '/amd-radeon-780m-seeklogo.png', 'Solid 1440p gaming performance'),
('GeForce RTX 4060 Ti', 'NVIDIA', '16GB GDDR6', '2310 MHz', '2535 MHz', '165W', 499.99, '/nvidia-seeklogo.png', '1440p gaming with RT and DLSS support'),
('Radeon RX 7700 XT', 'AMD', '12GB GDDR6', '2171 MHz', '2544 MHz', '245W', 449.99, '/amd-radeon-780m-seeklogo.png', '1440p gaming with high VRAM'),
('GeForce RTX 4060', 'NVIDIA', '8GB GDDR6', '1830 MHz', '2460 MHz', '115W', 299.99, '/nvidia-seeklogo.png', 'Entry-level RTX gaming with DLSS 3');

-- Insert sample RAM
INSERT INTO ram (name, brand, capacity, type, speed, cas_latency, price, image, description) VALUES
('Trident Z5 RGB', 'G.Skill', '32GB (2x16GB)', 'DDR5', '6000MHz', 'CL30', 299.99, '/g-skill-seeklogo.png', 'High-performance RGB gaming memory'),
('Dominator Platinum RGB', 'Corsair', '32GB (2x16GB)', 'DDR5', '5600MHz', 'CL36', 349.99, '/corsair-memory-seeklogo.png', 'Premium RGB memory for enthusiasts'),
('Ripjaws V', 'G.Skill', '16GB (2x8GB)', 'DDR4', '3200MHz', 'CL16', 79.99, '/g-skill-seeklogo.png', 'Reliable DDR4 memory for gaming'),
('Vengeance LPX', 'Corsair', '32GB (2x16GB)', 'DDR4', '3600MHz', 'CL18', 149.99, '/corsair-memory-seeklogo.png', 'Low-profile high-speed memory'),
('Trident Z Neo', 'G.Skill', '16GB (2x8GB)', 'DDR4', '3600MHz', 'CL16', 129.99, '/g-skill-seeklogo.png', 'Optimized for AMD Ryzen processors'),
('Vengeance RGB Pro', 'Corsair', '32GB (4x8GB)', 'DDR4', '3200MHz', 'CL16', 189.99, '/corsair-memory-seeklogo.png', 'RGB memory with dynamic lighting'),
('Trident Z5', 'G.Skill', '64GB (2x32GB)', 'DDR5', '5200MHz', 'CL40', 599.99, '/g-skill-seeklogo.png', 'High-capacity DDR5 for workstations'),
('Dominator Platinum', 'Corsair', '16GB (2x8GB)', 'DDR5', '5200MHz', 'CL40', 249.99, '/corsair-memory-seeklogo.png', 'Premium DDR5 memory module'),
('Ripjaws S5', 'G.Skill', '32GB (2x16GB)', 'DDR5', '5600MHz', 'CL28', 279.99, '/g-skill-seeklogo.png', 'Fast DDR5 memory for gaming'),
('Vengeance DDR5', 'Corsair', '16GB (2x8GB)', 'DDR5', '4800MHz', 'CL40', 159.99, '/corsair-memory-seeklogo.png', 'Entry-level DDR5 memory kit');

-- Insert sample Storage
INSERT INTO storage (name, brand, capacity, type, interface, read_speed, write_speed, price, image, description) VALUES
('980 PRO', 'Samsung', '2TB', 'NVMe SSD', 'PCIe 4.0', '7000 MB/s', '5100 MB/s', 199.99, '/samsung-seeklogo.png', 'High-performance NVMe SSD for gaming'),
('WD Black SN850X', 'Western Digital', '2TB', 'NVMe SSD', 'PCIe 4.0', '7300 MB/s', '6600 MB/s', 179.99, '/western-digital-seeklogo.png', 'Gaming SSD with heatsink option'),
('970 EVO Plus', 'Samsung', '1TB', 'NVMe SSD', 'PCIe 3.0', '3500 MB/s', '3300 MB/s', 89.99, '/samsung-seeklogo.png', 'Reliable NVMe SSD for everyday use'),
('WD Blue SN570', 'Western Digital', '1TB', 'NVMe SSD', 'PCIe 3.0', '3500 MB/s', '3000 MB/s', 69.99, '/western-digital-seeklogo.png', 'Budget-friendly NVMe SSD'),
('980 PRO', 'Samsung', '4TB', 'NVMe SSD', 'PCIe 4.0', '7000 MB/s', '5100 MB/s', 399.99, '/samsung-seeklogo.png', 'High-capacity flagship SSD'),
('WD Black', 'Western Digital', '4TB', 'HDD', 'SATA III', '256 MB', '256 MB', 89.99, '/western-digital-seeklogo.png', 'High-capacity storage drive', 7200, '256MB'),
('870 EVO', 'Samsung', '2TB', 'SATA SSD', 'SATA III', '560 MB/s', '530 MB/s', 149.99, '/samsung-seeklogo.png', 'Reliable 2.5" SATA SSD'),
('WD Red Pro', 'Western Digital', '8TB', 'HDD', 'SATA III', '272 MB', '272 MB', 199.99, '/western-digital-seeklogo.png', 'NAS-optimized storage drive', 7200, '256MB'),
('990 PRO', 'Samsung', '2TB', 'NVMe SSD', 'PCIe 4.0', '7450 MB/s', '6900 MB/s', 229.99, '/samsung-seeklogo.png', 'Latest generation flagship SSD'),
('WD Blue', 'Western Digital', '2TB', 'HDD', 'SATA III', '256 MB', '256 MB', 54.99, '/western-digital-seeklogo.png', 'Reliable desktop storage drive', 5400, '256MB');

-- Insert sample Power Supplies
INSERT INTO power_supplies (name, brand, wattage, efficiency, modular, price, image, description) VALUES
('SuperNOVA 1000 G6', 'EVGA', '1000W', '80+ Gold', 'Fully Modular', 179.99, '/evga-seeklogo.png', 'High-wattage PSU for enthusiast builds'),
('RM1000x', 'Corsair', '1000W', '80+ Gold', 'Fully Modular', 199.99, '/corsair.svg', 'Premium modular power supply'),
('Focus GX-850', 'Seasonic', '850W', '80+ Gold', 'Fully Modular', 149.99, NULL, 'Reliable 850W modular PSU'),
('SuperNOVA 750 G6', 'EVGA', '750W', '80+ Gold', 'Fully Modular', 129.99, '/evga-seeklogo.png', 'Popular 750W gaming PSU'),
('RM750x', 'Corsair', '750W', '80+ Gold', 'Fully Modular', 139.99, '/corsair.svg', 'Quiet and efficient 750W PSU'),
('Focus Plus 650', 'Seasonic', '650W', '80+ Gold', 'Semi-Modular', 109.99, NULL, 'Efficient 650W semi-modular PSU'),
('BR 600W', 'EVGA', '600W', '80+ Bronze', 'Non-Modular', 59.99, '/evga-seeklogo.png', 'Budget-friendly 600W PSU'),
('CV650', 'Corsair', '650W', '80+ Bronze', 'Non-Modular', 69.99, '/corsair.svg', 'Reliable entry-level PSU'),
('SuperNOVA 850 GT', 'EVGA', '850W', '80+ Gold', 'Fully Modular', 159.99, '/evga-seeklogo.png', 'High-performance 850W PSU'),
('HX1200', 'Corsair', '1200W', '80+ Platinum', 'Fully Modular', 299.99, '/corsair.svg', 'High-end 1200W platinum PSU');

-- Insert sample Cases
INSERT INTO cases (name, brand, form_factor, motherboard_support, dimensions, price, image, description) VALUES
('O11 Dynamic EVO', 'Lian Li', 'Mid Tower', 'ATX, Micro-ATX, Mini-ITX', '272 x 465 x 459 mm', 179.99, '/lian-li.svg', 'Premium showcase case with excellent airflow'),
('4000D Airflow', 'Corsair', 'Mid Tower', 'ATX, Micro-ATX, Mini-ITX', '230 x 453 x 466 mm', 109.99, '/corsair.svg', 'Popular airflow-focused case'),
('Define 7', 'Fractal Design', 'Mid Tower', 'ATX, Micro-ATX, Mini-ITX', '240 x 475 x 547 mm', 169.99, '/fractal-design-seeklogo.png', 'Silent case with sound dampening'),
('H7 Flow', 'NZXT', 'Mid Tower', 'ATX, Micro-ATX, Mini-ITX', '230 x 460 x 494 mm', 139.99, '/nzxt-seeklogo.png', 'Modern case with RGB lighting'),
('O11 Mini', 'Lian Li', 'Mini ITX', 'Mini-ITX', '220 x 365 x 340 mm', 139.99, '/lian-li.svg', 'Compact showcase mini-ITX case'),
('Core 1000', 'Fractal Design', 'Micro ATX', 'Micro-ATX, Mini-ITX', '175 x 395 x 350 mm', 49.99, '/fractal-design-seeklogo.png', 'Budget-friendly compact case'),
('5000D Airflow', 'Corsair', 'Full Tower', 'E-ATX, ATX, Micro-ATX, Mini-ITX', '245 x 520 x 550 mm', 159.99, '/corsair.svg', 'Spacious full tower with excellent airflow'),
('H9 Elite', 'NZXT', 'Mid Tower', 'ATX, Micro-ATX, Mini-ITX', '230 x 459 x 494 mm', 199.99, '/nzxt-seeklogo.png', 'Premium dual-chamber case'),
('North', 'Fractal Design', 'Mid Tower', 'ATX, Micro-ATX, Mini-ITX', '240 x 475 x 428 mm', 139.99, '/fractal-design-seeklogo.png', 'Elegant case with wood accent panel'),
('O11 Air Mini', 'Lian Li', 'Mini ITX', 'Mini-ITX', '220 x 365 x 340 mm', 109.99, '/lian-li.svg', 'Airflow-optimized mini-ITX case');

-- Insert sample Cooling
INSERT INTO cooling (name, brand, type, radiator_size, fan_size, height, price, image, description) VALUES
('NH-D15', 'Noctua', 'Air Cooler', NULL, '140mm', '165mm', 109.99, '/noctua-seeklogo.png', 'Premium dual-tower air cooler'),
('H150i Elite Capellix', 'Corsair', 'AIO Liquid', '360mm', '120mm', NULL, 189.99, '/corsair.svg', '360mm AIO with RGB lighting'),
('Dark Rock Pro 4', 'be quiet!', 'Air Cooler', NULL, '135mm', '162.8mm', 89.99, NULL, 'Silent dual-tower air cooler'),
('Kraken X73', 'NZXT', 'AIO Liquid', '360mm', '120mm', NULL, 219.99, '/nzxt-seeklogo.png', '360mm AIO with customizable LCD'),
('NH-U12S', 'Noctua', 'Air Cooler', NULL, '120mm', '158mm', 79.99, '/noctua-seeklogo.png', 'Compact single-tower air cooler'),
('H100i RGB Platinum', 'Corsair', 'AIO Liquid', '240mm', '120mm', NULL, 129.99, '/corsair.svg', '240mm AIO with RGB fans'),
('Dark Rock 4', 'be quiet!', 'Air Cooler', NULL, '120mm', '159.5mm', 74.99, NULL, 'Silent single-tower air cooler'),
('Kraken X63', 'NZXT', 'AIO Liquid', '280mm', '140mm', NULL, 169.99, '/nzxt-seeklogo.png', '280mm AIO with LCD display'),
('NH-C14S', 'Noctua', 'Air Cooler', NULL, '140mm', '115mm', 79.99, '/noctua-seeklogo.png', 'Low-profile air cooler for SFF builds'),
('iCUE H60i RGB Pro XT', 'Corsair', 'AIO Liquid', '120mm', '120mm', NULL, 79.99, '/corsair.svg', 'Compact 120mm AIO cooler');

-- Insert sample Motherboards
INSERT INTO motherboards (name, brand, chipset, form_factor, memory_slots, max_memory, socket, price, image, description) VALUES
('ROG Crosshair X670E Hero', 'ASUS', 'X670E', 'ATX', 4, '128GB', 'AM5', 699.99, '/asus-seeklogo.png', 'Premium X670E motherboard for enthusiasts'),
('Z790 AORUS Master', 'Gigabyte', 'Z790', 'ATX', 4, '128GB', 'LGA1700', 549.99, NULL, 'High-end Z790 motherboard with WiFi 6E'),
('MAG B650 Tomahawk WiFi', 'MSI', 'B650', 'ATX', 4, '128GB', 'AM5', 229.99, '/msi-seeklogo.png', 'Feature-rich B650 motherboard'),
('Prime B660M-A WiFi D4', 'ASUS', 'B660', 'Micro-ATX', 4, '128GB', 'LGA1700', 139.99, '/asus-seeklogo.png', 'Compact B660 motherboard with WiFi'),
('ROG Strix B650E-F Gaming WiFi', 'ASUS', 'B650E', 'ATX', 4, '128GB', 'AM5', 329.99, '/asus-seeklogo.png', 'Gaming-focused B650E motherboard'),
('MPG Z790 Carbon WiFi', 'MSI', 'Z790', 'ATX', 4, '128GB', 'LGA1700', 429.99, '/msi-seeklogo.png', 'Premium Z790 with carbon fiber design'),
('B550M Pro VDH WiFi', 'MSI', 'B550', 'Micro-ATX', 4, '128GB', 'AM4', 89.99, '/msi-seeklogo.png', 'Budget-friendly B550 micro-ATX board'),
('Z690 AORUS Elite AX', 'Gigabyte', 'Z690', 'ATX', 4, '128GB', 'LGA1700', 269.99, NULL, 'Well-rounded Z690 motherboard'),
('TUF Gaming X570-Plus WiFi', 'ASUS', 'X570', 'ATX', 4, '128GB', 'AM4', 189.99, '/asus-seeklogo.png', 'Durable X570 motherboard for gaming'),
('ProArt B550-Creator', 'ASUS', 'B550', 'ATX', 4, '128GB', 'AM4', 229.99, '/asus-seeklogo.png', 'Content creator focused B550 board');