import React, {useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import Modal from "react-modal";

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
	<svg viewBox="0 0 18 18">
		<polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"/>
		<path
			className="ql-stroke"
			d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
		/>
	</svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
	<svg viewBox="0 0 18 18">
		<polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"/>
		<path
			className="ql-stroke"
			d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
		/>
	</svg>
);

const CustomHtmlIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
		<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
	</svg>
)

// Undo and redo functions for Custom Toolbar
function undoChange(this: any) {
	this.quill.history.undo();
}

function redoChange(this: any) {
	this.quill.history.redo();
}


// Formats objects for setting up the Quill editor
export const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"align",
	"strike",
	"script",
	"blockquote",
	"background",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"color",
	"code-block"
];

// Modules object for setting up the Quill editor
const modules = {
	toolbar: {
		container: "#toolbar",
		handlers: {
			undo: undoChange,
			redo: redoChange,
			"insert": function () {
				console.log('/dsadas')
			}
		}
	},
	history: {
		delay: 500,
		maxStack: 100,
		userOnly: true
	}
};

// Quill Toolbar component
export const QuillToolbar = () => {
	// State for the custom modal
	const [code, setCode] = useState("<p>hiiiiiiiiii</p>");
	const [showModal, setShowModal] = useState(false);
	const [customHtml, setCustomHtml] = useState("");

	const handleOpenModal = () => {
		setShowModal(true)
	}
	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleCustomHtmlChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setCustomHtml(event.target.value);
	};

	const insertCustomHtml = () => {
		setCode(code + customHtml); // Append the custom HTML to the editor's content
		setShowModal(false);
	};

	const handleProcedureContentChange = (content: React.SetStateAction<string>, delta: any, source: any, editor: any) => {
		setCode(content);
	};


	return (
		<section>
			<div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
				<span className="ql-formats">
      <button className="ql-bold"/>
      <button className="ql-italic"/>
      <button className="ql-underline"/>
      <button className="ql-strike"/>
    </span>
				<span className="ql-formats">
      <button className="ql-list" value="ordered"/>
      <button className="ql-list" value="bullet"/>
      <button className="ql-indent" value="-1"/>
      <button className="ql-indent" value="+1"/>
    </span>
				<span className="ql-formats">
      <button className="ql-script" value="super"/>
      <button className="ql-script" value="sub"/>
      <button className="ql-blockquote"/>
      <button className="ql-direction"/>
    </span>
				<span className="ql-formats">
      <select className="ql-align"/>
      <select className="ql-color"/>
      <select className="ql-background"/>
    </span>
				<span className="ql-formats">
      <button className="ql-link"/>
      <button className="ql-image"/>
      <button className="ql-video"/>
    </span>
				<span className="ql-formats">
      <button className="ql-formula"/>
      <button className="ql-code-block"/>
      <button className="ql-clean"/>
    </span>
				<span className="ql-formats">
		<button className="ql-undo">
			<CustomUndo/>
		 </button>
      <button className="ql-redo">
        <CustomRedo/>
      </button>
			<button className="ql-insert" onClick={handleOpenModal}>
				<CustomHtmlIcon />
			</button>
    </span>
			</div>
			<ReactQuill
				theme="snow"
				value={code}
				onChange={handleProcedureContentChange}
				placeholder={"Write something awesome..."}
				modules={modules}
				formats={formats}
			/>

			<Modal isOpen={showModal} onRequestClose={handleModalClose}>
        <textarea
			value={customHtml}
			onChange={handleCustomHtmlChange}
			rows={6}
			cols={50}
		/>
				<button onClick={insertCustomHtml}>Insert</button>
				<button onClick={handleModalClose}>Cancel</button>
			</Modal>
		</section>
	);
}

export default QuillToolbar;