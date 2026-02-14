import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const Footer = () => {
    return (
        <footer className="bg-secondary/50 border-t border-border pt-16 pb-8 text-foreground">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-heading text-primary mb-6 block">
                            Asif<span className="text-foreground">Pathan</span>.
                        </Link>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Building high-performance, conversion-focused websites for ambitious brands.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/techasif1993" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="https://www.linkedin.com/in/asifpathantech/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="https://x.com/asifpathantech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="https://www.facebook.com/asifpathantech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="https://www.instagram.com/asifpathantech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href="https://www.youtube.com/channel/UC2Zd9rinBQdPwBHl00NQ6-w" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                            <a href="https://profiles.wordpress.org/asifpathantech/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10c0 4.2-2.6 7.8-6.3 9.3-.9-1.2-1.7-2.9-2.3-4.6l-2-6.5h-2.9l-2 6.5C5.9 18.4 5.1 20.1 4.2 21.3A10 10 0 1 1 12 2z"></path><path d="M12 12L9.1 4.2"></path><path d="M12 12l2.9-7.8"></path><path d="M17.4 4.8l-1.9 5.8"></path><path d="M6.6 4.8l1.9 5.8"></path></svg></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-foreground font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link></li>
                            <li><Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-foreground font-bold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">WordPress Development</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">WooCommerce</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">React & Next.js</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">SEO & Performance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-foreground font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">Aurangabad Chhatrapati Sambhajinagar, Maharashtra 431007</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:asifpathan.tech@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">asifpathan.tech@gmail.com</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+918668603770" className="text-muted-foreground hover:text-primary transition-colors">+91 866 860 3770</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Asif Pathan. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
