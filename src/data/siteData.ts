export interface Service {
  id: string;
  title: string;
  category: 'ozel-imalat' | 'tamirat-montaj' | 'kurumsal-ticari';
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  features: string[];
  waMessage: string;
}

export interface Review {
  id: string;
  author: string;
  platform: 'Google' | 'Yandex';
  rating: number;
  date: string;
  comment: string;
  serviceTag: string;
  isVerified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'genel' | 'olcu-fiyat' | 'tamir-montaj' | 'bolge';
}

export const BUSINESS_INFO = {
  name: "Sistem Marangoz",
  brandTitle: "Sistem Marangoz — Özel Ölçü Mobilya & İmalat",
  tagline: "2004'ten beri ahşap ve mobilya işleri.",
  establishedYear: 2004,
  phoneDisplay: "0535 316 19 50",
  phoneRaw: "+905353161950",
  whatsappRaw: "905353161950",
  address: "Soğanlı, Yalaz Sk. 9B, 34183 Bahçelievler / İstanbul",
  addressDistrict: "Bahçelievler / İstanbul",
  addressStreet: "Soğanlı, Yalaz Sk. 9B",
  addressPostal: "34183",
  workingHours: "Pazartesi - Cumartesi: 08:30 - 19:00",
  workingHoursShort: "Açık / 19:00'a kadar",
  instagram: "https://www.instagram.com/_sistem_mobilya/",
  googleRating: 4.9,
  googleReviewCount: 123,
  yandexRating: 5.0,
  yandexReviewCount: 11,
  totalExperienceYears: new Date().getFullYear() - 2004,
  coreMessage: "Ölçünüzü alıyoruz, ihtiyacınıza göre tasarlıyoruz, üretiyor ve zamanında monte ediyoruz."
};

