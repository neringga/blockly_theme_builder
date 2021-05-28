$(document).ready(function () {
  $("#iframe_wordpress").hide();

  $("#option_code").on("change", function () {
    $("#codearea").show();
    $("#iframe_wordpress").hide();
  });

  $("#option_demo").on("change", function () {
    $("#codearea").hide();
    $("#iframe_wordpress").show();
  });
});

function onReload() {
  if ($("#iframe_wordpress").is(":visible")) {
    var blocks = workspace.getTopBlocks();
    for (var i = 0; i < blocks.length; i++) {
      var blockName = blocks[i].type + ".php";
      var blockCode = Blockly.PHP.blockToCode(blocks[i]);

      updateTheme(blockName, blockCode)
    }
  }
}

function onWorkspaceChange(event) {
  var code = Blockly.PHP.workspaceToCode(workspace);
  document.getElementById("codearea").value = code;
}

function showCode() {
  var blocks = workspace.getTopBlocks();
  var zip = new JSZip();

  // patikrinti ar yra index. jei nera - negeneruoti

  for (var i = 0; i < blocks.length; i++) {
    var blockName = blocks[i].type + ".php";
    var blockCode = Blockly.PHP.blockToCode(blocks[i]);

    zip.file(blockName, blockCode);
  }

  zip.file(
    "style.css",
    `/*
                          Theme Name: New Theme
                          Author: Neringa
                          */`
  );

  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "theme.zip");
  });
}

function updateTheme(fileName, fileContent) {
  var request = {
    title: fileName,
    content: fileContent,
  };

  $.ajax({
    type: "post",
    contentType: "application/json; charset=utf-8",
    url: `https://localhost:5001/api/wordpressTheme`,
    data: JSON.stringify(request),
    success: function (status) {
      document.getElementById(
        "iframe_wordpress"
      ).src = document.getElementById("iframe_wordpress").src;
    },
    error: function () {
      console.log("error");
    },
  });
}
