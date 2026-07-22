import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/729gramscoffee.jpg";
import heroImg from "@/assets/hero-espresso.jpg";
import beansImg from "@/assets/beans.jpg";
import kopiImg from "@/assets/kopi-khop.jpg";
import coldbrewImg from "@/assets/coldbrew.jpg";
import toastieImg from "@/assets/toastie.jpg";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "729 Grams Coffee — Artisanal Roastery in Koregaon Park, Pune" },
      {
        name: "description",
        content:
          "Third-wave specialty coffee roastery & café in Koregaon Park, Pune. Direct-trade Indian lots, whiskey barrel-aged cold brew, Kopi Khop and experimental serves.",
      },
      { property: "og:title", content: "729 Grams Coffee — Artisanal Roastery in Koregaon Park, Pune" },
      {
        property: "og:description",
        content:
          "Third-wave specialty coffee roastery & café in Koregaon Park, Pune. Direct-trade Indian lots, whiskey barrel-aged cold brew, Kopi Khop and experimental serves.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const brews = [
  {
    tag: "Signature",
    name: "Whiskey Barrel-Aged Cold Brew",
    note: "Slow-steeped, aged in charred oak. Oak, vanilla, warm whiskey shadows.",
    img: coldbrewImg,
  },
  {
    tag: "Interactive",
    name: "Kopi Khop",
    note: "Indonesian upside-down glass ritual. Coffee meets saucer meets theatre.",
    img: kopiImg,
  },
  {
    tag: "House Bake",
    name: "Garlic Thecha Toastie",
    note: "Sourdough, Maharashtrian green-chilli thecha, molten cheese, roasted garlic.",
    img: toastieImg,
  },
];

const menu = [
  ["Flat White", "Cortado", "Iced Spanish Latte"],
  ["Sunburn — Espresso × Orange", "Iced Mango Matcha", "Espresso Matcha Latte"],
  ["Laal Maas Sourdough Sandwich", "Banh Mi (Lamb / Chicken)", "Mushroom Hummus Toastie"],
  ["Tiramisu French Toast", "Chocolate Basque Cheesecake", "Almond Croissant"],
];

