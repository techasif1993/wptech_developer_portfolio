<?php
require_once __DIR__ . '/wp-load.php';

$title = 'Home';
$content = '
<!-- Hero Section Content -->
<h1 class="hero-title">
    Hi, I\'m <span class="text-primary">Asif Pathan</span><br />
    <span class="text-slate-400 text-4xl md:text-6xl">Full Stack Developer.</span>
</h1>
<p class="hero-description">
    I build high-performance Headless WordPress & Next.js applications that scale. Speed, security, and SEO built-in.
</p>
<div class="hero-buttons">
    <a href="#portfolio" class="btn-primary">View My Work</a>
    <a href="#contact" class="btn-outline">Contact Me</a>
</div>
';

$existing = get_page_by_title($title, OBJECT, 'page');
if ($existing) {
    echo "Home page already exists (ID: $existing->ID)\n";
} else {
    $post_id = wp_insert_post([
        'post_title' => $title,
        'post_content' => $content,
        'post_status' => 'publish',
        'post_type' => 'page',
        'post_author' => 1,
    ]);
    echo "Created Home page (ID: $post_id)\n";
}