export const createWhatsAppLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encoded}`;
};

export const SERVICES: Service[] = [
  // Özel Ölçü İmalat
  {
    id: "ozel-olcu-mobilya",
    title: "Özel Ölçü Mobilya İmalatı",
    category: "ozel-imalat",
    shortDesc: "Evinizin milimetrik ölçüsüne ve tarzınıza tam uyumlu, 1. sınıf malzemeden özel mobilya üretimi.",
    fullDesc: "Standart mobilyaların sığmadığı, girintili çıkıntılı duvarlar veya çatı katı gibi zor alanlar için milimetrik hassasiyetle özel tasarım üretiyoruz. Kaliteli MDF, suntalam ve mekanizmalarla evinizin her köşesini verimli kılın.",
    badge: "En Çok Tercih Edilen",
    features: ["Milimetrik yerinde ölçü", "Geniş renk & kapak seçeneği", "Dayanıklı MDF & Ahşap", "Sessiz frenli mekanizmalar"],
    waMessage: "Merhaba, özel ölçü mobilya yaptırmak istiyorum. Ölçü alımı ve fiyat bilgisi alabilir miyim?"
  },
  {
    id: "mutfak-dolabi",
    title: "Mutfak Dolabı",
    category: "ozel-imalat",
    shortDesc: "Ergonomik, nem tutmayan dayanıklı gövde, şık kapaklar ve geniş depolama alanlı mutfak çözümleri.",
    fullDesc: "Mutfak mimarinize özel, ankastre uyumlu, neme ve buhara dayanıklı mutfak dolapları üretiyoruz. Akrilik, membran veya lake kapak seçenekleriyle mutfağınızı dönüştürüyoruz.",
    badge: "Popüler",
    features: ["Ankastre ve cihaz yerleşimi", "Frenli ray & menteşe sistemleri", "Suya dayanıklı tezgah altı gövde", "Kullanışlı kiler çözümleri"],
    waMessage: "Merhaba, mutfak dolabı yaptırmak istiyorum. Tasarım, ölçü ve fiyat bilgisi alabilir miyim?"
  },
  {
    id: "portmanto",
    title: "Portmanto & Vestiyer",
    category: "ozel-imalat",
    shortDesc: "Giriş alanlarınızı düzenleyen, ayakkabılık, askılık ve gizli bölmeli şık portmanto tasarımları.",
    fullDesc: "Evinizin girişine ferahlık ve düzen katan, ayakkabı hacminize göre iç raf düzenlemesi yapılan dayanıklı portmanto ve vestiyer sistemleri.",
    badge: "Düzen Sağlar",
    features: ["Aynalı kapak seçeneği", "Gizli çekmece & raylı bölmeler", "Bölmesiz derin askı alanları", "Havalandırmalı ayakkabılıklar"],
    waMessage: "Merhaba, portmanto / vestiyer yaptırmak istiyorum. Ölçü alımı ve fiyat bilgisi verebilir misiniz?"
  },
  {
    id: "gardrop",
    title: "Gardırop & Köşe Dolabı",
    category: "ozel-imalat",
    shortDesc: "Sürgülü veya kapaklı, giysi alışkanlıklarınıza özel bölümlendirilmiş ray dolap ve gardıroplar.",
    fullDesc: "Yatak odanızın tavan yüksekliğine tam oturan, ölü alan bırakmayan, pantolonluk, kravatlık ve LED aydınlatmalı özel gardırop üretimi.",
    features: ["Tavandan tabana tam uyum", "Sürgülü / Akordeon / Kapaklı", "Köşe ve çatı altı çözümleri", "Sessiz sürgü mekanizması"],
    waMessage: "Merhaba, özel ölçü gardırop yaptırmak istiyorum. Fiyat ve detay öğrenebilir miyim?"
  },
  {
    id: "banyo-dolabi",
    title: "Banyo Dolabı & Kombi Dolabı",
    category: "ozel-imalat",
    shortDesc: "Suya ve neme dayanıklı banyo mobilyaları ile çirkin görüntü oluşturan kombi ve boruları gizleyen özel dolaplar.",
    fullDesc: "Banyonuzdaki dar alanları değerlendiren, lavabo altı ve çamaşır makinesi üstü dolaplar; ayrıca balkon ve mutfaktaki kombi ve tesisat borularını estetik şekilde kapatan dolap imalatı.",
    features: ["Nem & su dirençli malzeme", "Kombi & çamaşır makinesi gizleme", "Çirkin boru kapatma", "Hafif ve uzun ömürlü yapı"],
    waMessage: "Merhaba, banyo / kombi dolabı yaptırmak istiyorum. Ölçü ve fiyat bilgisi alabilir miyim?"
  },
  {
    id: "yatak-odasi",
    title: "Yatak Odası Mobilyaları",
    category: "ozel-imalat",
    shortDesc: "Karyola, komodin, şifonyer ve makyaj masasından oluşan size özel yatak odası setleri.",
    fullDesc: "Yatak odanızın boyutuna göre tasarlanan bazalı veya ahşap karyola, dokunmatik aydınlatmalı komodin ve makyaj üniteleri.",
    features: ["Sağlam ahşap & MDF iskelet", "Baza & depolama bölmeleri", "Özel şifonyer ölçüleri", "Sessiz ray sistemleri"],
    waMessage: "Merhaba, yatak odası mobilyası için özel ölçü fiyat teklifi almak istiyorum."
  },
  {
    id: "genc-odasi",
    title: "Genç & Çocuk Odası Mobilyaları",
    category: "ozel-imalat",
    shortDesc: "Çocukların çalışma ve oyun alanlarını optimize eden güvenli, fonksiyonel çalışma masalı dolap takımları.",
    fullDesc: "Kitaplık, çalışma masası ve dolabı tek konseptte buluşturan ergonomik genç odası çözümleri. Büyüyen çocukların ihtiyaçlarına uygun modüler imalat.",
    features: ["Çarpmaya karşı korumalı kenarlar", "Çalışma masalı dolap kombinleri", "Geniş kitaplık bölmeleri", "Uzun ömürlü bağlantılar"],
    waMessage: "Merhaba, genç odası mobilyası için ölçü ve fiyat bilgisi alabilir miyim?"
  },
  {
    id: "calisma-odasi-masa",
    title: "Özel Ölçü Çalışma Masası (253 cm vb.)",
    category: "ozel-imalat",
    shortDesc: "Ev ve ofis alanlarınıza milimetrik oturan, özel uzunluklarda (253 cm, L masa vb.) çalışma ve bilgisayar masaları.",
    fullDesc: "Odanızın iki duvarı arasına tam sığacak genişlikte (örneğin müşteri yorumlarımızda geçen 253 cm özel ölçü masa gibi) kablo kanallı, çekmeceli ve raf üniteli çalışma masaları.",
    badge: "Özel Tasarım",
    features: ["Duvardan duvara tam uyum", "Kablo kanalı ve priz yuvası", "Derin ve kilitli çekmeceler", "Çizilmeye dayanıklı yüzey"],
    waMessage: "Merhaba, özel ölçü çalışma masası yaptırmak istiyorum. Ölçü ve fiyat alabilir miyim?"
  },
  {
    id: "tv-unitesi",
    title: "TV Ünitesi & Duvar Üniteleri",
    category: "ozel-imalat",
    shortDesc: "Salon konseptinize uygun gizli kablo kanallı, kitaplıklı ve şömine detaylı modern TV üniteleri.",
    fullDesc: "Televizyonunuzun büyüklüğüne ve salonunuzun genişliğine göre tasarlanan konsol, duvar paneli ve sergileme raflı TV üniteleri.",
    features: ["Gizli kablo geçiş kanalları", "Duvara sıfır montaj", "LED aydınlatma entegrasyonu", "Konsol depolama alanları"],
    waMessage: "Merhaba, salonumuz için özel ölçü TV ünitesi yaptırmak istiyorum."
  },
  {
    id: "duvar-ve-raf-sistemleri",
    title: "Duvar Dolapları & Raf Sistemleri",
    category: "ozel-imalat",
    shortDesc: "Ölü alanları değerlendiren gömme duvar dolapları, kitaplıklar ve gizli bağlantılı ahşap raflar.",
    fullDesc: "Koridor, merdiven altı, niş alanları veya salonda şık depolama alanları oluşturan duvar dolapları ve ahşap raf sistemleri.",
    features: ["Gömme dolap imalatı", "Gizli konsol bağlantıları", "Yüksek taşıma kapasitesi", "Niş içi özel raflandırma"],
    waMessage: "Merhaba, gömme duvar dolabı / raf sistemi hakkında bilgi almak istiyorum."
  },
  {
    id: "cati-ve-kose-dolap",
    title: "Çatı Katı & Eğimli Alan Dolapları",
    category: "ozel-imalat",
    shortDesc: "Çatı tavan eğimine ve girintilere tam oturan, kullanılmayan açıları kullanışlı dolaba çeviren imalat.",
    fullDesc: "Çatı katlarındaki eğimli tavanlar standart dolaplar için imkansızdır. Sistem Marangoz olarak tavan eğim açısına göre açılı kesimle milimetrik imalat yapıyoruz.",
    badge: "Uzmanlık Alanımız",
    features: ["Açılı tavan kesim imalatı", "Maksimum hacim kazanımı", "Özel raylı iç bölmeler", "Derin köşe çözümleri"],
    waMessage: "Merhaba, çatı katım için eğimli özel ölçü dolap yaptırmak istiyorum. Ölçü alabilir misiniz?"
  },
  {
    id: "dolap-kapaklari",
    title: "Özel Dolap Kapakları & Değişimi",
    category: "ozel-imalat",
    shortDesc: "Mevcut gövdenizi bozmadan dolap kapaklarınızı (Membran, Akrilik, Lake) yenileme hizmeti.",
    fullDesc: "Mutfak veya gardırobunuzun gövdesi sağlam fakat kapakları eskidi mi? Tüm kapakları yeni nesil modern modellerle değiştirerek bütçenizi koruyoruz.",
    features: ["Mevcut gövdeye tam uyum", "Yavaşlatıcılı menteşe montajı", "Kulplu / Kulpsuz açılım", "Ekonomik mutfak yenileme"],
    waMessage: "Merhaba, mevcut dolaplarımın kapaklarını değiştirmek istiyorum. Fiyat alabilir miyim?"
  },

  // Tamirat & Montaj
  {
    id: "cekmece-ray-tamiri",
    title: "Çekmece & Ray Tamiri",
    category: "tamirat-montaj",
    shortDesc: "Düşen, takılan veya bozulan çekmece raylarının orijinal ve frenli mekanizmalarla değişimi.",
    fullDesc: "Ağırlaşan, takılan veya tabanı çöken çekmecelerinizi söküyor, sağlam frenli teleskopik raylarla yeniliyoruz. Küçük ama hayat kolaylaştıran hızlı tamir çözümü.",
    badge: "Hızlı Tamir",
    features: ["Frenli teleskopik ray değişimi", "Çöken çekmece altı güçlendirme", "Birebir orijinal ölçü değişimi", "Aynı gün yerinde müdahale"],
    waMessage: "Merhaba, çekmece ve ray tamiri için yardım alabilir miyim?"
  },
  {
    id: "amerikan-kapi-tamiri",
    title: "Kapı & Amerikan Kapı Tamiri",
    category: "tamirat-montaj",
    shortDesc: "Kapanmayan, sürtünen, kilit/mentesesi bozulan veya kırılan oda ve Amerikan kapı onarımı.",
    fullDesc: "Sürten kapı altlarının kesilmesi, kırılan kilit yerlerinin sağlamlaştırılması, gevşeyen menteşelerin ayarlanması ve kapı ayarları.",
    features: ["Kapı altı alt kesim & sürtme ayarı", "Kilit ve kol değişimi", "Menteşe sağlamlaştırma", "Kırık panel onarımı"],
    waMessage: "Merhaba, oda / Amerikan kapı tamiri için randevu alabilir miyim?"
  },
  {
    id: "mobilya-montaj-tadilat",
    title: "Mobilya Montajı & Demontaj",
    category: "tamirat-montaj",
    shortDesc: "İKEA, Koçtaş veya internetten alınan mobilyaların hatasız kurulumu ve taşınma demontajı.",
    fullDesc: "Yeni aldığınız veya taşınırken demonte edilen dolap, masa, konsol ve gardıropların teraziye alınarak sağlam şekilde montajı.",
    features: ["Hassas terazi ayarı", "Duvar sabitleme & güvenlik", "Eksik parça tamamlama", "Taşınma söküm-takım hizmeti"],
    waMessage: "Merhaba, mobilya montajı / demontajı hizmeti almak istiyorum."
  },
  {
    id: "marangozluk-tamirat",
    title: "Genel Marangozluk Tamirat İşleri",
    category: "tamirat-montaj",
    shortDesc: "Evdeki kırık ahşaplar, sarkan dolaplar, bozuk menteşeler ve her türlü ahşap onarım işi.",
    fullDesc: "Küçük iş demeden evinizdeki veya iş yerinizdeki tüm marangozluk problemlerine Salih Usta ve Bozo Usta güvencesiyle kalıcı çözümler.",
    features: ["Sarkan dolap kapak ayarı", "Kırık ahşap sandalye/masa onarımı", "Tezgah kesim & evye montajı", "Yerinde hızlı usta çözümü"],
    waMessage: "Merhaba, marangozluk tamirat işim var. Usta gönderebilir misiniz?"
  },

  // Kurumsal & Ticari
  {
    id: "isletme-ofis-mobilyalari",
    title: "İşletme & Ofis Mobilyaları",
    category: "kurumsal-ticari",
    shortDesc: "Ofisler, toplantı odaları ve çalışma alanları için dayanıklı, prestijli özel ahşap masalar ve dolaplar.",
    fullDesc: "Şirketiniz için özel boyutlu grup çalışma masaları, makam masaları, dosya arşiv dolapları ve keson üretimi.",
    features: ["Kurumsal renk & konsept uyumu", "Ağır hizmet arşiv dolapları", "Kablo kanallı masalar", "Toplantı masası imalatı"],
    waMessage: "Merhaba, ofisimiz için özel mobilya imalatı konusunda fiyat almak istiyorum."
  },
  {
    id: "magaza-lobi-mobilyalari",
    title: "Mağaza & Lobi Karşılama Mobilyaları",
    category: "kurumsal-ticari",
    shortDesc: "Oteller, klinikler, güzellik merkezleri ve mağazalar için özel tasarım danışma bankoları ve lobi alanları.",
    fullDesc: "Müşterilerinizi karşıladığınız lobi bankoları, teşhir rafları, vitrin stantları ve marka kimliğinize özel mobilya projeleri.",
    badge: "Prestij Projeleri",
    features: ["Özel aydınlatmalı banko üretimi", "Mağaza sergileme stantları", "Dayanıklı yüzey kaplamaları", "Zamanında teslimat garantisi"],
    waMessage: "Merhaba, mağaza / lobi karşılama mobilyası imalatı için görüşmek istiyorum."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Ahmet Y.",
    platform: "Google",
    rating: 5,
    date: "1 ay önce",
    comment: "Çatı katındaki eğimli ve zorlu alanımıza özel ölçü dolap yaptırdık. Salih Usta milimetrik çalıştı, bir milim dahi şaşma yok. Zamanında teslimat ve çok temiz montaj yaptılar. Kesinlikle tavsiye ederim.",
    serviceTag: "Çatı Katı Dolabı",
    isVerified: true
  },
  {
    id: "r2",
    author: "Zeynep K.",
    platform: "Google",
    rating: 5,
    date: "2 ay önce",
    comment: "Çalışma odamız için 253 cm uzunluğunda tam duvardan duvara masa ve üstüne dolap projesi çizmiştik. Tam hayal ettiğimiz gibi oldu. Bozo Usta ve ekibine titiz ve güler yüzlü çalışmaları için çok teşekkürler.",
    serviceTag: "253 cm Çalışma Masası",
    isVerified: true
  },
  {
    id: "r3",
    author: "Mehmet Can T.",
    platform: "Google",
    rating: 5,
    date: "3 hafta önce",
    comment: "Mutfak dolaplarımızı ve portmantomuzu yeniledik. Fiyatlar piyasaya göre gayet makul ve malzeme kalitesi 1. sınıf. Ölçü alımından montaja kadar Salih Usta sürekli ilgilendi.",
    serviceTag: "Mutfak & Portmanto",
    isVerified: true
  },
  {
    id: "r4",
    author: "Selin B.",
    platform: "Google",
    rating: 5,
    date: "1 ay önce",
    comment: "Amerikan kapımız sürekli sürtüyordu ve kilit yeri kırıktı. Sağ olsunlar aynı gün gelip hemen tamir ettiler. Küçük iş diye geri çevirmediler, usta gibi usta!",
    serviceTag: "Kapı Tamiri",
    isVerified: true
  },
  {
    id: "r5",
    author: "Erhan S.",
    platform: "Google",
    rating: 5,
    date: "3 ay önce",
    comment: "Balkondaki kombi dolabı ve banyo altı dolap yaptırdık. Nemden etkilenmeyecek harika bir malzeme kullanmışlar. Çok temiz çalıştılar, evde hiç toz bırakmadılar.",
    serviceTag: "Kombi & Banyo Dolabı",
    isVerified: true
  },
  {
    id: "r6",
    author: "Caner D.",
    platform: "Yandex",
    rating: 5,
    date: "1 ay önce",
    comment: "Ofisimizin lobi karşılama bankosunu ve dosya dolaplarını yaptırdık. İşletmemize çok prestijli bir hava kattı. Söz verdikleri günde eksiksiz getirdiler.",
    serviceTag: "Lobi & Ofis Mobilyası",
    isVerified: true
  },
  {
    id: "r7",
    author: "Fatma G.",
    platform: "Google",
    rating: 5,
    date: "4 ay önce",
    comment: "Çekmecelerimizin rayları bozulmuştu ve kapaklar sarmıyordu. Salih usta frenli raylarla değiştirdi, dolaplarımız sıfır gibi oldu. Makul fiyat ve dürüst esnaflık.",
    serviceTag: "Çekmece Ray Tamiri",
    isVerified: true
  },
  {
    id: "r8",
    author: "Murat H.",
    platform: "Yandex",
    rating: 5,
    date: "2 ay önce",
    comment: "Bahçelievler Soğanlı'daki dükkanlarına gidip sohbet ettik. Çok tecrübeli ve çözüm odaklı ustalar. Yatak odası köşe dolabını tam istediğimiz ölçüde yaptılar.",
    serviceTag: "Yatak Odası Dolabı",
    isVerified: true
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Ücretsiz İletişim & Randevu",
    desc: "WhatsApp veya telefon üzerinden ihtiyacınızı, yerinizi ve isteklerinizi dinliyoruz. Yaklaşık fikir ve ön bilgi sunuyoruz."
  },
  {
    step: "02",
    title: "Yerinde Milimetrik Ölçü",
    desc: "Bahçelievler ve İstanbul geneli adresinize gelerek hassas lazer ölçü alıyor, malzeme ve kapak örneklerini gösteriyoruz."
  },
  {
    step: "03",
    title: "Atölye İmalatı & Kalite Kontrol",
    desc: "2004'ten beri süregelen usta tecrübemizle atölyemizde 1. sınıf MDF ve dayanıklı mekanizmalarla üretimi yapıyoruz."
  },
  {
    step: "04",
    title: "Zamanında & Temiz Montaj",
    desc: "Söz verdiğimiz gün ve saatte montaj ekibimizle gelip evinizi kirletmeden titizlikle kuruyor, teslim ediyoruz."
  }
];

export const WHY_US_POINTS = [
  {
    title: "2004'ten Beri Kesintisiz Deneyim",
    desc: "20 yılı aşkın süredir Bahçelievler atölyemizde ahşaba şekil veriyor, binlerce mutlu ev ve iş yerine imza atıyoruz.",
    iconName: "Award"
  },
  {
    title: "4,9 / 5 Gerçek Müşteri Puanı",
    desc: "Google'da 123, Yandex'te 11 gerçek müşteri yorumu ve 4,9 yüksek memnuniyet oranıyla dürüst esnaflık sunuyoruz.",
    iconName: "Star"
  },
  {
    title: "Birebir Ölçüye Uygun İmalat",
    desc: "Çatı katları, 253 cm gibi özel masa ölçüleri veya girintili alanlarda 1 milim şaşmayan usta işçiliği.",
    iconName: "Ruler"
  },
  {
    title: "Zamanında & Temiz Teslimat",
    desc: "Söz verilen tarihe sadık kalır, montaj sonrası yaşam alanınızı pırıl pırıl temiz bırakırız.",
    iconName: "CheckCircle2"
  },
  {
    title: "Küçük Tamirden Büyük Projeye",
    desc: "Tek bir çekmece rayı veya kapı ayarından tüm ev mobilya imalatına kadar aynı ciddiyetle yaklaşıyoruz.",
    iconName: "Wrench"
  },
  {
    title: "Makul & Şeffaf Fiyat Politikası",
    desc: "Kaliteli malzemeyi aracı olmadan doğrudan atölyeden en uygun fiyat dengesiyle sunuyoruz.",
    iconName: "ShieldCheck"
  }
];

export const SERVICE_AREAS = [
  { name: "Bahçelievler", primary: true, desc: "Atölyemizin bulunduğu ana bölgemiz. Aynı gün ölçü ve hızlı hizmet." },
  { name: "Soğanlı", primary: true, desc: "Atölyemizin merkez adresi (Yalaz Sk. 9B). Dakikalar içinde adresinizdeyiz." },
  { name: "Şirinevler", primary: true, desc: "Özel ölçü dolap, mutfak ve tamirat işlerinde hızlı mobil ekip." },
  { name: "Kocasinan", primary: true, desc: "Mutfak yenileme, gardırop ve kapı tamirlerinde yerinde ölçü imkanı." },
  { name: "Yenibosna", primary: true, desc: "Ofis mobilyası, vestiyer ve gömme dolap imalat servisimiz." },
  { name: "Güngören", primary: true, desc: "Komşu ilçemizde ev ve iş yeri ahşap dekorasyon çözümleri." },
  { name: "Bakırköy", primary: true, desc: "Özel tasarım mobilyalar, banyo dolapları ve tadilat hizmeti." },
  { name: "Bağcılar", primary: true, desc: "Çatı katı dolapları, portmanto ve hızlı marangozluk tamirleri." },
  { name: "Küçükçekmece", primary: true, desc: "Mutfak ve gardırop imalatında yerinde keşif ve montaj." },
  { name: "Zeytinburnu", primary: true, desc: "Mağaza mobilyaları, kapı tamiri ve özel ölçü çalışma masaları." },
  { name: "İstanbul Geneli", primary: false, desc: "Büyük ölçekli özel mobilya projelerinde İstanbul'un tüm ilçelerine hizmet vermekteyiz." }
];

export const FAQS: FAQItem[] = [
  {
    category: "genel",
    question: "Özel ölçü mobilya yapıyor musunuz?",
    answer: "Evet! İşimizi standart hazır mobilyalardan ayıran en büyük özellik, evinizin veya iş yerinizin milimetrik ölçülerine özel üretim yapmamızdır. Çatı katları, dar koridorlar veya özel genişlikteki masalar tam ölçünüze göre imal edilir."
  },
  {
    category: "olcu-fiyat",
    question: "Ölçü almak için eve veya iş yerine geliyor musunuz?",
    answer: "Evet. Bahçelievler ve çevre ilçeler başta olmak üzere İstanbul genelinde adresinize gelerek hassas ölçü alıyoruz. Ölçü alımı sırasında malzeme kataloglarımızı da yanımızda getirip karar vermenizi kolaylaştırıyoruz."
  },
  {
    category: "olcu-fiyat",
    question: "Fiyatlar nasıl belirleniyor?",
    answer: "Fiyatlarımız; seçilen malzeme türü (MDF, Membran, Akrilik, Lake vb.), mobilyanın ölçüleri, kullanılacak aksam (frenli raylar, kalkar kapak mekanizmaları) ve tasarım detaylarına göre şeffaf şekilde hesaplanır. WhatsApp'tan ölçü veya fotoğraf göndererek ortalama bir fiyat teklifi alabilirsiniz."
  },
  {
    category: "genel",
    question: "Mutfak dolabı, portmanto ve gardırop yapıyor musunuz?",
    answer: "Kesinlikle. Mutfak dolabı, portmanto, vestiyer, ray dolap, gardırop, banyo dolabı, kombi dolabı ve TV ünitesi en çok imalatını yaptığımız ürün gruplarıdır."
  },
  {
    category: "tamir-montaj",
    question: "Mevcut mobilyalarda tamirat ve onarım yapıyor musunuz?",
    answer: "Evet. Düşen veya bozulan çekmece raylarının değişimi, sürtünce kapanmayan Amerikan kapı tamiri, sarkan dolap kapağı ayarları ve söküm-montaj işleri için deneyimli ustalarımız hizmet vermektedir."
  },
  {
    category: "tamir-montaj",
    question: "Montaj hizmetiniz var mı?",
    answer: "Ürettiğimiz tüm mobilyaların montajı kendi uzman ustalarımız tarafından yapılır. Ayrıca internetten veya yapı marketlerden aldığınız hazır mobilyaların da profesyonel kurulumunu yapıyoruz."
  },
  {
    category: "bolge",
    question: "Bahçelievler dışına hizmet veriyor musunuz?",
    answer: "Atölyemiz Bahçelievler Soğanlı'dadır. Ancak Güngören, Bakırköy, Bağcılar, Şirinevler, Yenibosna, Küçükçekmece, Zeytinburnu ve İstanbul genelinde uygun projeler için keşif, imalat ve montaj hizmeti veriyoruz."
  },
  {
    category: "genel",
    question: "İmalat ve teslimat süreci ne kadar sürer?",
    answer: "Teslimat süresi projenin büyüklüğüne göre değişmektedir. Tamirat ve küçük montaj işleri genellikle aynı gün veya 1-2 gün içinde; mutfak dolabı ve komple gardırop imalatları ise ölçü onayından itibaren ortalama 7-14 iş günü içerisinde tamamlanarak monte edilir."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Özel Ölçü Modern Akrilik Mutfak Dolabı",
    category: "Mutfak & Banyo",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz Bahçelievler özel ölçü akrilik kapaklı mutfak dolabı imalatı",
    desc: "Ankastre uyumlu, sessiz frenli mekanizmalı ve led aydınlatmalı beyaz akrilik mutfak dolabı imalatımız."
  },
  {
    id: "g2",
    title: "Giriş Alanı Aynalı Portmanto & Vestiyer",
    category: "Portmanto & Gardırop",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz özel ölçü portmanto vestiyer ayakkabılık imalatı",
    desc: "Giriş koridoruna milimetrik oturan, gizli çekmeceli ve boy aynalı ahşap dokulu vestiyer."
  },
  {
    id: "g3",
    title: "Çatı Katı Eğimli Tavan Gömme Gardırop",
    category: "Portmanto & Gardırop",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz çatı katı eğimli tavan özel ölçü ray dolap imalatı",
    desc: "Çatı katındaki açıya göre özel açılı kesilen, ölü alanları değerlendiren gardırop çözümü."
  },
  {
    id: "g4",
    title: "Duvar Kaplama 253 cm Ahşap Çalışma Masası",
    category: "Özel Masalar & Ofis",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz 253 cm özel ölçü ahşap çalışma masası ve kitaplık imalatı",
    desc: "İki duvar arasına 253 cm milimetrik oturan, gizli kablo kanallı çalışma odası masası."
  },
  {
    id: "g5",
    title: "Balkon Suya Dayanıklı Kombi & Depo Dolabı",
    category: "Mutfak & Banyo",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz suya neme dayanıklı kombi gizleme dolabı imalatı",
    desc: "Balkondaki çirkin kombi ve boru tesisatını estetik şekilde gizleyen havalandırmalı dolap."
  },
  {
    id: "g6",
    title: "Kurumsal Karşılama Bankosu & Lobi Mobilyası",
    category: "Özel Masalar & Ofis",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz mağaza lobi ahşap karşılama bankosu imalatı",
    desc: "İşletmeler ve lobi alanları için prestijli ahşap ve LED detaylı danışma bankosu imalatı."
  },
  {
    id: "g7",
    title: "Ahşap Çerçeveli Banyo Dolabı & Çamaşır Alanı",
    category: "Mutfak & Banyo",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz banyo lavabo altı ve çamaşır makinesi üstü dolap imalatı",
    desc: "Çamaşır ve kurutma makinesini kule tipi gizleyen, neme dayanıklı özel banyo ünitesi."
  },
  {
    id: "g8",
    title: "Çekmece Ray Yenileme & Kapı Tamiratı",
    category: "Tamirat & Tadilat",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    alt: "Sistem Marangoz frenli çekmece rayı değişimi ve marangozluk tamiratı",
    desc: "Bozuk çekmece raylarının frenli teleskopik mekanizmalarla saniyeler içinde yenilenmesi."
  }
];
