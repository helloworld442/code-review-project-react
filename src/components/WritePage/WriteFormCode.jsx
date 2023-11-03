import styled from "styled-components";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.min.css";
import { useEffect, useRef, useState } from "react";

const WriteFormCode = ({ name, value, error, label, onChange }) => {
  const textareaRef = useRef(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    let hightcode = hljs.highlight(value, { language: "javascript" }).value;
    hightcode = hightcode.replace(/" "/g, "&nbsp; ");

    setCode(hightcode);
  }, [value]);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <StWriteFormCode>
      <WriteFormCodeLabel>{label}</WriteFormCodeLabel>
      <WriteFormCodeBox>
        <FormCodeArea>
          <ul className="code-numbering">
            {code.split("\n")?.map((_, i) => (
              <li key={i}>{i + 1}</li>
            ))}
          </ul>
          <pre className="code-core javascript">
            <code className="javascript" dangerouslySetInnerHTML={{ __html: code }} />
          </pre>
        </FormCodeArea>
        <FormCodeTextArea
          ref={textareaRef}
          name={name}
          value={value}
          onChange={onChange}
          spellCheck="false"
        />
      </WriteFormCodeBox>

      <WriteFormCodeError>{error}</WriteFormCodeError>
    </StWriteFormCode>
  );
};

const StWriteFormCode = styled.div`
  width: 100%;
  height: auto;
`;

const WriteFormCodeLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
`;

const WriteFormCodeBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;
  background: rgb(247, 246, 243);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FormCodeTextArea = styled.textarea`
  position: absolute;
  right: 0;
  width: 95%;
  padding: 14px 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: transparent;
  background: transparent;
  caret-color: #333;
  line-height: 1.5rem;
  resize: none;
  z-index: 1;
  white-space: pre-wrap;
  overflow-y: hidden;
`;

const FormCodeArea = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100%;
  border: none;
  outline: none;
  background: rgb(247, 246, 243);
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: #eee;
  caret-color: #333;
  z-index: 0;

  .code-numbering {
    position: absolute;
    left: 0;
    width: 5%;
    padding: 14px 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.15rem;
    font-weight: 400;
    font-family: monospace;
    color: #888;
    background: rgb(247, 246, 243);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    white-space: pre-wrap;
    overflow-y: hidden;
    line-height: 1.5rem;
  }

  .code-core {
    position: absolute;
    right: 0;
    width: 95%;
    padding: 14px 12px;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    font-family: monospace;
    color: #333;
    caret-color: #333;
    white-space: pre-wrap;
    overflow-y: hidden;
    line-height: 1.5rem;
  }
`;

const WriteFormCodeError = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.95rem;
  font-weight: 400;
  color: red;
`;

export default WriteFormCode;
