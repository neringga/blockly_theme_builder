Blockly.defineBlocksWithJsonArray([ 
    {
        "type": "text_style",
        "message0": "Font family %1 Font style %2 %3 Font weight %4 %5 Font size %6 px %7 Font color %8 Background color %9 Alignment %10 %11 Text transformation %12",
        "args0": [
          {
            "type": "input_value",
            "name": "font_family",
            "check": "String"
          },
          {
            "type": "field_dropdown",
            "name": "font_style",
            "options": [
              [
                "Normal",
                "normal"
              ],
              [
                "Italic",
                "italic"
              ],
              [
                "Oblique",
                "oblique"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "font_weight",
            "options": [
              [
                "Normal",
                "normal"
              ],
              [
                "Bold",
                "bold"
              ],
              [
                "Light",
                "lighter"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "font_size",
            "value": 12,
            "min": 0
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "font_color"
          },
          {
            "type": "input_value",
            "name": "background_color"
          },
          {
            "type": "field_dropdown",
            "name": "alignment",
            "options": [
              [
                "Left",
                "left"
              ],
              [
                "Center",
                "center"
              ],
              [
                "Right",
                "right"
              ],
              [
                "Justify",
                "justify"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "transformation",
            "options": [
              [
                "None",
                "0"
              ],
              [
                "Uppercase",
                "uppercase"
              ],
              [
                "Lowercase",
                "lowercase"
              ],
              [
                "Capitalize",
                "capitalize"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "content_margin",
        "message0": "Content margins %1 Left margin %2 Right margin %3 Top margin %4 Bottom margin %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "left_margin"
          },
          {
            "type": "input_value",
            "name": "right_margin"
          },
          {
            "type": "input_value",
            "name": "top_margin"
          },
          {
            "type": "input_value",
            "name": "bottom_margin"
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "pixels",
        "message0": "%1 px",
        "args0": [
          {
            "type": "field_number",
            "name": "pixels",
            "value": 0,
            "min": 0
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "percents",
        "message0": "%1 %%",
        "args0": [
          {
            "type": "field_number",
            "name": "percents",
            "value": 0,
            "min": 0,
            "max": 100
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "display_style",
        "message0": "Display style %1 Margins %2 Padding %3 Border %4 Background color %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "margins"
          },
          {
            "type": "input_value",
            "name": "padding"
          },
          {
            "type": "input_value",
            "name": "border"
          },
          {
            "type": "input_value",
            "name": "background"
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "border",
        "message0": "Border %1 Border style %2 %3 Border width %4 Border color %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "border_style",
            "options": [
              [
                "dotted",
                "dotted"
              ],
              [
                "double",
                "double"
              ],
              [
                "groove",
                "groove"
              ],
              [
                "ridge",
                "ridge"
              ],
              [
                "inset",
                "inset"
              ],
              [
                "hidden",
                "hidden"
              ],
              [
                "dashed",
                "dashed"
              ],
              [
                "outset",
                "outset"
              ],
              [
                "none",
                "none"
              ],
              [
                "solid",
                "solid"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "border_width"
          },
          {
            "type": "input_value",
            "name": "border_color"
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "padding",
        "message0": "Padding %1 Left padding %2 Right padding %3 Top padding %4 Bottom padding %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "left",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "right",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "top",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "bottom",
            "check": [
              "pixels",
              "percents"
            ]
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "empty_value",
        "message0": "Empty",
        "output": null,
        "colour": 165,
        "tooltip": "Empty value. No value will be added",
        "helpUrl": ""
      },
      {
        "type": "hex_color_code",
        "message0": "Hex colour code %1",
        "args0": [
          {
            "type": "field_input",
            "name": "hex_colour",
            "text": "#000000"
          }
        ],
        "output": null,
        "colour": 15,
        "tooltip": "Enter hex colour code",
        "helpUrl": ""
      },
      {
        "type": "size",
        "message0": "Size %1 Width %2 Height %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "width",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "height",
            "check": [
              "pixels",
              "percents"
            ]
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "background_color",
        "message0": "Background color %1 %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          },
          {
            "type": "input_dummy"
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      }
]);

Blockly.Blocks['unlimited_style'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
    this.setStyle('list_blocks');
    this.setColour('165');
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item_style']));
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item_style');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
        if (i == 0) {
          input.appendField("Styles");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['lists_create_with_item_style'] = {
  /**
   * Mutator block for adding items.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
        .appendField("style");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP']);
    this.contextMenu = false;
  }
};