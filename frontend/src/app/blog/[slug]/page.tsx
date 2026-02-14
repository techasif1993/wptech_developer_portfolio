import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Asif Pathan`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    // Verify that posts is an array to key the static params off of
    if (!posts) return [];

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export default async function SinglePostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-20">
            <Section>
                <Container className="max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center text-slate-500 mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Mock Content Body */}
                        <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-6">
                            {post.excerpt}
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h2>Why Speed Matters</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h3>The Technical Details</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-8 border-l-4 border-primary">
                            <strong>Pro Tip:</strong> Always use WebP images and lazy loading to meaningful improve LCP scores.
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                        <h3 className="text-2xl font-bold font-heading mb-6">Need help implementing this?</h3>
                        <Button href="#contact" size="lg">
                            Book a Consultation
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
