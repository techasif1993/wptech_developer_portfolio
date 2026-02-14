"use client";

import React, { useState } from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic (e.g., API route or WPForms integration)
        console.log('Form submitted:', formData);
        alert('Thank you! Your message has been sent (demo).');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-10">
            <Section>
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Let's Build Something <span className="text-primary">Great</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            Have a project in mind? Let's discuss how I can help you achieve your goals.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 bg-[#191919] rounded-2xl shadow-xl overflow-hidden border border-white/5">
                        {/* Contact Info Column */}
                        <div className="w-full lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-8">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium text-slate-300 mb-1">Email</p>
                                            <a href="mailto:asifpathan.tech@gmail.com" className="hover:text-white transition-colors">asifpathan.tech@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium text-slate-300 mb-1">Phone</p>
                                            <a href="tel:+918668603770" className="hover:text-white transition-colors">+91 866 860 3770</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium text-slate-300 mb-1">Location</p>
                                            <p>Aurangabad Chhatrapati Sambhajinagar, Maharashtra 431007</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-800">
                                    {/* Maps Embed Placeholder */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.112423010787!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInMzIuNSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="opacity-70 hover:opacity-100 transition-opacity"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="w-full lg:w-2/3 p-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[#202020] border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[#202020] border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-[#202020] border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-slate-500"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-[#202020] border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-white placeholder-slate-500"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <Button type="submit" size="lg" className="w-full md:w-auto">
                                    Send Message
                                    <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
