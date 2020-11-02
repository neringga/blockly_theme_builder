Blockly.Blocks['front_page'] = {
  init: function() {
    this.appendStatementInput("Front-page")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Front page");
    this.setColour(270);
 this.setTooltip("This is a front page block. Connect blocks that you want to appear in your front-page.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['posts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Posts");
    this.appendDummyInput()
        .appendField("Sort:")
        .appendField(new Blockly.FieldDropdown([["oldest to newest","old_to_new"], ["newest to oldest","new_to_old"], ["random","random"]]), "order_by");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Child. This block defines your posts. Connects this to parent blocks.");
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
    this.setColour(230);
 this.setTooltip("Child. Block to add text paragraph.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Header");
    this.appendStatementInput("header_components")
        .setCheck(null);
    this.setColour(270);
 this.setTooltip("Parent. Header that will be shown in all the pages.");
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