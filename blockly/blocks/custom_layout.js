Blockly.defineBlocksWithJsonArray([ 
    {
        "type": "column",
        "message0": "Column %1 Width number %2 %3 %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "width",
            "value": 6,
            "min": 1,
            "max": 12,
            "precision": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "input"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 30,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "row",
        "message0": "Row %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "input"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 300,
        "tooltip": "",
        "helpUrl": ""
      }
]);