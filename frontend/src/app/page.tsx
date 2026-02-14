import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Layout, ShoppingCart, Code, Database, Server, Smartphone, Globe, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getAllServices, getPageBySlug } from "@/lib/wordpress";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Accordion } from "@/components/ui/Accordion";
import { ProfileImage } from "@/components/ui/ProfileImage";

export default async function Home() {
  const services = await getAllServices();
  const recentServices = services ? services.slice(0, 3) : [];
  const homePage = await getPageBySlug('home');
  const aboutPage = await getPageBySlug('about');

  const faqs = [
    { title: "How much does a WordPress website cost?", content: "It depends on features, design complexity, and functionality. I offer packages starting from basic portfolios to complex enterprise solutions. Contact me for a custom quote." },
    { title: "Do you provide SEO services?", content: "Yes, I provide complete on-page and technical SEO optimization, including Core Web Vitals improvement, schema markup, and meta tag optimization." },
    { title: "Do you build WooCommerce websites?", content: "Yes, I specialize in high-performing WooCommerce stores with custom checkout flows, payment gateway integrations, and speed optimization." },
    { title: "Will my website be mobile-friendly?", content: "Absolutely. I follow a mobile-first approach, ensuring your website looks and functions perfectly on all devices, from smartphones to large desktops." },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden flex items-center min-h-[95vh] bg-background">
        {/* Background Elements */}
        {/* Dark Mode Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background opacity-80 z-0 dark:block hidden"></div>
        {/* Light Mode Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60 z-0 dark:hidden block"></div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none animate-pulse-slow delay-700"></div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <ScrollReveal>
                <span className="inline-block py-1 px-3 rounded-full bg-muted border border-border text-primary font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
                  👋 Welcome to my portfolio
                </span>

                <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground leading-[1.1]">
                  Senior <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">WordPress Developer</span>
                  <br />
                  in India.
                </h1>

                <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-light">
                  I build <span className="text-foreground font-medium">fast, secure, and conversion-focused</span> websites that help ambitious businesses grow online.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" href="/portfolio" variant="trydo" className="min-w-[160px] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                    View My Work
                  </Button>
                  <Button size="lg" variant="outline" href="/contact" className="min-w-[160px]">
                    Contact Me
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 pt-8 flex items-center gap-8 border-t border-border">
                  <div>
                    <p className="text-3xl font-bold text-foreground">7+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</p>
                  </div>
                  <div className="w-px h-10 bg-border"></div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">25+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="w-px h-10 bg-border"></div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Satisfaction</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <ScrollReveal delay={0.3} className="h-full">
                <div className="relative z-10 rounded-[2rem] overflow-hidden bg-card p-3 border border-border shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 ease-out group">
                  <div className="aspect-[4/5] bg-muted rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                    {/* Priority: Local Image -> WordPress Image -> Fallback */}
                    <ProfileImage
                      src="/images/profile.jpg"
                      alt="Asif Pathan"
                      className="opacity-90 group-hover:opacity-100 group-hover:scale-105"
                      fallbackSrc={homePage?.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop'}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="font-mono text-sm text-primary mb-2">&lt;Developer /&gt;</p>
                      <h3 className="text-2xl font-bold">Asif Pathan</h3>
                      <p className="text-slate-300 text-sm">Full Stack Specialist</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SERVICES PREVIEW */}
      <Section className="bg-background relative z-10">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">My Expertise</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">Premium Services</h2>
                <p className="text-muted-foreground text-lg">
                  Tailored digital solutions. From pixel-perfect frontends to robust backends.
                </p>
              </div>
              <Button variant="outline" href="/services" className="hidden md:flex">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentServices.length > 0 ? (
              recentServices.map((service: any, index: number) => (
                <ScrollReveal key={service.slug} delay={index * 0.1}>
                  <ServiceCard
                    title={service.title}
                    excerpt={service.excerpt}
                    slug={service.slug}
                    icon={<Layout className="w-6 h-6" />}
                  />
                </ScrollReveal>
              ))
            ) : (
              // Fallback if no services exist yet
              <>
                <ServiceCard title="WordPress Development" excerpt="Custom themes and plugins tailored to your business needs." slug="wordpress-development" icon={<Globe className="w-6 h-6" />} />
                <ServiceCard title="WooCommerce" excerpt="High-converting online stores with secure payment gateways." slug="woocommerce-development" icon={<ShoppingCart className="w-6 h-6" />} />
                <ServiceCard title="SEO Optimization" excerpt="Boost your rankings with technical SEO and speed optimization." slug="seo-optimization" icon={<Activity className="w-6 h-6" />} />
              </>
            )}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" href="/services" className="w-full">View All Services</Button>
          </div>
        </Container>
      </Section>

      {/* 3. ABOUT & STATS SECTION */}
      <section className="py-24 bg-secondary/50 dark:bg-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden border border-border relative z-10">
                  <ProfileImage
                    src="/images/profile.jpg"
                    alt="About Me"
                    className="opacity-80"
                    fallbackSrc={aboutPage?.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop'}
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-border rounded-2xl -z-10 bg-card"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Me?</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
                  I don't just build websites.<br />
                  <span className="text-muted-foreground">I build business assets.</span>
                </h2>

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
                  <p>With over <strong>7 years of experience</strong>, I specialize in developing high-performance, responsive, and SEO-optimized WordPress websites. I have successfully delivered <strong>25+ websites</strong> for startups, agencies, and businesses across India.</p>
                </div>

                {/* "Grid" Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="flex items-start gap-4 p-6 hover:bg-muted/50 transition-colors border-border">
                    <Zap className="w-8 h-8 text-yellow-500 shrink-0" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">Blazing Fast</h4>
                      <p className="text-sm text-muted-foreground">95+ PageSpeed Scores guaranteed.</p>
                    </div>
                  </Card>
                  <Card className="flex items-start gap-4 p-6 hover:bg-muted/50 transition-colors border-border">
                    <Shield className="w-8 h-8 text-green-500 shrink-0" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">Secure</h4>
                      <p className="text-sm text-muted-foreground">Enterprise-grade security standards.</p>
                    </div>
                  </Card>
                  <Card className="flex items-start gap-4 p-6 hover:bg-muted/50 transition-colors border-border">
                    <Smartphone className="w-8 h-8 text-blue-500 shrink-0" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">Mobile First</h4>
                      <p className="text-sm text-muted-foreground">Perfect experience on any device.</p>
                    </div>
                  </Card>
                  <Card className="flex items-start gap-4 p-6 hover:bg-muted/50 transition-colors border-border">
                    <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">SEO Ready</h4>
                      <p className="text-sm text-muted-foreground">Built to rank high on Google.</p>
                    </div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. FAQ SECTION */}
      <Section className="bg-background">
        <Container className="max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Got questions? I've got answers.</p>
            </div>

            <Card className="p-8 md:p-12 border-border">
              <Accordion items={faqs} />
            </Card>
          </ScrollReveal>
        </Container>
      </Section>

      {/* 5. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>

        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-foreground">
              Ready to start your project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss how I can help you achieve your business goals with a high-performance website.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" href="/contact" variant="trydo" className="min-w-[200px] text-lg py-6">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" href="https://wa.me/918668603770" target="_blank" className="min-w-[200px] text-lg py-6">
                Chat on WhatsApp
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

    </div>
  );
}
