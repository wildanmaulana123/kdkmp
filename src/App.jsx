import { useEffect, useRef, useState } from 'react';

const images = {
  hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBroZME1qWOfy7vy5XQimuiPuOtFBZa366L6evPO5Uul3-ei8OCEaCf9vLbq_UwzoSF8n2kguHzzi59qQ5i8rTlJmlwJMcTgmCyB5zxXe-ya5tLudMUDDOBA_fy8xfoKkzTEz62DjZZhRHBj5yOfCakWqA1fv3Uo65fEb0VaBFXLMdJ5SpCY1P3sRxLOthzeSHzZlWY2ybVROQ2itFxIuf2DLWtt4yzd4Pa6HjbzQWFdrFOBtkcau662VIGm6z8tQuKok69FfDKl_o',
  farmer:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAp1n934fFUbWppHnPqglWv4L5nwhrSTJ9T_HW5fB-oVVC97uS8Chc5dQXaZE4l_0NqUpF0wQx0q6tcfIjlJcAoWFqKUtIFcZ2cwnVlEF7QkA8ljWzoBub_3l-hAVm5TwYhqzadgfg0YAcB3kQHN_zJTEyfSMwcaeRRP7DzKN5Slnu2jD6HSEQe4hkBTRQQUp41VoaOGIL0GEaM5WUulvLuXPXDYkS3e-hmvoIx_Hm9QzzmZ_0fmANKW9A-VU5XXhTwAPI_8gd35uo',
  pattern:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAKgWuxMT91BHUT2O5OmSUxcDUoHvRHEgrQyeJNkoOjlByOaJ7Fw5jgdE5LMHLkzMrTyR8rn8rBuhbWPmhTEX1VSSp_ibf8nlw8QMl5iOSs6MD8ZBJXq6VjBlHyc8wg4O3bUh_40zOTVVz6bGmcWcfoq_BY8bR01BZyIyn1c6NDBe_YofWOrkWouW9KUfUCA_cpw2VZWfbtzHoeOecSlKBb1G2RZkvKpRN2cIm_2nAmMq0vfUDlFis4osOPv-vopM5ZQk41sM5rMzg',
};

const leaders = [
  {
    name: 'Budi Santoso',
    role: 'Ketua Umum',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwz0AEKUh8bgogudGzMRaTELsPv32PO2cic6F6wT5mYauD5cwofIIKJmUmq1lxIQTtFg5VmuqdhXVrhNMjhhtum6Qzo7AUXol7bupj-_bQ8D6FcCUmGo6j01bfZzuf5LND7JadYK8VGaljDyr2LQohnXP566JiPFG9OuDFVD1luWa4OTeJgFxdApxmvgYyCl9l2CDz1W4ldfzpCKcch6Tk_IVBGJPrAWKVRzVbcd32fBemNi7slRVhUlsRvcxWR4Xsew7chZQpCx0',
  },
  {
    name: 'Siti Aminah',
    role: 'Sekretaris',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZnFYdsmWPPl3Dq95ctB8zGftHsXTLRU5Nfw6E9ueK5BFz7-juf8Vn62f3peST53x0tWCA_VZz611z3cIzQ-_jKf_dc0dacLDHX5OGBBdlmXZkR4Y03sW5ej3OvP435hASu9nlmVioTuR99Mwkzs0ljBtrxLtDgUqU4UWazNuwmzNqzSNN7s5wudZuymH8zRN0lNawjlZc9mSF4xydx1wOjrr758SH_P3Gh3X6zP9z2v1rLznrG7F9MAYoIbPOee9iSNp5_Jt0nMg',
  },
  {
    name: 'Andi Wijaya',
    role: 'Bendahara',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Vi5ewNKtEgGzqhgS-J7q9BWAzyK8KXmoteq3rGI4NmtjvAxzJUoBvuBSy3s7deUB1OfpMCZ6j0wudHE9JKdOJUxzSQ6gagRVuFLwFlFh3aJSCUkjuaUdMrF4n0x00MRv7Pkh59ZyXmii9tbYCPbRSB9IipJVyjwXbOkINktWnRRC2iE3UUfU_1-Myp5nlFqnR_viilDp5-USqGY_KLMHYmODu_Jfse5M7eEXA6s_8VJjny32dQCLIGQK1McNC0fvf2YS9c53-Fk',
  },
  {
    name: 'Hendra Putra',
    role: 'Kepala Divisi Operasional',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwShX0d65RkY33OuGVkoVQDse1WYqHHizcj3z8AaDwQy8vMkXl4Su2hcLScrRef9-5lCmJ-sW-3Zhj07PDPSzvgkMVfIcwa357zKmszKGdR5DOqw92FeSVvBHstfuRYOERsFAuVGzuohe3KajhDUaHYEoT0RQZtr80CTxX6fEjf_g4P7NWVsofARXVvQiKZID-wSMiysGhcuL0YcScOJgjtfthQyol0g3RIbx_n8Ixu_V3xjlkX2HaQzzqUHrCT0-SP-3xWysqW2I',
  },
];

