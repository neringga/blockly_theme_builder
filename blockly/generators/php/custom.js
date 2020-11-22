
Blockly.PHP['front_page'] = function(block) {
  var value_margin = Blockly.PHP.valueToCode(block, 'margin', Blockly.PHP.ORDER_NONE);
  var statements_front_page = Blockly.PHP.statementToCode(block, 'Front-page');
  
  var code = `<?php /* Template Name: Front page */ ?>
              <?php get_header();?>
              <div style="${value_margin}">
              ${statements_front_page}
              </div>
              <?php get_footer();?>`;
  return code;
};

Blockly.PHP['page_content'] = function(block) {
  var code = `<?php if (have_posts()) : while(have_posts()) : the_post() ;?>

                  <?php the_title(); ?>
                  <?php the_content();?>

              <?php endwhile; endif;?>`;
  return code;
};

Blockly.PHP['header'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE'; // show navigation menu
  var statements_header_components = Blockly.PHP.statementToCode(block, 'header_components');
  var navigation_menu = "";

  if (checkbox_name == true) {
    navigation_menu = `<?php wp_nav_menu (
                          array(
                            'theme_location' => 'header-menu',
                            'menu_class' => 'top-bar'
                          )
                        ); ?>`
  }
  
  var code = `<!DOCTYPE html>
  <html>
    <head><?php wp_head(); ?></head>
    <body <?php body_class(); ?>>

    <header class="sticky-top">
    <div class="container">
      ${navigation_menu}
      ${statements_header_components}
      </div>
    </header>`;
  return code;
};

Blockly.PHP['text_custom'] = function(block) {
  var value_text = Blockly.PHP.valueToCode(block, 'text', Blockly.PHP.ORDER_NONE);
  var value_text_style = Blockly.PHP.valueToCode(block, 'text_style', Blockly.PHP.ORDER_NONE);

  var code = `<p ${value_text_style}>${removeLiterals(value_text)}</p>`;

  return code;
};

Blockly.PHP['image'] = function(block) {
  var value_image_url = Blockly.PHP.valueToCode(block, 'image_url', Blockly.PHP.ORDER_NONE);
  var number_image_opacity = block.getFieldValue('image_opacity');
  var value_width = Blockly.PHP.valueToCode(block, 'width', Blockly.PHP.ORDER_NONE);
  var value_height = Blockly.PHP.valueToCode(block, 'height', Blockly.PHP.ORDER_NONE);
  
  var code = `<img src="${removeLiterals(value_image_url)}" alt="Image" style="width:${value_width};height:${value_height};opacity:${number_image_opacity}">`;
  
  return code;
};

Blockly.PHP['footer'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE'; // show navigation menu
  var statements_footer_components = Blockly.PHP.statementToCode(block, 'footer_components');
  
  if (checkbox_name == true) {
    navigation_menu = `<?php wp_nav_menu (
                          array(
                            'theme_location' => 'footer-menu',
                            'menu_class' => 'bottom-bar'
                          )
                        ); ?>`
  }

  return statements_footer_components;
};

Blockly.PHP['single_page'] = function(block) {
  var statements_name = Blockly.PHP.statementToCode(block, 'single_page');
  var value_margin = Blockly.PHP.valueToCode(block, 'margin', Blockly.PHP.ORDER_NONE);
  // TODO: Assemble PHP into code variable.
  var code = `<?php /* Template Name: Static page */ ?>
              <?php get_header();?>
              <div style="${value_margin}">
                ${statements_name}
              </div>
              <?php get_footer();?>`;
  return code;
};

Blockly.PHP['single_post'] = function(block) {
  var statements_single_post = Blockly.PHP.statementToCode(block, 'single_post');
  var value_margin = Blockly.PHP.valueToCode(block, 'margin', Blockly.PHP.ORDER_NONE);

  var code = `<?php /* Template Name: Single post */ ?>
              <?php get_header();?>
              <div style="${value_margin}">
                ${statements_single_post}
              </div>
              <?php get_footer();?>`;

  return code;
};

