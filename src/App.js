import React from "react";

import Editor from "@monaco-editor/react";

function App() {
  function handleEditorMount(editor, monaco) {
    console.log(monaco.KeyCode);
    /*editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
      alert("Command to Save");
    });

    editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_S, () => {
      alert("Win Command to Save");
    });*/

    editor.addAction({
      id: "ws-save",
      label: "Save",
      keybindings: [
        monaco.KeyMod.chord(
          monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
          monaco.KeyMod.WinCtrl | monaco.KeyCode.KeyS
        )
      ],
      contextMenuGroupId: "navigation",
      run: function (ed) {
        alert("Action Save...!");
      }
    });
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onMount={handleEditorMount}
    />
  );
}

export default App;
