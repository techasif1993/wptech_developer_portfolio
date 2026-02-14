<?php
/*
Plugin Name: Portfolio & Services CPT
Description: Registers Custom Post Types for Portfolio and Services, exposing them to WPGraphQL.
Version: 1.0
Author: Asif Pathan
*/

add_action('init', function () {
    // 1. Register Portfolio Post Type
    register_post_type('portfolio', [
        'labels' => [
            'name' => 'Portfolio',
            'singular_name' => 'Project',
            'add_new_item' => 'Add New Project',
            'edit_item' => 'Edit Project',
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'menu_icon' => 'dashicons-portfolio',
        'show_in_graphql' => true,
        'graphql_single_name' => 'Project',
        'graphql_plural_name' => 'Projects',
    ]);

    // 2. Register Project Categories Taxonomy
    register_taxonomy('project_cat', ['portfolio'], [
        'labels' => [
            'name' => 'Project Categories',
            'singular_name' => 'Category',
        ],
        'hierarchical' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'ProjectCategory',
        'graphql_plural_name' => 'ProjectCategories',
    ]);

    // 3. Register Services Post Type
    register_post_type('service', [
        'labels' => [
            'name' => 'Services',
            'singular_name' => 'Service',
            'add_new_item' => 'Add New Service',
        ],
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'menu_icon' => 'dashicons-hammer',
        'show_in_graphql' => true,
        'graphql_single_name' => 'Service',
        'graphql_plural_name' => 'Services',
    ]);
});
