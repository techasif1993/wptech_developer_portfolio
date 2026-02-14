import React from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, Layout, ShoppingCart, Zap, Code } from 'lucide-react';
import { getAllServices } from '@/lib/wordpress';

export default async function ServicesPage() {
    // Fetch real services from WordPress
    const services = await getAllServices();

    // Fallback if no services are found (e.g. before user adds content)
    const hasServices = services && services.length > 0;

    return (
        <div className="pt-10 bg-[#101010]">
            <Section className="bg-[#101010]">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Services Designed for <span className="text-primary">Growth</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            I don't just build websites; I build digital assets that solve business problems and drive revenue.
                        </p>
                    </div>

                    {!hasServices ? (
                        <div className="text-center py-20 bg-[#191919] rounded-xl border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
                            <p className="text-slate-400 mb-8">Please add "Service" items in your WordPress Backend.</p>
                            <Button href="http://localhost/wptech_developer_portfolio/backend/wp-admin/post-new.php?post_type=service" variant="outline">
                                Add Service in WP Admin
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-24">
                            {services.map((service: any, index: number) => (
                                <div key={service.slug} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1">
                                        <div className="bg-[#191919] p-8 rounded-2xl shadow-xl border border-white/5">
                                            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Service Details</h3>

                                            {/* Render HTML content safely */}
                                            <div
                                                className="text-slate-400 mb-6 prose prose-invert prose-sm max-w-none"
                                                dangerouslySetInnerHTML={{ __html: service.content || service.excerpt }}
                                            />

                                            <Button href="#contact" variant="outline" className="w-full sm:w-auto">
                                                Discuss This Service
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        <h2 className="text-3xl font-bold font-heading mb-4 text-white">{service.title}</h2>
                                        <div
                                            className="text-lg text-slate-400 mb-6 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: service.excerpt }}
                                        />
                                        <Button href="#contact" className="group">
                                            Get Started
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </Section>

            <Section className="bg-primary text-white">
                <Container className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to upgrade your digital presence?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Schedule a free 15-minute consultation to discuss your project goals and how I can help.
                    </p>
                    <Button href="#contact" variant="secondary" size="lg">
                        Book Free Consultation
                    </Button>
                </Container>
            </Section>
        </div>
    );
}
