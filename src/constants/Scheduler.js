import React from "react";
import Paper from "@material-ui/core/Paper";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

const content = `
        <div>
            <h1 style={{ marginTop: "50px" }}>
            SCHEDULER
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
            non enim praesent elementum facilisis leo vel. Risus at ultrices mi
            tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
            tellus. Convallis convallis tellus id interdum velit laoreet id donec
            ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
            suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
            quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
            proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
            tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
            varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
            Lorem donec massa sapien faucibus et molestie ac.
            </p>
        </div>
    `;

const Document1 = props => {
  const [html, setHtml] = React.useState(content);
  const [editable, setEditable] = React.useState(true);
  const [sanitizeContent, setSanitizeContent] = React.useState(false);
  let editableField = React.createRef();

  const focusDiv = () => {
    editableField.current.focus();
  };

  React.useEffect(() => {
    if (editable === false) {
      focusDiv();
    }
  }, [editable]);

  React.useEffect(() => {
    if (sanitizeContent) {
      sanitize(html);
    }
  }, [sanitizeContent]);

  const handleChange = e => {
    setHtml(e.target.value);
  };

  const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "h6", "h4", "div"],
    allowedAttributes: { a: ["href"] }
  };

  const sanitize = html => {
    setHtml(sanitizeHtml(html, sanitizeConf));
  };

  return (
    <React.Fragment>
      <Paper ref={editableField}>
        <ContentEditable
          tagName="pre"
          html={html}
          disabled={editable}
          onChange={handleChange}
          onClick={() => setEditable(false)}
          onBlur={() => setSanitizeContent(true)}
        />
      </Paper>
    </React.Fragment>
  );
};

export default Document1;
