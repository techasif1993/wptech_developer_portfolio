<?php
require_once __DIR__ . '/wp-load.php';

// HELPER: Create or Update Page
function update_page_content($slug, $title, $content)
{
    $page = get_page_by_path($slug);
    $post_data = [
        'post_title' => $title,
        'post_content' => $content,
        'post_status' => 'publish',
        'post_type' => 'page',
        'post_author' => 1,
    ];

    if ($page) {
        $post_data['ID'] = $page->ID;
        wp_update_post($post_data);
        echo "Updated page: $title\n";
    } else {
        $post_data['post_name'] = $slug;
        wp_insert_post($post_data);
        echo "Created page: $title\n";
    }
}

// 1. HOME PAGE
$home_content = '
<!-- Hero Section -->
<h1 class="hero-title">
    Senior WordPress Developer in India | <span class="text-primary">High-Performance & SEO-Optimized Websites</span>
</h1>
<p class="hero-description">
    I build fast, secure, conversion-focused WordPress websites that help businesses grow online.
</p>
<div class="hero-buttons">
    <a href="/portfolio" class="btn-primary">View Portfolio</a>
    <a href="/contact" class="btn-outline">Get Free Consultation</a>
    <a href="https://wa.me/918668603770" class="btn-whatsapp">Chat on WhatsApp</a>
</div>

<!-- About Snapshot -->
<section>
    <h2>About Me</h2>
    <p>With over 7 years of experience, I specialize in developing high-performance, responsive, and SEO-optimized WordPress websites. I have successfully delivered 25+ websites for startups, agencies, and businesses across India.</p>
    <p>From WooCommerce stores to corporate websites and landing pages, I focus on speed, security, and conversion.</p>
</section>

<!-- Services Preview -->
<section>
    <h2>My Core Services</h2>
    <ul>
        <li><strong>WordPress Website Development</strong>: Custom-built, responsive, and SEO-ready.</li>
        <li><strong>WooCommerce Development</strong>: High-converting online stores with secure gateways.</li>
        <li><strong>Landing Page Development</strong>: Conversion-optimized for ads.</li>
        <li><strong>SEO & Performance</strong>: Core Web Vitals, Technical SEO, Analytics.</li>
        <li><strong>Security & Maintenance</strong>: Updates, hardening, monitoring.</li>
    </ul>
</section>

<!-- Why Choose Me -->
<section>
    <h2>Why Choose Me?</h2>
    <ul>
        <li>7+ Years Experience</li>
        <li>25+ Successful Projects</li>
        <li>40% Speed Improvement Record</li>
        <li>Core Web Vitals Specialist</li>
    </ul>
</section>

<!-- FAQ Schema -->
<!-- Note: This would typically be in a separate field or plugin, but putting in content for now -->
<div class="faq-schema">
    <h3>Frequently Asked Questions</h3>
    <p><strong>Q: How much does a WordPress website cost?</strong><br>A: It depends on features, design complexity, and functionality.</p>
    <p><strong>Q: Do you provide SEO services?</strong><br>A: Yes, I provide complete on-page and technical SEO optimization.</p>
    <p><strong>Q: Do you build WooCommerce websites?</strong><br>A: Yes, I specialize in high-performing WooCommerce stores.</p>
</div>
';
update_page_content('home', 'Home', $home_content);

// 2. ABOUT PAGE
$about_content = '
<h1>About Asif Pathan – Senior WordPress Developer</h1>
<p class="lead">I am a Senior WordPress Developer based in Maharashtra, India, with nearly 7 years of professional experience in building scalable and high-performing websites.</p>

<h3>My Expertise</h3>
<ul>
    <li>WordPress Development (Core, Headless)</li>
    <li>Elementor & WPBakery</li>
    <li>WooCommerce</li>
    <li>PHP & MySQL</li>
    <li>Performance Optimization (Core Web Vitals)</li>
    <li>Security Hardening</li>
    <li>SEO & Analytics</li>
    <li>Git Version Control</li>
    <li>UI/UX using Figma & Adobe Suite</li>
</ul>

<p>I have worked with agencies, startups, and businesses to deliver fast, secure, and conversion-optimized websites.</p>

<h3>My Approach</h3>
<ul>
    <li><strong>Clean Code:</strong> Maintainable and scalable standards.</li>
    <li><strong>Mobile-First Design:</strong> Ensuring perfect experience on all devices.</li>
    <li><strong>Performance:</strong> Speed is a feature, not an afterthought.</li>
    <li><strong>Long-Term Scalability:</strong> Building for future growth.</li>
</ul>
';
update_page_content('about', 'About Asif Pathan', $about_content);

// 3. SERVICES PAGE
$services_content = '
<h1>Professional WordPress Development Services</h1>

<div class="service-item">
    <h3>🖥 Custom WordPress Website Development</h3>
    <p>I design and develop custom WordPress websites that are fully responsive, SEO-optimized, and built for performance. Whether you need a business website, portfolio, or blog, I create solutions tailored to your needs.</p>
    <ul>
        <li>Custom theme development</li>
        <li>Elementor-based design</li>
        <li>Speed optimization</li>
        <li>Security implementation</li>
        <li>SEO setup</li>
    </ul>
</div>

<div class="service-item">
    <h3>🛒 WooCommerce Development</h3>
    <p>Launch a powerful online store with WooCommerce. I build scalable e-commerce websites with:</p>
    <ul>
        <li>Secure payment integration</li>
        <li>Product management system</li>
        <li>Shipping setup</li>
        <li>Performance optimization</li>
        <li>Conversion-focused UI</li>
    </ul>
</div>

<div class="service-item">
    <h3>🎯 Landing Page Design</h3>
    <p>High-converting landing pages designed for Google Ads, Facebook Ads, Lead generation, and Product launches. Optimized for maximum ROI.</p>
</div>

<div class="service-item">
    <h3>📈 SEO & Digital Marketing Support</h3>
    <ul>
        <li>On-page SEO</li>
        <li>Technical SEO</li>
        <li>Schema Markup</li>
        <li>Google Analytics & Search Console</li>
        <li>Core Web Vitals optimization</li>
    </ul>
</div>

<div class="service-item">
    <h3>🔐 Website Maintenance & Security</h3>
    <ul>
        <li>Regular updates</li>
        <li>Backup management</li>
        <li>Malware scanning</li>
        <li>Uptime monitoring</li>
    </ul>
</div>
';
update_page_content('services', 'Services', $services_content);

// 4. PORTFOLIO PAGE
$portfolio_content = '
<h1>My WordPress Projects & Case Studies</h1>
<p>Showcase of my recent work focusing on performance, SEO, and conversion.</p>
';
update_page_content('portfolio', 'Portfolio', $portfolio_content);

// 5. CONTACT PAGE
$contact_content = '
<h1>Hire a WordPress Developer in India</h1>
<p class="lead">Let’s build something amazing together.</p>

<div class="contact-details">
    <p><strong>📍 Location:</strong> Maharashtra, India</p>
    <p><strong>📧 Email:</strong> <a href="mailto:asifpathan.tech@gmail.com">asifpathan.tech@gmail.com</a></p>
    <p><strong>📱 Phone:</strong> <a href="tel:+918668603770">+91 8668603770</a></p>
</div>
';
update_page_content('contact', 'Contact', $contact_content);

// 6. BLOG PAGE
$blog_content = '
<h1>WordPress Development & SEO Insights</h1>
<p>Thoughts on WordPress Tips, WooCommerce, SEO, Performance Optimization, and Security.</p>
';
update_page_content('blog', 'Blog', $blog_content);

echo "All pages updated successfully!\n";
