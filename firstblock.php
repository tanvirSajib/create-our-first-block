<?php 

/**
* Plugin Name: First Block
* Plugin URI: https://tanvir.com
* Description: My first block
* Author: Tanvir
* Author URI: https://tanvir.com
*/

function blocks_course_first_block_init(){
    register_block_type_from_metadata( __DIR__ );
}

add_action('init', 'blocks_course_first_block_init');


