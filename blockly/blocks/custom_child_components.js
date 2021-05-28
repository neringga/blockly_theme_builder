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
        "message0": "Text %1 Style %2",
        "args0": [
          {
            "type": "input_value",
            "name": "text"
          },
          {
            "type": "input_value",
            "name": "text_style"
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
        "message0": "Image URL %1 Opacity %2 %3 Style %4",
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
            "name": "style",
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
        "message0": "Posts %1 Post content items %2 Posts per page %3 %4 Show thumbnail %5 %6 Post style %7",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "post"
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
        "message0": "Records %1 Style %2 Record content items %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "display_style"
          },
          {
            "type": "input_statement",
            "name": "item_configuration"
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
        "message0": "Navigation menu %1 Alignment %2 %3 Style %4",
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
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "navigation",
        "message0": "Menu %1 Display location: %2 %3 Style %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "nav_menu_name",
            "options": [
              [
                "Menu A",
                "header-menu"
              ],
              [
                "Menu B",
                "footer-menu"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style"
          }
        ],
        "output": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      }
]);