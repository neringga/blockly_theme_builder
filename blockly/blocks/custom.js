
Blockly.Blocks['front_page'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Front page");
    this.appendValueInput("margin")
        .setCheck("content_margin")
        .appendField("Margins");
    this.appendStatementInput("Front-page")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE);
    this.setColour(270);
 this.setTooltip("This is a front page block. Connect blocks that you want to appear in your front-page.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['page_content'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Assigned page content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['paragraph'] = {
  init: function() {
    this.appendValueInput("paragraph_text")
        .setCheck("String")
        .appendField("Paragraph");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Child. Block to add text paragraph.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Header");
    this.appendDummyInput()
        .appendField("Show navigation menu")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.appendStatementInput("header_components")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(270);
 this.setTooltip("Header that will be shown in all the pages.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Title");
    this.appendDummyInput()
        .appendField("Font style:")
        .appendField(new Blockly.FieldDropdown([["Arial","arial"], ["Times New Roman","times_new_roman"]]), "title_font_style");
    this.appendValueInput("font_color")
        .setCheck("Colour")
        .appendField("Font color:");
    this.appendValueInput("title_text")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Text"), "title_text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_custom'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("Text:");
    this.appendValueInput("text_style")
        .setCheck("text_style")
        .appendField("Text style:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['image'] = {
  init: function() {
    this.appendValueInput("image_url")
        .setCheck("String")
        .appendField("Image url");
    this.appendDummyInput()
        .appendField("Opacity")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "image_opacity");
    this.appendValueInput("width")
        .setCheck(["pixels", "percents"])
        .appendField("Width");
    this.appendValueInput("height")
        .setCheck(["pixels", "percents"])
        .appendField("Height");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['footer'] = {
  init: function() {
    this.appendStatementInput("footer_view")
        .setCheck(null)
        .appendField("Footer");
    this.appendDummyInput()
        .appendField("Show navigation menu")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    this.setColour(270);
 this.setTooltip("Add elements to show in your footer view");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['single_page'] = {
  init: function() {
    this.appendStatementInput("single_page_view")
        .setCheck(null)
        .appendField("Single page");
    this.appendValueInput("margin")
        .setCheck("content_margin")
        .appendField("Margins");
    this.setColour(270);
 this.setTooltip("Add elements that you want to appear in satic page");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['single_post'] = {
  init: function() {
    this.appendStatementInput("single_view")
        .setCheck(null)
        .appendField("Single post");
    this.appendValueInput("margin")
        .setCheck("content_margin")
        .appendField("Margins");
    this.setColour(270);
 this.setTooltip("Add elements to show in your single post view");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['archive'] = {
  init: function() {
    this.appendStatementInput("archive_view")
        .setCheck(null)
        .appendField("Archive");
    this.appendValueInput("margin")
        .setCheck("content_margin")
        .appendField("Margins");
    this.setColour(270);
 this.setTooltip("Add elements to show in your archive (all posts) view");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['navigation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navigation")
        .appendField(new Blockly.FieldDropdown([["Header Menu","header_menu"], ["Footer Menu","footer_menu"], ["Extra Menu","extra_menu"]]), "nav_menu_name");
    this.appendDummyInput()
        .appendField("Alignment")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"], ["center","center"]]), "navigation_alignment");
    this.setPreviousStatement(true, ["header", "footer"]);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_style'] = {
  init: function() {
    this.appendValueInput("font_family")
        .setCheck("String")
        .appendField("Font family");
    this.appendDummyInput()
        .appendField("Font style")
        .appendField(new Blockly.FieldDropdown([["Normal","normal"], ["Italic","italic"], ["Oblique","oblique"]]), "font_style");
    this.appendDummyInput()
        .appendField("Font weight")
        .appendField(new Blockly.FieldDropdown([["Normal","normal"], ["Bold","bold"], ["Light","lighter"]]), "font_weight");
    this.appendDummyInput()
        .appendField("Font size")
        .appendField(new Blockly.FieldNumber(12, 0), "font_size")
        .appendField("px");
    this.appendValueInput("font_color")
        .setCheck("Colour")
        .appendField("Font color");
    this.appendValueInput("background_color")
        .setCheck("Colour")
        .appendField("Background color");
    this.appendDummyInput()
        .appendField("Alignment")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Center","center"], ["Right","right"], ["Justify","justify"]]), "alignment");
    this.appendDummyInput()
        .appendField("Text transformation")
        .appendField(new Blockly.FieldDropdown([["None","0"], ["Uppercase","uppercase"], ["Lowercase","lowercase"], ["Capitalize","capitalize"]]), "transformation");
    this.setOutput(true, null);
    this.setColour(165);
 this.setTooltip("Text style");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['posts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Posts");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Posts per page")
        .appendField(new Blockly.FieldNumber(10, 1, Infinity, 1), "posts_per_page");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Show only part of the post content")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "show_part_of_the_content");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Show thumbnail")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "show_thumbnail");
    this.appendValueInput("post_title_style")
        .setCheck("text_style")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Title style");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pixels'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0), "pixels")
        .appendField("px");
    this.setOutput(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['percents'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, 100), "percents")
        .appendField("%");
    this.setOutput(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['content_margin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Content margins");
    this.appendValueInput("left_margin")
        .setCheck(["pixels", "percents"])
        .appendField("Left margin");
    this.appendValueInput("right_margin")
        .setCheck(["pixels", "percents"])
        .appendField("Right margin");
    this.appendValueInput("top_margin")
        .setCheck(["pixels", "percents"])
        .appendField("Top margin");
    this.appendValueInput("bottom_margin")
        .setCheck(["pixels", "percents"])
        .appendField("Bottom margin");
    this.setOutput(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};