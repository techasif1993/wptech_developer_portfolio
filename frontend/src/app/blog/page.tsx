import Link from 'next/link';
import { Container, Section } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getAllPosts } from '@/lib/wordpress';
import { ArrowRight, Calendar } from 'lucide-react';

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="pt-10">
            <Section>
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Insights & <span className="text-primary">Articles</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Thoughts on WordPress performance, Headless architecture, and digital growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts && posts.map((post: any) => (
                            <Card key={post.slug} className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 bg-slate-800 rounded-xl mb-6 flex items-center justify-center border border-white/5">
                                    <span className="text-slate-500 font-medium">Post Cover Image</span>
                                </div>

                                <div className="flex items-center text-sm text-slate-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {new Date(post.date).toLocaleDateString()}
                                </div>

                                <h2 className="text-xl font-bold font-heading mb-3 line-clamp-2 hover:text-primary transition-colors text-white">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-slate-400 mb-6 line-clamp-3 text-sm flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} className="text-primary font-medium inline-flex items-center hover:underline mt-auto">
                                    Read Article <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
