import { ArrowRight, BookOpen, HeartHandshake, MapPin, Play, Sparkles, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactStrip, EventCard, imageUrls, PageFrame, SectionIntro } from "@/components/SiteLayout";

const ministries = [
  { icon: HeartHandshake, number: "01", title: "Sunday worship", body: "A warm, reverent gathering centred on Scripture, prayer, and the joy of being together." },
  { icon: BookOpen, number: "02", title: "Trinity Academy", body: "A nurturing school environment where academic confidence and Christlike character grow side by side." },
  { icon: Users, number: "03", title: "Youth & families", body: "Safe, energising spaces for young people to ask questions, build friendships, and lead with purpose." },
];

export default function Home() {
  return (
    <PageFrame>
      <main>
        <section className="hero-section">
          <img src={imageUrls.worship} alt="A congregation gathered in worship" className="hero-image" />
          <div className="hero-overlay" />
          <div className="container relative z-10 flex min-h-[680px] items-end pb-20 pt-32 md:min-h-[760px] md:pb-28">
            <div className="max-w-3xl text-white">
              <p className="eyebrow eyebrow-light">A church, a school, a family</p>
              <h1 className="display-title mt-4">A place to <em>belong,</em> believe, and become.</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">Christian Trinity Centre is a Christ-centred community in Kenya helping people discover hope, grow in faith, and make a lasting difference.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="button button-gold">Plan your visit <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/about" className="button button-ghost">Discover our story</Link>
              </div>
            </div>
          </div>
          <div className="hero-note hidden lg:block"><span className="hero-note-line" /><span>Rooted in Christ<br />Ready to serve</span></div>
        </section>

        <section className="welcome-section section-pad">
          <div className="container grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="image-frame image-frame-tall"><img src={imageUrls.community} alt="Community members sharing time together" /></div>
              <div className="image-stamp"><Sparkles className="h-5 w-5" /><span>One family<br />in Christ</span></div>
            </div>
            <div>
              <SectionIntro eyebrow="Welcome home" title="Faith that moves beyond Sunday." body="We believe church is more than a building or a weekly service. It is a family that shows up — in classrooms, neighbourhoods, kitchens, and ordinary moments where love becomes visible." />
              <div className="mt-8 grid gap-6 border-t border-[var(--line)] pt-7 sm:grid-cols-2">
                <div><p className="stat-number">15+</p><p className="stat-label">Years of faithful presence</p></div>
                <div><p className="stat-number">3</p><p className="stat-label">Ways to grow: church, school, community</p></div>
              </div>
              <Link href="/about" className="text-link mt-8">Meet our community <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <section className="teal-section section-pad">
          <div className="container">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro eyebrow="How we serve" title="Many expressions. One centre." body="Every ministry is a doorway into deeper relationship with God and one another." light /><Link href="/ministries" className="text-link text-white">View all ministries <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {ministries.map(({ icon: Icon, number, title, body }) => <article key={title} className="ministry-card"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-[var(--gold)]" /><span className="font-serif text-4xl text-white/15">{number}</span></div><h3 className="mt-12 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{body}</p><Link href="/ministries" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">Explore <ArrowRight className="h-4 w-4" /></Link></article>)}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--paper)]">
          <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div><p className="eyebrow">The next generation</p><h2 className="section-title mt-3">Young lives. <span className="text-[var(--gold-dark)]">Bright futures.</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted-ink)]">Our youth and school ministries create room for curiosity, courage, and a faith that feels real in everyday life. We are committed to equipping young people to lead, serve, and flourish.</p><div className="mt-8 flex flex-wrap gap-3"><span className="pill">Mentorship</span><span className="pill">Creative arts</span><span className="pill">Academic support</span></div><Link href="/ministries" className="button button-dark mt-10">See youth ministries <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="relative"><div className="image-frame"><img src={imageUrls.youth} alt="Young people smiling together" /></div><div className="play-card"><div className="play-button"><Play className="ml-0.5 h-4 w-4 fill-current" /></div><span><strong>Stories of hope</strong><small>Hear from our community</small></span></div></div>
          </div>
        </section>

        <section className="section-pad"><div className="container"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionIntro eyebrow="Make room in your calendar" title="Gatherings that shape us." /><Link href="/events" className="text-link">See all events <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-12 grid gap-4"> <EventCard date="14 SEP" title="Community Sunday" type="Gathering" detail="A joyful morning of worship, shared lunch, and stories from our neighbourhood partners." /><EventCard date="21 SEP" title="Youth creative lab" type="Youth" detail="An afternoon for music, design, conversation, and discovering your gifts." /><EventCard date="04 OCT" title="Foundations of faith" type="Course" detail="A four-week conversation for anyone curious about the Christian story." /></div></div></section>

        <section className="map-note-section"><div className="container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between"><div className="flex items-start gap-4"><div className="icon-circle"><MapPin className="h-5 w-5" /></div><div><p className="font-semibold text-[var(--ink)]">Find your way to Christian Trinity Centre</p><p className="mt-1 text-sm text-[var(--muted-ink)]">Kilimani & Makhonge, Kenya · Sunday worship starts at 9:00 AM</p></div></div><Link href="/contact" className="text-link">Get directions <ArrowRight className="h-4 w-4" /></Link></div></section>
        <ContactStrip />
      </main>
    </PageFrame>
  );
}
