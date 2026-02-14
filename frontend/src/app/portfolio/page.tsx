import React from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/wordpress';

export default async function PortfolioPage() {
    const projects = await getAllProjects();

    // Extract unique categories from projects
    const allCategories = new Set<string>();
    projects?.forEach((project: any) => {
        project.projectCategories?.nodes?.forEach((cat: any) => {
            allCategories.add(cat.name);
        });
    });
    const categories = ['All', ...Array.from(allCategories)];

    // Note: Client-side filtering requires a client component wrapper or 
    // passing data to a client component. For simplicity in this server component,
    // we will initially show all projects. To add interactivity, we'd need to 
    // break the list into a client component.

    return (
        <div className="pt-10">
            <Section>
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Selected <span className="text-primary">Works</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            A collection of high-performance websites built for growth.
                        </p>
                    </div>

                    {(!projects || projects.length === 0) ? (
                        <div className="text-center py-20 bg-[#191919] rounded-xl border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                            <p className="text-slate-400 mb-8">Add "Portfolio" items in your WordPress Backend.</p>
                            <Button href="http://localhost/wptech_developer_portfolio/backend/wp-admin/post-new.php?post_type=portfolio" variant="outline">
                                Add Project in WP Admin
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project: any) => (
                                <Card key={project.slug} className="group overflow-hidden">
                                    <div className={`aspect-video w-full rounded-xl mb-6 bg-slate-800 flex items-center justify-center overflow-hidden relative`}>
                                        {project.featuredImage?.node?.sourceUrl ? (
                                            <img
                                                src={project.featuredImage.node.sourceUrl}
                                                alt={project.title}
                                                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <span className="text-slate-500 font-medium">No Image</span>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-accent uppercase tracking-wider">
                                            {project.projectCategories?.nodes?.[0]?.name || 'Uncategorized'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors text-white">
                                        <Link href={`#`} className="flex items-center gap-2">
                                            {project.title}
                                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </h3>

                                    <div
                                        className="text-slate-400 mb-6 line-clamp-2 text-sm"
                                        dangerouslySetInnerHTML={{ __html: project.excerpt }}
                                    />

                                    <Link href={`#`} className="text-sm font-medium text-primary hover:text-blue-700 inline-flex items-center">
                                        View Case Study <ArrowUpRight className="ml-1 w-3 h-3" />
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    );
}
