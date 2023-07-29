import React, { useState } from "react";
import { render } from "react-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Parser from "html-react-parser";
import Modal from "react-modal";
import QuillToolbar, {formats} from "./CustomToolBar";

function Editor() {
  // const modules = {
  //   toolbar: [
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [{ align: ["right", "center", "justify"] }],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["link", "image"],
  //     [{ color: ["red", "#785412"] }],
  //     [{ background: ["red", "#785412"] }],
  //     ["code-block"] // Add the custom format for inserting HTML
  //   ]
  // };
  //
  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "link",
  //   "color",
  //   "image",
  //   "background",
  //   "align",
  //   "code-block" // Add the custom format for inserting HTML
  // ];

  // const [code, setCode] = useState("<p>hiiiiiiiiii</p>");
  //
  // const handleProcedureContentChange = (content: React.SetStateAction<string>, delta: any, source: any, editor: any) => {
  //   setCode(content);
  // };


  return (
      <>
        <div className="text-editor">
          <QuillToolbar />
        </div>
      </>
  );
}

export default Editor;