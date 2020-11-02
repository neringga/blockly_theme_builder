
Blockly.PHP['front_page'] = function(block) {
  var statements_front_page = Blockly.PHP.statementToCode(block, 'Front-page');
  // TODO: Assemble PHP into code variable.
  var code = "<?php get_header();?>" + statements_front_page + "<?php get_footer();?>";
  return code;
};

Blockly.PHP['posts'] = function(block) {
  var dropdown_order_by = block.getFieldValue('order_by');

  var code = `<?php if (have_posts()) : while(have_posts()) : the_post() ;?>

                  <?php the_title(); ?>
                  <?php the_content();?>

              <?php endwhile; endif;?>`;
  return code;
};

Blockly.PHP['paragraph'] = function(block) {
  var value_paragraph_text = Blockly.PHP.valueToCode(block, 'paragraph_text', Blockly.PHP.ORDER_NONE);
  var code = `<p>${value_paragraph_text}</p>`;

  return code;
};

Blockly.PHP['header'] = function(block) {
  var statements_header_components = Blockly.PHP.statementToCode(block, 'header_components');
  // TODO: Assemble PHP into code variable.
  var code = '...;\n';
  return code;
};

Blockly.PHP['title'] = function(block) {
  var dropdown_title_font_style = block.getFieldValue('title_font_style');
  var value_font_color = Blockly.PHP.valueToCode(block, 'font_color', Blockly.PHP.ORDER_NONE);
  var value_title_text = Blockly.PHP.valueToCode(block, 'title_text', Blockly.PHP.ORDER_NONE);

  var code = `<h3 style="font-family:${dropdown_title_font_style}; color:${value_font_color};">${value_title_text}</h3>`;

  return code;
};