const stats = [
  { icon: 'groups', target: 1500, suffix: '+', label: 'Jumlah Anggota' },
  { icon: 'agriculture', target: 500, suffix: ' Ha', label: 'Luas Lahan (Ha)' },
  { icon: 'eco', target: 10000, suffix: ' Ton', label: 'Panen (Ton/Tahun)' },
];

const values = [
  {
    icon: 'verified_user',
    title: 'Integritas',
    color: 'bg-primary-container text-on-primary-container',
    text: 'Kejujuran dan transparansi dalam setiap butir beras dan setiap transaksi.',
  },
  {
    icon: 'handshake',
    title: 'Gotong Royong',
    color: 'bg-secondary-container text-on-secondary-container',
    text: 'Kekuatan kami terletak pada kebersamaan dan kerja sama antar seluruh anggota.',
  },
  {
    icon: 'trending_up',
    title: 'Unggul',
    color: 'bg-primary-container text-on-primary-container',
    text: 'Berkomitmen untuk terus berinovasi mencapai standar kualitas tertinggi.',
  },
];

const certifications = [
  { icon: 'eco', label: 'Organik Indonesia', color: 'text-primary' },
  { icon: 'grade', label: 'Beras Premium', color: 'text-secondary' },
  { icon: 'verified', label: 'Halal Indonesia', color: 'text-primary' },
  { icon: 'security', label: 'BPOM RI', color: 'text-secondary' },
];

const whatsappUrl = 'https://wa.me/6289603511509?text=hallo%20admin';

const products = [
  {
    name: 'Beras Lokal Pilihan',
    category: 'Lokal',
    price: 'Rp 13.500/kg',
    icon: 'rice_bowl',
    image: 'https://loremflickr.com/800/520/rice,grain?lock=101',
    description: 'Beras harian dari petani mitra dengan tekstur pulen dan kualitas stabil.',
  },
  {
    name: 'Beras Premium Wangi',
    category: 'Premium',
    price: 'Rp 17.500/kg',
    icon: 'workspace_premium',
    image: 'https://loremflickr.com/800/520/white-rice,bowl?lock=102',
    description: 'Butir utuh, bersih, dan aroma lebih harum untuk kebutuhan rumah tangga modern.',
  },
  {
    name: 'Beras Organik Sehat',
    category: 'Organik',
    price: 'Rp 22.000/kg',
    icon: 'eco',
    image: 'https://loremflickr.com/800/520/rice,organic?lock=103',
    description: 'Dibudidayakan dengan praktik ramah lingkungan dan minim residu kimia.',
  },
  {
    name: 'Beras Pandan Wangi',
    category: 'Spesial',
    price: 'Rp 19.000/kg',
    icon: 'local_florist',
    image: 'https://loremflickr.com/800/520/rice,jasmine?lock=104',
    description: 'Pilihan spesial dengan aroma khas dan rasa lembut untuk sajian istimewa.',
  },
  {
    name: 'Beras Medium Ekonomis',
    category: 'Ekonomis',
    price: 'Rp 11.800/kg',
    icon: 'savings',
    image: 'https://loremflickr.com/800/520/rice,sack?lock=105',
    description: 'Solusi hemat untuk dapur usaha, katering, dan kebutuhan stok bulanan.',
  },
  {
    name: 'Beras Ketan Putih',
    category: 'Olahan',
    price: 'Rp 18.500/kg',
    icon: 'bakery_dining',
    image: 'https://loremflickr.com/800/520/sticky-rice,rice?lock=106',
    description: 'Ketan putih berkualitas untuk jajanan tradisional dan produksi makanan.',
  },
];

const makeOrderUrl = (productName) =>
  `https://wa.me/6289603511509?text=${encodeURIComponent(
    `hallo admin, saya mau pesan ${productName}`,
  )}`;

function MaterialIcon({ children, className = '', filled = false }) {
  return (
    <span className={`material-symbols-outlined ${filled ? 'material-filled' : ''} ${className}`}>
      {children}
    </span>
  );
}

