<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (!function_exists('chld_thm_cfg_locale_css')) :
    function chld_thm_cfg_locale_css($uri)
    {
        if (empty($uri) && is_rtl() && file_exists(get_template_directory() . '/rtl.css'))
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter('locale_stylesheet_uri', 'chld_thm_cfg_locale_css');

if (!function_exists('child_theme_configurator_css')) :
    function child_theme_configurator_css()
    {
        wp_enqueue_style('chld_thm_cfg_child', trailingslashit(get_stylesheet_directory_uri()) . 'style.css', array('hello-elementor', 'hello-elementor', 'hello-elementor-theme-style'));
    }
endif;
add_action('wp_enqueue_scripts', 'child_theme_configurator_css', 10);

function my_custom_scripts()
{
    wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/js/main.js', array('jquery'), '1.0.2', true);
    wp_enqueue_script('gsap', get_stylesheet_directory_uri() . '/js/gsap.min.js', array(), false, true);
    wp_enqueue_script('scrolltrigger', get_stylesheet_directory_uri() . '/js/ScrollTrigger.min.js', array(), false, true);

    if (is_front_page()) {
        wp_enqueue_script('fingerprint', get_stylesheet_directory_uri() . '/js/fingerprint.js', array(), false, true);
    }
}
add_action('wp_enqueue_scripts', 'my_custom_scripts');


function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

add_action('elementor_pro/posts/query/event-filter', function ($query) {
    $query->set('post_type', 'saeid_events');
    $meta_query[] = [
        'key' => 'vilket_datum_ska_denna_sluta_visas',
        'value' => date('Y-m-d H:i'),
        'compare' => '>',
    ];
    $query->set('meta_query', $meta_query);
    $query->set('orderby', 'meta_value');
    $query->set('meta_key', 'nar');
    $query->set('order', 'ASC');
});



add_action('elementor_pro/posts/query/event-filter-2', function ($query) {
    $query->set('post_type', 'saeid_events');
    $meta_query[] = [
        'key' => 'vilket_datum_ska_denna_sluta_visas',
        'value' => date('Y-m-d H:i'),
        'compare' => '<',
    ];
    $query->set('meta_query', $meta_query);
    $query->set('orderby', 'meta_value');
    $query->set('meta_key', 'nar');
    $query->set('order', 'DESC');
});
  
  

// END ENQUEUE PARENT ACTION
