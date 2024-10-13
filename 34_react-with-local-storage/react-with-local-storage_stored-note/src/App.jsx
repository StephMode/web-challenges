import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // const [note, setNote] = useState("");
  const [note, setNote] = useLocalStorageState("note", { defaultValue: [""] });
  // const [font, setFont] = useState("system-ui");
  const [font, setFont] = useLocalStorageState("font", {
    defaultValue: [""],
  });

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}

/*

1. import local storage state library hook into App
2. turn state var into useLocalStorageState

2.1 
useLocalStorageState
default value ""

2.2.
useLocalStorageState
default font

*/
