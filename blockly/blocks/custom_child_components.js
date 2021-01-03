Blockly.defineBlocksWithJsonArray([ 
    {
        "type": "page_content",
        "message0": "Assigned page content",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "text_custom",
        "message0": "Text %1 Text style %2 Margins %3",
        "args0": [
          {
            "type": "input_value",
            "name": "text"
          },
          {
            "type": "input_value",
            "name": "text_style"
          },
          {
            "type": "input_value",
            "name": "margins"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "image",
        "message0": "Image URL %1 Opacity %2 %3 Width %4 Height %5",
        "args0": [
          {
            "type": "input_value",
            "name": "image_url",
            "check": "String"
          },
          {
            "type": "field_number",
            "name": "image_opacity",
            "value": 0,
            "min": 0,
            "max": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "width",
            "check": ["pixels", "percents"]
          },
          {
            "type": "input_value",
            "name": "height",
            "check": ["pixels", "percents"]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "posts",
        "message0": "Posts %1 Post content items %2 Posts per page %3 %4 Show thumbnail %5 %6 Post display style %7",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "post",
            "check": [
              "item_title",
              "item_content",
              "item_excerpt"
            ]
          },
          {
            "type": "field_number",
            "name": "posts_per_page",
            "value": 10,
            "min": 1,
            "precision": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "show_thumbnail",
            "checked": true
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "post_style",
            "check": "display_style"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "search_field",
        "message0": "Search field",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "records",
        "message0": "Records %1 Record display style %2 Record content items %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "display_style",
            "check": "display_style"
          },
          {
            "type": "input_statement",
            "name": "item_configuration",
            "check": [
              "item_title",
              "item_content",
              "item_excerpt"
            ]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Records that are displayed in archive or search result page",
        "helpUrl": ""
      },
      {
        "type": "empty_statement",
        "message0": "Empty",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Insert this block to indicate that no child items will be added",
        "helpUrl": ""
      },
      {
        "type": "navigation_menu",
        "message0": "Navigation menu %1 Alignment %2 %3 Text style %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "alignment",
            "options": [
              [
                "left",
                "flex-right"
              ],
              [
                "right",
                "flex-end"
              ],
              [
                "center",
                "center"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style",
            "check": [
              "text_style",
              "empty_value"
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      }
]);