function useCountUp(target, suffix) {
  const ref = useRef(null);
  const [value, setValue] = useState(`0${suffix}`);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;
        const increment = target / 50;
        const timer = window.setInterval(() => {
          current += increment;
          if (current >= target) {
            setValue(`${target.toLocaleString('id-ID')}${suffix}`);
            window.clearInterval(timer);
          } else {
            setValue(`${Math.floor(current).toLocaleString('id-ID')}${suffix}`);
          }
        }, 30);

        observer.unobserve(element);
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [suffix, target]);

  return { ref, value };
}

function Header({ onShowLogin, onShowHome, onShowAbout, onShowProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const navItems = [
    { label: 'Tentang Kami', href: '#', action: onShowAbout },
    { label: 'Produk & Layanan', href: '#', action: onShowProducts },
    { label: 'Edukasi', href: '#' },
    { label: 'Kemitraan', href: '#' },
    { label: 'Kontak', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <button
          className="flex h-20 items-center"
          type="button"
          onClick={() => {
            setActiveNav('Dashboard');
            onShowHome();
          }}
          aria-label="Kembali ke beranda"
        >
          <img
            className="h-[68px] w-[68px] shrink-0 object-contain"
            src="/logo-desa.png"
            alt="Logo KDMP Sindangjaya"
          />
        </button>

        <nav className="hidden items-center gap-gutter font-body-md text-body-md md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              className={`border-b-2 pb-1 font-semibold transition-colors ${
                activeNav === item.label
                  ? 'border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:border-secondary hover:text-primary'
              }`}
              href={item.href}
              onClick={(event) => {
                setActiveNav(item.label);
                if (item.action) {
                  event.preventDefault();
                  item.action();
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary transition-opacity hover:opacity-80"
            type="button"
            onClick={() => {
              setActiveNav('');
              onShowLogin();
            }}
          >
            Pendaftaran Anggota
          </button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant text-primary md:hidden"
          type="button"
          aria-label="Buka navigasi"
          onClick={() => setIsOpen((open) => !open)}
        >
          <MaterialIcon>{isOpen ? 'close' : 'menu'}</MaterialIcon>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-outline-variant bg-surface px-margin-mobile py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`border-l-4 py-1 pl-3 font-semibold transition-colors ${
                  activeNav === item.label
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:border-secondary hover:text-primary'
                }`}
                href={item.href}
                onClick={(event) => {
                  setActiveNav(item.label);
                  setIsOpen(false);
                  if (item.action) {
                    event.preventDefault();
                    item.action();
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-on-primary"
              type="button"
              onClick={() => {
                setActiveNav('');
                setIsOpen(false);
                onShowLogin();
              }}
            >
              Pendaftaran Anggota
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function LoginPage({ onShowHome }) {
  return (
    <main className="min-h-screen bg-surface-bright">
      <section className="mx-auto flex min-h-screen max-w-container-max items-center justify-center px-margin-mobile py-section-padding md:px-margin-desktop">
        <div className="w-full max-w-[460px] rounded-2xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <button
            className="mb-8 flex items-center gap-2 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            type="button"
            onClick={onShowHome}
          >
            <MaterialIcon>arrow_back</MaterialIcon>
            Kembali ke beranda
          </button>

          <h2 className="font-headline-md text-headline-md text-primary">Login Anggota</h2>
          <p className="mt-2 text-on-surface-variant">
            Masukkan akun yang sudah terdaftar untuk melanjutkan.
          </p>

          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-primary">Email atau Nomor HP</span>
              <input
                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="text"
                placeholder="contoh: anggota@email.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-primary">Password</span>
              <input
                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="password"
                placeholder="Masukkan password"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-on-surface-variant">
                <input
                  className="rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                />
                Ingat saya
              </label>
              <a className="font-semibold text-secondary hover:underline" href="#">
                Lupa password?
              </a>
            </div>

            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
              type="submit"
            >
              Masuk Portal
              <MaterialIcon>login</MaterialIcon>
            </button>
          </form>

          <div className="mt-6 rounded-lg bg-secondary-container/30 p-4 text-sm text-on-secondary-container">
            Belum memiliki akun? Hubungi admin koperasi untuk aktivasi pendaftaran anggota baru.
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-surface-bright">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-container-max items-center justify-center px-margin-mobile py-section-padding text-center md:px-margin-desktop">
        <h1 className="font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
          Tentang Kami
        </h1>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero})` }}
        aria-hidden="true"
      />
      <div className="hero-gradient absolute inset-0 z-10" />
      <div className="relative z-20 mx-auto flex w-full max-w-container-max items-center px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[640px]">
          <h1 className="mb-stack-md font-display-lg text-display-lg-mobile text-on-primary md:text-display-lg">
            Memberdayakan Petani, Menyejahterakan Bangsa
          </h1>
          <p className="mb-stack-lg font-body-lg text-body-lg text-on-primary/90">
            Melalui inovasi teknologi dan kolaborasi berkelanjutan, kami membangun ekosistem
            pertanian padi yang adil dan berdaya saing global.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-secondary-container px-8 py-4 text-lg font-bold text-on-secondary-container transition-transform hover:scale-105">
              Mulai Kemitraan
              <MaterialIcon>arrow_forward</MaterialIcon>
            </button>
            <button className="rounded-xl border-2 border-on-primary px-8 py-4 text-lg font-bold text-on-primary transition-colors hover:bg-on-primary/10">
              Pelajari Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, target, suffix, label }) {
  const { ref, value } = useCountUp(target, suffix);

  return (
    <div className="rounded-lg border-b-4 border-secondary bg-surface-container-low p-stack-lg text-center transition-transform hover:-translate-y-2">
      <MaterialIcon filled className="mb-stack-sm text-5xl text-secondary">
        {icon}
      </MaterialIcon>
      <h3 ref={ref} className="font-display-lg text-display-lg text-primary">
        {value}
      </h3>
      <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
        {label}
      </p>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-surface py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang-kami" className="bg-surface-bright py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <div
              className="aspect-square rounded-full border-8 border-surface-container-highest bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(${images.farmer})` }}
              role="img"
              aria-label="Petani padi Indonesia tersenyum di area persawahan."
            />
            <div className="absolute -bottom-8 -right-8 hidden rounded-2xl bg-primary p-8 text-on-primary lg:block">
              <p className="font-display-lg text-display-lg-mobile italic">Sejak 1995</p>
              <p className="font-label-caps text-label-caps">Berdedikasi untuk Negeri</p>
            </div>
          </div>

          <div className="space-y-stack-lg">
            <div>
              <span className="font-label-caps text-label-caps font-bold uppercase tracking-widest text-secondary">
                Siapa Kami
              </span>
              <h2 className="mb-stack-md mt-2 font-display-lg text-headline-md text-primary md:text-display-lg">
                Menjaga Warisan, Menciptakan Masa Depan
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Berawal dari inisiatif sekelompok petani lokal di Jawa Barat, KDKMP kini telah
                berkembang menjadi koperasi agribisnis modern yang melayani ribuan petani di seluruh
                Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-stack-md sm:grid-cols-2">
              <div className="rounded-xl border border-outline-variant bg-white p-stack-md shadow-sm">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                  <MaterialIcon className="text-secondary">visibility</MaterialIcon> Visi
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Menjadi koperasi tani terbaik di Asia Tenggara yang mandiri dan berkelanjutan.
                </p>
              </div>
              <div className="rounded-xl border border-outline-variant bg-white p-stack-md shadow-sm">
                <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                  <MaterialIcon className="text-secondary">task_alt</MaterialIcon> Misi
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Meningkatkan produktivitas petani melalui mekanisasi dan akses modal yang adil.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-12 text-center font-headline-md text-headline-md text-primary">
            Nilai-Nilai Utama Kami
          </h3>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="group p-stack-lg text-center">
                <div
                  className={`mx-auto mb-stack-md flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${value.color}`}
                >
                  <MaterialIcon className="text-3xl">{value.icon}</MaterialIcon>
                </div>
                <h4 className="mb-2 font-headline-sm text-headline-sm font-bold">{value.title}</h4>
                <p className="text-on-surface-variant">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="bg-surface py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps font-bold uppercase tracking-widest text-secondary">
              Produk & Layanan
            </span>
            <h2 className="mt-2 font-display-lg text-headline-md text-primary md:text-display-lg">
              Pilihan Beras dari Petani Mitra
            </h2>
            <p className="mt-stack-md text-on-surface-variant">
              Produk tersedia untuk kebutuhan rumah tangga, usaha kuliner, dan pembelian grosir
              koperasi.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi Pesanan
            <MaterialIcon>chat</MaterialIcon>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-surface-container-low">
                <img
                  className="h-full w-full object-cover"
                  src={product.image}
                  alt={`Gambar ${product.name}`}
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary-container shadow-sm">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-container text-on-primary-container">
                  <MaterialIcon className="text-3xl">{product.icon}</MaterialIcon>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary">{product.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-on-surface-variant">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-outline-variant pt-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Harga mulai
                    </p>
                    <p className="font-display-lg text-2xl font-bold text-primary">
                      {product.price}
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
                    href={makeOrderUrl(product.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pesan
                    <MaterialIcon>arrow_forward</MaterialIcon>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-surface">
      <Products />
    </main>
  );
}

function Certifications() {
  return (
    <section className="bg-surface-container py-16">
      <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <p className="mb-stack-lg font-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
          Kualitas & Standar Internasional
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-20">
          {certifications.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <MaterialIcon filled className={`text-4xl ${item.color}`}>
                  {item.icon}
                </MaterialIcon>
              </div>
              <span className="text-sm font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leaders() {
  return (
    <section className="bg-surface py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display-lg text-headline-md text-primary md:text-display-lg">
            Pengurus Koperasi
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Dipimpin oleh individu-individu berpengalaman yang berdedikasi tinggi untuk kemajuan
            ekonomi kerakyatan.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="rounded-2xl border border-outline-variant bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                className="mb-4 aspect-[4/5] rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${leader.image})` }}
                role="img"
                aria-label={`Foto ${leader.name}`}
              />
              <h4 className="font-headline-sm text-headline-sm font-bold text-primary">
                {leader.name}
              </h4>
              <p className="font-medium text-secondary">{leader.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${images.pattern})` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-stack-md font-display-lg text-headline-md text-on-primary md:text-display-lg">
          Siap Menjadi Bagian dari Perubahan?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-body-lg text-on-primary/80">
          Bergabunglah dengan AgroCoop hari ini dan rasakan manfaat nyata dari koperasi yang modern
          dan transparan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-secondary-container px-10 py-4 font-bold text-on-secondary-container transition-transform hover:scale-105">
            Daftar Sekarang
          </button>
          <a
            className="rounded-full border border-on-primary bg-transparent px-10 py-4 font-bold text-on-primary transition-colors hover:bg-on-primary/10"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto w-full bg-surface-container-highest">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-padding md:grid-cols-4 md:px-margin-desktop">
        <div>
          <span className="mb-stack-md block font-headline-sm text-headline-sm text-primary">
            AgroCoop
          </span>
          <p className="font-body-md leading-relaxed text-on-surface-variant">
            Koperasi Petani Padi Sejahtera terdepan dalam inovasi pertanian dan pemberdayaan ekonomi
            lokal.
          </p>
        </div>
        <FooterLinks title="Navigasi" links={['Tentang Kami', 'Program Kemitraan', 'Laporan Tahunan']} />
        <FooterLinks title="Bantuan" links={['Informasi Kontak', 'Lokasi Gudang', 'Syarat & Ketentuan']} />
        <div>
          <h5 className="mb-stack-md font-bold text-primary">Newsletter</h5>
          <p className="mb-4 text-sm text-on-surface-variant">
            Dapatkan update terbaru seputar pertanian.
          </p>
          <form className="flex">
            <input
              className="w-full rounded-l-lg border border-outline-variant bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email Anda"
              type="email"
            />
            <button className="rounded-r-lg bg-primary px-4 py-2 font-bold text-on-primary">
              Kirim
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-container-max border-t border-outline-variant px-margin-mobile py-8 text-center text-sm text-on-surface-variant md:px-margin-desktop">
        &copy; 2024 Koperasi Petani Padi Sejahtera. Seluruh Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h5 className="mb-stack-md font-bold text-primary">{title}</h5>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a className="text-on-surface-variant underline transition-all hover:text-secondary" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 md:bottom-8 md:right-8"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi melalui WhatsApp"
    >
      <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'login' ? (
        <LoginPage onShowHome={() => setPage('home')} />
      ) : (
        <>
          <Header
            onShowLogin={() => setPage('login')}
            onShowHome={() => setPage('home')}
            onShowAbout={() => setPage('about')}
            onShowProducts={() => setPage('products')}
          />
          {page === 'about' ? (
            <AboutPage />
          ) : page === 'products' ? (
            <ProductsPage />
          ) : (
            <>
              <main>
                <Hero />
                <Stats />
                <About />
                <Certifications />
                <Leaders />
                <Cta />
              </main>
              <Footer />
              <WhatsAppButton />
            </>
          )}
        </>
      )}
    </>
  );
}
