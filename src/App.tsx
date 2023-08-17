import "./styles.css";
import { SimpleEditor } from "./SimpleEditor";
import { PopupEditor } from "./PopupEditor";

export default function App() {
  return (
    <div className="app">
      <h1>Editors</h1>
      <h2>Example #1</h2>
      <p>It's a simple editor with menu in the top. </p>
      <SimpleEditor />

      <h2>Example #2</h2>
      <p>
        It's with bubble menu. Highlight any word and a bubble menu will pop up.
      </p>
      <PopupEditor />

      <h2>Description</h2>

      <p>
        These prototypes based on{" "}
        <a href="https://tiptap.dev" target="_blank" rel="noreferrer">
          Tiptap
        </a>
        . Tiptap is a headless module. It means it doesn't have any markup, API
        only. Editor can be designed in any way.
      </p>

      <h3>Link</h3>
      <ul>
        <li>Pasted URLs will be transformed to links automatically.</li>
        <li>
          Highlight any word or sentences and press Cmd+V. It will be
          transformed to link.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/link"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </li>
      </ul>

      <h3>Bold</h3>
      <ul>
        <li>
          Type <b>**two asterisks**</b> or <b>__two underlines__</b> and it will
          magically transform to <strong>bold text</strong> while you type.
        </li>
        <li>
          Hot key: <kbd>Cmd B</kbd>.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/bold"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
          .
        </li>
      </ul>

      <h3>Underline</h3>
      <ul>
        <li>
          Hot key: <kbd>Cmd U</kbd>.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/underline"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </li>
      </ul>

      <h3>Italic</h3>
      <ul>
        <li>
          Type *one asterisk* or _one underline_ and it will magically transform
          to <em>italic text</em> while you type.
        </li>
        <li>
          Hot key: <kbd>Cmd I</kbd>.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/italic"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </li>
      </ul>

      <h3>Strike</h3>
      <ul>
        <li>
          Type ∼∼text between tildes∼∼ and it will be <del>striked through</del>{" "}
          while you type.
        </li>
        <li>
          Hot key: <kbd>Cmd Shift X</kbd>.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/strike<p><code>This is code.</code></p>"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </li>
      </ul>

      <h3>Code</h3>
      <ul>
        <li>
          Type something with <code>`back-ticks around`</code> and it will
          magically transform to <code>inline code</code> while you type.
        </li>
        <li>
          Hot key: <kbd>Cmd E</kbd>.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/code"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </li>
      </ul>

      <h3>History</h3>
      <ul>
        <li>
          This extension provides history support. All changes to the document
          will be tracked and can be removed with <code>undo</code>. Undone
          changes can be applied with <code>redo</code> again.
        </li>
        <li>
          Hot key: Undo: <kbd>Cmd Z</kbd> Redo: <kbd>Shift Cmd Z</kbd> or{" "}
          <kbd>Cmd Y</kbd>.
        </li>
        <li>
          <a
            href="https://tiptap.dev/api/marks/code"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </li>
      </ul>

      <p>
        <a href="https://tiptap.dev/api/marks" target="_blank" rel="noreferrer">
          All possible marks
        </a>
      </p>
    </div>
  );
}
