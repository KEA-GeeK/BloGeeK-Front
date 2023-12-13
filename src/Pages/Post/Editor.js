import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import '../../index.css';

const Editor = ({ onContentChange }) => {
  const paperStyle = {
    padding: '20px',
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    if (onContentChange) {
      onContentChange(data);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper style={paperStyle}>
        <div className="Editor">
          <section>
            <CKEditor
              editor={ClassicEditor}
              config={{ placeholder: "내용을 입력하세요." }}
              onChange={handleEditorChange}
            />
          </section>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Editor;
