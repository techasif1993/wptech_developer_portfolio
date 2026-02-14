import React from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';
import { getPageBySlug } from '@/lib/wordpress';
import { ProfileImage } from '@/components/ui/ProfileImage';

const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Delivered', value: '25+' },
    { label: 'Speed Improvement', value: '40%' },
    { label: 'Client Satisfaction', value: '100%' },
];

const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'] },
    { category: 'Backend', items: ['WordPress (Headless)', 'PHP', 'Node.js', 'MySQL', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code', 'Webpack'] },
    { category: 'Performance', items: ['Core Web Vitals', 'Redis Caching', 'CDN Config', 'Image Opt', 'SEO'] },
];

export default async function AboutPage() {
    const page = await getPageBySlug('about');

    return (
        <div className="pt-10">
            <Section>
                <Container>
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        {/* Image / Visual Column */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-[#191919] relative z-10 flex items-center justify-center border border-white/5">
                                <ProfileImage
                                    src="/images/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    fallbackSrc={page?.featuredImage?.node?.sourceUrl}
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10"></div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                                {page?.title || <span>More Than Just a <span className="text-primary">Developer</span>.</span>}
                            </h1>

                            {page?.content ? (
                                <div
                                    className="text-lg text-slate-400 mb-8 leading-relaxed prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: page.content }}
                                />
                            ) : (
                                <>
                                    <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                                        I'm Asif Pathan, a Senior WordPress Developer with over 7 years of experience in building high-performance digital experiences.
                                    </p>
                                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                        My philosophy is simple: <strong>Zero Hassle Delivery.</strong> I bridge the gap between complex technical requirements and business goals, delivering websites that are not only beautiful but also fast, secure, and built to convert.
                                    </p>
                                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-6">
                                        <p className="text-yellow-500 text-sm">
                                            <strong>Note:</strong> Create a Page with slug "about" in WordPress to replace this text dynamically.
                                        </p>
                                    </div>
                                </>
                            )}

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-3xl font-bold text-primary font-heading">{stat.value}</div>
                                        <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <Button href="#contact">
                                Work With Me
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Tech Stack Section */}
            <Section className="bg-[#101010]">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading mb-4">Technical Arsenal</h2>
                        <p className="text-slate-600 dark:text-slate-400">The tools I use to bring ideas to life.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skillGroup) => (
                            <Card key={skillGroup.category} className="h-full">
                                <h3 className="text-xl font-bold font-heading mb-4 text-primary border-b border-slate-100 dark:border-slate-700 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((item) => (
                                        <li key={item} className="flex items-center text-slate-600 dark:text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-accent mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
