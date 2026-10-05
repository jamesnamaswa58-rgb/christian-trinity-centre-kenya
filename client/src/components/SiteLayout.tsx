import { Link, useLocation } from "wouter";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cross3D from "@/components/Cross3D";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export const imageUrls = {
  worship: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=85",
  community: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
  teaching: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  youth: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
  prayer: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1200&q=85",
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
          <span className="brand-mark">✦</span>
          <span>
            <span className="brand-name">Christian Trinity</span>
            <span className="brand-subtitle">Centre · Kenya</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("nav-link", location === item.href && "nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="nav-give-link">
            Get involved <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-button lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn("mobile-nav-link", location === item.href && "mobile-nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="button button-primary mt-3 justify-center">
            Get involved <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="brand-lockup mb-6 inline-flex">
            <span className="brand-mark brand-mark-dark">✦</span>
            <span>
              <span className="brand-name">Christian Trinity</span>
              <span className="brand-subtitle">Centre · Kenya</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-white/60">
            A Christ-centred community growing disciples, nurturing young minds, and serving our neighbours with compassion.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="social-icon" href="https://www.facebook.com" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a className="social-icon" href="https://www.instagram.com" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <div className="footer-links">
            <Link href="/about">Our story</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/events">Events & gatherings</Link>
            <Link href="/contact">Visit us</Link>
          </div>
        </div>
        <div>
          <p className="footer-heading">Gather with us</p>
          <div className="footer-links text-sm">
            <span>Sunday worship · 9:00 AM</span>
            <span>Wednesday prayer · 6:00 PM</span>
            <span>Saturday youth · 3:00 PM</span>
          </div>
        </div>
        <div>
          <p className="footer-heading">Find us</p>
          <div className="footer-links text-sm">
            <span className="flex gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" /> Kilimani & Makhonge, Kenya</span>
            <a href="tel:+254700000000" className="flex gap-2"><Phone className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" /> +254 700 000 000</a>
            <a href="mailto:hello@christiantrinitycentre.org" className="flex gap-2"><Mail className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" /> hello@christiantrinitycentre.org</a>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Christian Trinity Centre Kenya</span>
        <span>Rooted in Christ · Ready to serve</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="page-frame min-h-screen bg-[var(--cream)] text-[var(--ink)]"><div className="site-cross-background" aria-hidden="true"><Cross3D /></div><SiteHeader />{children}<SiteFooter /></div>;
}

export function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", light && "text-white")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {body && <p className={cn("mt-5 text-base leading-8", light ? "text-white/70" : "text-[var(--muted-ink)]")}>{body}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, body, image }: { eyebrow: string; title: string; body: string; image: string }) {
  return (
    <section className="page-hero">
      <img src={image} alt="" />
      <div className="page-hero-overlay" />
      <div className="container relative z-10 py-28 text-white md:py-36">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="display-title max-w-3xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/75">{body}</p>
      </div>
    </section>
  );
}

export function EventCard({ date, title, type, detail }: { date: string; title: string; type: string; detail: string }) {
  return (
    <article className="event-card group">
      <div className="event-date"><span>{date.split(" ")[0]}</span><strong>{date.split(" ")[1]}</strong></div>
      <div className="flex-1">
        <p className="eyebrow mb-2">{type}</p>
        <h3 className="text-xl font-semibold text-[var(--ink)]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted-ink)]">{detail}</p>
      </div>
      <ChevronDown className="h-5 w-5 -rotate-90 text-[var(--gold-dark)] transition-transform duration-200 group-hover:translate-x-1" />
    </article>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return <div className="container pt-8 text-sm text-[var(--muted-ink)]"><Link href="/" className="hover:text-[var(--teal)]">Home</Link><span className="mx-2 text-[var(--gold-dark)]">/</span>{current}</div>;
}

export function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="eyebrow eyebrow-light">There is a place for you here</p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">Come as you are. Grow with us.</h2>
        </div>
        <Link href="/contact" className="button button-gold">Plan your visit <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
