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
            "name": "font_color",
            "check": "Colour"
          },
          {
            "type": "input_value",
            "name": "background_color",
            "check": "Colour"
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
            "name": "left_margin",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "right_margin",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "top_margin",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "bottom_margin",
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
            "name": "margins",
            "check": "content_margin"
          },
          {
            "type": "input_value",
            "name": "padding",
            "check": "padding"
          },
          {
            "type": "input_value",
            "name": "border",
            "check": "border"
          },
          {
            "type": "input_value",
            "name": "background",
            "check": "Colour"
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
            "name": "border_width",
            "check": "pixels"
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
      }
]);