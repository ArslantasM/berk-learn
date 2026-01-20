# BERK Learn - Sistem Programlama 101

<p align="center">
  <img src="https://raw.githubusercontent.com/ArslantasM/berk-learn/main/assets/logo.png" width="180" alt="BERK Logo">
</p>

<p align="center">
  <strong>🚀 Modern Sistem Programlama Eğitimi</strong><br>
  <em>Systems Programming 101</em>
</p>

<p align="center">
  <a href="https://arslantasm.github.io/berk-learn/">🌐 Canlı Demo</a> •
  <a href="https://github.com/ArslantasM/berk">📦 BERK Ana Repo</a> •
  <a href="#içerik">📚 İçerik</a>
</p>

---

## 🎯 Hakkında

**BERK Learn**, BERK programlama dilini öğrenmek için hazırlanmış interaktif bir eğitim platformudur. Türkçe ve İngilizce dil desteği ile sistem programlamanın temellerinden ileri seviye konulara kadar kapsamlı bir müfredat sunar.

## ✨ Özellikler

- 🇹🇷 **Türkçe & İngilizce** - Tam çift dil desteği
- 📊 **3 Eğitim Seviyesi** - Ortaokul, Lise, Üniversite
- 🤖 **AI Agent Desteği** - llms.txt ile AI araçları entegrasyonu
- 📱 **Responsive Tasarım** - Mobil uyumlu arayüz
- 🎨 **Modern UI** - Animasyonlu, profesyonel görünüm
- 📈 **İlerleme Takibi** - Ders tamamlama sistemi

## 📚 İçerik

| Ders | Konu | Açıklama |
|------|------|----------|
| 01 | BERK'e Giriş | Dili tanıma, kurulum, ilk program |
| 02 | Değişkenler ve Türler | Veri tipleri, değişken tanımlama |
| 03 | Kontrol Akışı | if, match, döngüler |
| 04 | Fonksiyonlar | fn, parametreler, dönüş değerleri |
| 05 | Bellek Yönetimi | Stack, heap, ownership |
| 06 | Yapılar ve Enum'lar | Struct, enum tanımlama |
| 07 | Hata Yönetimi | Sonuç, Hata türleri |
| 08 | Modüller | Kod organizasyonu |
| 09 | Koleksiyonlar | Dizi, liste, harita |
| 10 | Sonraki Adımlar | İleri konular, kaynaklar |

## 🚀 Kurulum

### GitHub Pages ile

Bu repo GitHub Pages ile doğrudan yayınlanabilir:

1. Fork yapın veya kendi hesabınıza kopyalayın
2. Settings → Pages → Source: "main" branch, "/ (root)"
3. Birkaç dakika içinde `https://username.github.io/berk-learn/` adresinde yayında!

### Yerel Geliştirme

```bash
# Repoyu klonlayın
git clone https://github.com/ArslantasM/berk-learn.git
cd berk-learn

# Basit HTTP sunucusu ile çalıştırın
python -m http.server 8000
# veya
npx serve
```

Tarayıcıda `http://localhost:8000` adresine gidin.

## 📁 Yapı

```
berk-learn/
├── index.html          # Ana sayfa (kurs listesi)
├── landing.html        # Giriş sayfası (dil seçimi)
├── ders01.html         # Ders 1: BERK'e Giriş
├── ders02.html         # Ders 2: Değişkenler
├── ...
├── ders10.html         # Ders 10: Sonraki Adımlar
├── course.json         # Kurs metadata
├── css/
│   └── style.css       # Ana stil dosyası
├── js/
│   └── main.js         # JavaScript fonksiyonları
├── sitemap.xml         # SEO için site haritası
├── robots.txt          # Arama motoru yönergeleri
└── llms.txt            # AI agent desteği
```

## 🤖 AI Agent Desteği

Bu site [llms.txt](https://llmstxt.org/) standardını destekler. AI araçları `/llms.txt` endpoint'inden site yapısını ve içeriğini anlayabilir.

## 🔗 İlişkili Projeler

- [BERK](https://github.com/ArslantasM/berk) - Ana BERK programlama dili
- [BERK Pages](https://arslantasm.github.io/berk/) - BERK resmi web sitesi

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunun

Katkılarınızı bekliyoruz! Lütfen:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

<p align="center">
  <strong>⚡ BERK ile Geleceği Programla!</strong><br>
  <sub>Made with ❤️ in Turkey</sub>
</p>