Blockly.PHP['archive'] = function(block) {
  var statements_archive = Blockly.PHP.statementToCode(block, 'archive');
  var value_margin = Blockly.PHP.valueToCode(block, 'margin', Blockly.PHP.ORDER_NONE);

  var code = `<?php get_header();?>
              <div style="${value_margin}">
                ${statements_archive}
              </div>
              <?php get_footer();?>`;
  return code;
};

Blockly.PHP['text_style'] = function(block) {
  var value_font_family = Blockly.PHP.valueToCode(block, 'font_family', Blockly.PHP.ORDER_NONE);
  var dropdown_font_style = block.getFieldValue('font_style');
  var dropdown_font_weight = block.getFieldValue('font_weight');
  var number_font_size = block.getFieldValue('font_size');
  var value_font_color = Blockly.PHP.valueToCode(block, 'font_color', Blockly.PHP.ORDER_NONE);
  var value_background_color = Blockly.PHP.valueToCode(block, 'background_color', Blockly.PHP.ORDER_NONE);
  var dropdown_alignment = block.getFieldValue('alignment');
  var dropdown_transformation = block.getFieldValue('transformation');

  var text_transform = dropdown_transformation == 0 ? "" : `text-transform:${dropdown_transformation};`;

  var code = `style="font-family:${removeLiterals(value_font_family)}; 
                     font-size:${number_font_size}px;
                     font-weight:${dropdown_font_weight};
                     color:${removeLiterals(value_font_color)};
                     background-color:${removeLiterals(value_background_color)};
                     text-align:${dropdown_alignment};
                     ${text_transform}
                     font-style:${dropdown_font_style};"`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['posts'] = function(block) {
  var statements_post = Blockly.PHP.statementToCode(block, 'post');
  var number_posts_per_page = block.getFieldValue('posts_per_page');
  var checkbox_show_thumbnail = block.getFieldValue('show_thumbnail') == 'TRUE';
  var value_post_style = Blockly.PHP.valueToCode(block, 'post_style', Blockly.PHP.ORDER_NONE);

  var thumbnail_code = checkbox_show_thumbnail ? `<?php if(has_post_thumbnail()):?>            
                                                  <a href="<?php the_permalink();?>">
                                                    <img src="<?php the_post_thumbnail_url();?>" class="img-fluid mb-3" alt="<?php the_title();?>">
                                                  </a>
                                                  <?php endif;?>` : "";
  
  var code = `<?php
              $args = array(
                'post_type' => 'post',
                'posts_per_page' => ${number_posts_per_page}
              );
              $_posts = new WP_Query($args);
              ?>
              
              <?php if($_posts->have_posts()):?>
              
                <?php while($_posts->have_posts()): $_posts->the_post();?>

                <div ${value_post_style}>
              
                  ${thumbnail_code}

                  ${statements_post}
                  
                  </div>
              
                <?php endwhile;?>
              
              <?php endif;?>`;

  return code;
};

Blockly.PHP['title'] = function(block) {
  var value_post_title_style = Blockly.PHP.valueToCode(block, 'post_title_style', Blockly.PHP.ORDER_NONE);

  var code = `<p ${value_post_title_style}><?php the_title();?></p>`;
  return code;
};

Blockly.PHP['content'] = function(block) {
  var value_post_content_style = Blockly.PHP.valueToCode(block, 'post_content_style', Blockly.PHP.ORDER_NONE);

  var code = `<p ${value_post_content_style}><?php the_content();?></p>`;
  return code;
};

Blockly.PHP['excerpt'] = function(block) {
  var value_post_excerpt_style = Blockly.PHP.valueToCode(block, 'post_excerpt_style', Blockly.PHP.ORDER_NONE);

  var code = `<p ${value_post_excerpt_style}><?php the_excerpt();?></p>`;
  return code;
};

Blockly.PHP['pixels'] = function(block) {
  var number_pixels = block.getFieldValue('pixels');

  var code = `${number_pixels}px`;
  
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['percents'] = function(block) {
  var number_percents = block.getFieldValue('percents');
  
  var code = `${number_percents}%`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['content_margin'] = function(block) {
  var value_left_margin = Blockly.PHP.valueToCode(block, 'left_margin', Blockly.PHP.ORDER_NONE);
  var value_right_margin = Blockly.PHP.valueToCode(block, 'right_margin', Blockly.PHP.ORDER_NONE);
  var value_top_margin = Blockly.PHP.valueToCode(block, 'top_margin', Blockly.PHP.ORDER_NONE);
  var value_bottom_margin = Blockly.PHP.valueToCode(block, 'bottom_margin', Blockly.PHP.ORDER_NONE);
  
  var code = ` margin-right:${value_right_margin};
               margin-left:${value_left_margin};
               margin-top:${value_top_margin};
               margin-bottom:${value_bottom_margin}; `;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['search_field'] = function(block) {
  var code = `<?php get_search_form();?>`;
  return code;
};

Blockly.PHP['display_style'] = function(block) {
  var value_margins = Blockly.PHP.valueToCode(block, 'margins', Blockly.PHP.ORDER_NONE);
  var value_border = Blockly.PHP.valueToCode(block, 'border', Blockly.PHP.ORDER_NONE);
  var value_background = Blockly.PHP.valueToCode(block, 'background', Blockly.PHP.ORDER_NONE);
  var value_padding = Blockly.PHP.valueToCode(block, 'padding', Blockly.PHP.ORDER_NONE);
  
  var code = ` style="${value_margins}
                      ${value_border}
                      ${value_padding}
                      background_color: ${removeLiterals(value_background)};" `;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['border'] = function(block) {
  var value_border_style = Blockly.PHP.valueToCode(block, 'border_style', Blockly.PHP.ORDER_NONE);
  var value_border_width = Blockly.PHP.valueToCode(block, 'border_width', Blockly.PHP.ORDER_NONE);
  var value_border_color = Blockly.PHP.valueToCode(block, 'border_color', Blockly.PHP.ORDER_NONE);

  var code = `border-style: ${removeLiterals(value_border_style)};
              border-width: ${removeLiterals(value_border_width)};
              border-color: ${removeLiterals(value_border_color)};`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['records'] = function(block) {
  var value_display_style = Blockly.PHP.valueToCode(block, 'display_style', Blockly.PHP.ORDER_NONE);
  var statements_item_configuration = Blockly.PHP.statementToCode(block, 'item_configuration');

  var code = `    <?php if (have_posts()) : while(have_posts()) : the_post() ;?>

                    <div ${value_display_style}>
                        
                        ${statements_item_configuration}

                    </div>

                    <?php endwhile; endif;?>`;
  return code;
};

Blockly.PHP['search'] = function(block) {
  var value_margins = Blockly.PHP.valueToCode(block, 'margins', Blockly.PHP.ORDER_NONE);
  var statements_content = Blockly.PHP.statementToCode(block, 'content');

  var code = `<?php get_header();?>
              <div style="${value_margins}">
                ${statements_content}
              </div>
              <?php get_footer();?>`;
  return code;
};

Blockly.PHP['error'] = function(block) {
  var value_margins = Blockly.PHP.valueToCode(block, 'margins', Blockly.PHP.ORDER_NONE);
  var statements_content = Blockly.PHP.statementToCode(block, 'content');

  var code = `<div style="${value_margins}">
                  ${statements_content}
              </div>`;
  return code;
};

Blockly.PHP['padding'] = function(block) {
  var value_left = Blockly.PHP.valueToCode(block, 'left', Blockly.PHP.ORDER_NONE);
  var value_right = Blockly.PHP.valueToCode(block, 'right', Blockly.PHP.ORDER_NONE);
  var value_top = Blockly.PHP.valueToCode(block, 'top', Blockly.PHP.ORDER_NONE);
  var value_bottom = Blockly.PHP.valueToCode(block, 'bottom', Blockly.PHP.ORDER_NONE);

  var code = ` padding-right:${value_right};
               padding-left:${value_left};
               padding-top:${value_top};
               padding-bottom:${value_bottom}; `

  return [code, Blockly.PHP.ORDER_NONE];
};

////////// move

function removeLiterals(text) {
    return text.substring(1, text.length - 1);
}