export function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImg} alt="729 Grams Coffee" className="h-9 w-9 rounded-sm object-cover" />
            <span className="font-display text-lg tracking-widest">729 GRAMS</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#brews" className="hover:text-primary transition-colors">Brews</a>
            <a href="#roastery" className="hover:text-primary transition-colors">Roastery</a>
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
          </nav>
          <a
            href="#visit"
            className="text-xs uppercase tracking-[0.2em] px-4 py-2 border border-primary/60 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end grain">
        <img
          src={heroImg}
          alt="Espresso pouring into a glass cup"
          width={1600}
          height={1800}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32 w-full">
          <div className="max-w-3xl rise">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Est. Koregaon Park · Pune
            </p>
            <h1 className="font-serif text-[13vw] md:text-[8vw] leading-[0.9] tracking-tight">
              Coffee weighed
              <br />
              <em className="text-primary">to the gram.</em>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A third-wave roastery obsessed with single-origin Indian lots,
              barrel-aged experiments, and the quiet science of a perfect pour.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#brews"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-all"
              >
                Explore the Menu
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-3 border border-border px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider hover:border-primary transition-all"
              >
                Find the Café
              </a>
            </div>
          </div>
        </div>
        {/* corner meta */}
        <div className="hidden md:block absolute top-28 right-10 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right">
          <div>Lat 18.5362° N</div>
          <div>Lng 73.8961° E</div>
          <div className="mt-2 text-primary">07:00 — 23:00</div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/40 py-6 overflow-hidden bg-card/40">
        <div className="marquee-track flex whitespace-nowrap font-display text-4xl md:text-6xl text-primary/80">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {["SINGLE ORIGIN", "BARREL AGED", "DIRECT TRADE", "SLOW ROAST", "COLD BREW", "CUPPING"].map((w) => (
                <span key={w} className="mx-10 flex items-center gap-10">
                  {w}
                  <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="roastery" className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">01 — Philosophy</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Precision, <em>patience,</em> and a little rebellion.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We roast in small, honest batches — sourcing green from farms we
              know by name across Chikmagalur, Coorg and the Anamalais. Every
              bag is dated, weighed, and shipped at peak flavour.
            </p>
            <p>
              Beyond the classics, we tinker. Barrels borrowed from distilleries.
              Serves flipped upside down. Espresso stirred into orange juice.
              Coffee, when treated with reverence, has range.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/60">
              <Stat n="12+" label="Origins" />
              <Stat n="729g" label="Batch weight" />
              <Stat n="18h" label="Cold brew steep" />
            </div>
          </div>
        </div>
      </section>

      {/* BREWS */}
      <section id="brews" className="bg-card/40 border-y border-border/40 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">02 — The Bar</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] max-w-2xl">
                Serves worth <em>lingering</em> over.
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground max-w-xs">
              Ask the barista about the day's guest roast — we swap it weekly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {brews.map((b, i) => (
              <article
                key={b.name}
                className="group relative overflow-hidden rounded-lg bg-background border border-border/60 hover:border-primary/60 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                      {b.tag}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{b.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEANS SPLIT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src={beansImg}
            alt="Freshly roasted beans"
            width={1400}
            height={1000}
            loading="lazy"
            className="rounded-lg w-full h-auto"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg max-w-[220px] hidden md:block">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Roast log</div>
            <div className="font-display text-3xl leading-none">729.0g</div>
            <div className="text-xs mt-1 opacity-80">Chikmagalur SL-9 · Medium</div>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">03 — Roastery</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[0.95] mb-6">
            Single origin, <em>signed</em> by the farmer.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our green beans travel a short, transparent road. We pay above Fair
            Trade, roast within days of arrival, and put the farmer's name on
            the bag — because they earned it.
          </p>
          <ul className="space-y-4 text-sm">
            {[
              ["Origin", "India · Ethiopia · Colombia · Kenya"],
              ["Process", "Washed, Natural, Anaerobic, Barrel-aged"],
              ["Retail", "250g bags, whole or freshly ground"],
              ["Workshops", "Cupping & brewing classes, monthly"],
            ].map(([k, v]) => (
              <li key={k} className="grid grid-cols-[100px_1fr] gap-6 pb-3 border-b border-border/60">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary pt-1">{k}</span>
                <span className="text-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-card/40 border-y border-border/40 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">04 — Menu Highlights</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              A little sweet, <em>a little smoky.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Espresso Bar", "Cold & Curious", "Sourdough Kitchen", "Sweet Things"].map((title, i) => (
              <div key={title} className="border-t border-primary/40 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl tracking-widest">{title}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                </div>
                <ul className="space-y-4">
                  {menu[i].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center mt-16 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Average ₹1,200 – ₹1,600 for two · Full menu in-store
          </p>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-28 md:py-40 grain overflow-hidden">
        <img
          src={interiorImg}
          alt="Café interior at dusk"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">05 — Visit</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mb-8">
                Come sit under <em>the leaves.</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Pet-friendly. Wi-Fi-strong. Quiet corners for the deep-workers,
                a leafy patio for the long conversations. Baristas who'll
                happily nerd out about tasting notes.
              </p>
            </div>
            <div className="space-y-8">
              <InfoBlock label="Address">
                C 26, Lane 5, Vidyut Nagar
                <br />
                (beside Sai Mandir, across Lapiz Lazulli Apartments)
                <br />
                Koregaon Park, Pune
              </InfoBlock>
              <InfoBlock label="Hours">
                <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <span>Mon — Thu</span><span className="text-primary">07:00 — 22:00</span>
                  <span>Fri — Sun</span><span className="text-primary">07:00 — 23:00</span>
                </div>
              </InfoBlock>
              <InfoBlock label="Say Hello">
                hello@729grams.coffee
                <br />
                @729gramscoffee
              </InfoBlock>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="729 Grams" className="h-8 w-8 rounded-sm object-cover" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              729 Grams Coffee Roasters ® · Pune
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Weighed with love. Roasted with fire.
          </span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl text-primary leading-none">{n}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-primary pl-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{label}</div>
      <div className="text-foreground leading-relaxed">{children}</div>
    </div>
  );
}
