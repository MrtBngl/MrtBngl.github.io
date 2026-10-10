# Proje Ana Görselleri

Kartların üstündeki 16:9 görsel alanları bu klasörden beslenir.

1. Görsellerinizi buraya koyun (önerilen: 1280×720, .png / .jpg / .webp):
   - `conflux.png` → ConFlux kartı
   - `pisas.png` → Pisas kartı
   - `geopulse.png` → geopulse-tr kartı
   - `privcloud.png` → PrivCloud kartı

2. Farklı isim kullanmak isterseniz `src/data/portfolio.ts`
   içindeki her projenin `image` alanını güncelleyin:
   ```ts
   image: "/images/conflux.png",
   ```

3. Dosya henüz eklenmemişse kartta şık bir yer tutucu görünür;
   dosya eklendiği anda otomatik olarak gerçek görsel gösterilir.
