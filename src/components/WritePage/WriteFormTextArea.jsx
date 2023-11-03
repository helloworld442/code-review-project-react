import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "../../utils/hightlight.css";

const WriteFormTextArea = ({ label, value, error, onChange, ...rest }) => {
  const textareaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hightlightedText, setHightlightedText] = useState("");
  const [hightlightedCode, setHightlightedCode] = useState("");

  const onToggleButton = () => setIsOpen(!isOpen);

  const onCheckTrigger = (e) => {
    const TEXT_SIZE_REGEX = /#+ ([^]+)/;
    const TEXT_BOLD_REGEX = /\*\*([^ ]+)\*\*/;
    const TEXT_CANCEL_REGEX = /~~([^]+)~~/;

    let texts = e.target.value.split("\n");

    texts = texts.map((text) => {
      if (TEXT_SIZE_REGEX.test(text)) {
        text = text.replaceAll("#", `<span class = "hg-size-text">#</span>`);
      }

      if (TEXT_BOLD_REGEX.test(text)) {
        text = text.replaceAll("*", `<span class = "hg-bold-text">*</span>`);
      }

      if (TEXT_CANCEL_REGEX.test(text)) {
        text = text.replaceAll("~", `<span class = "hg-cancel-text">~</span>`);
      }

      return text;
    });

    texts = texts.join("\n");

    setHightlightedText(texts);
  };

  const showTriggerInCode = (text) => {
    const TEXT_SIZE_REGEX = /#+ ([^]+)/;
    const TEXT_BOLD_REGEX = /\*\*([^ ]+)\*\*/;
    const TEXT_CANCEL_REGEX = /~~([^]+)~~/;

    let texts = text.split("\n");

    texts = texts.map((text) => {
      const sizeIndex = (text.match(/#/g) || []).length;

      text = text.replace(TEXT_SIZE_REGEX, `<span class = "hg-size-code${sizeIndex}">$1</span>`);

      text = text.replace(TEXT_BOLD_REGEX, `<span class = "hg-bold-code">$1</span>`);

      text = text.replace(TEXT_CANCEL_REGEX, `<span class = "hg-cancel-code">$1</span>`);

      return text;
    });

    texts = texts.join("\n");

    setHightlightedCode(texts);
  };

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [isOpen, value]);

  useEffect(() => {
    showTriggerInCode(value);
  }, [isOpen, value]);

  return (
    <WriteFormTextAreaBox>
      <WriteFormTextAreaLabel>{label}</WriteFormTextAreaLabel>

      <WriteFormTextAreaDesc>
        <span id={isOpen ? "active" : ""} onClick={onToggleButton}>
          미리보기
        </span>
      </WriteFormTextAreaDesc>

      <WriteFormTextAreaContent>
        <div className="textarea-box">
          <WriteFormTextAreaPre>
            <code dangerouslySetInnerHTML={{ __html: hightlightedText }} />
          </WriteFormTextAreaPre>
          <StWriteFormTextArea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              onChange(e);
              onCheckTrigger(e);
            }}
            {...rest}
            spellCheck="false"
          />
        </div>

        {isOpen && (
          <WriteFormTextAreaView>
            <code dangerouslySetInnerHTML={{ __html: hightlightedCode }} />
          </WriteFormTextAreaView>
        )}
      </WriteFormTextAreaContent>

      <WriteFormTextAreaError>{error}</WriteFormTextAreaError>
    </WriteFormTextAreaBox>
  );
};

const WriteFormTextAreaBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const WriteFormTextAreaLabel = styled.label`
  display: inline-block;
  width: auto;
  margin-bottom: 14px;
  font-size: 1.2rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
`;

const WriteFormTextAreaDesc = styled.div`
  margin-bottom: 12px;
  border-bottom: 2px solid #e8e8e8;

  span {
    display: inline-block;
    padding: 12px;
    font-size: 0.9rem;
    font-weight: 550;
    font-family: "Pretendard";
    cursor: pointer;
  }

  #active {
    border-bottom: 3px solid rgb(64, 58, 107, 0.8);
  }
`;

const WriteFormTextAreaContent = styled.div`
  display: flex;
  gap: 12px;

  .textarea-box {
    position: relative;
    width: 100%;
    min-height: 400px;
    box-sizing: border-box;
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    background: #fff;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none;

    pre,
    textarea {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const WriteFormTextAreaPre = styled.pre`
  width: 100%;
  padding: 14px 12px;
  box-sizing: border-box;
  font-size: 1.05rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
  caret-color: #333;
  white-space: pre-wrap;
  overflow-y: hidden;
  line-height: 1.5rem;
  letter-spacing: 1px;
`;

const StWriteFormTextArea = styled.textarea`
  width: 100%;
  padding: 14px 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1.05rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: transparent;
  background: transparent;
  caret-color: #333;
  line-height: 1.5rem;
  resize: none;
  z-index: 1;
  white-space: pre-wrap;
  overflow-y: hidden;
  letter-spacing: 1px;
`;

const WriteFormTextAreaView = styled.pre`
  position: relative;
  width: 100%;
  min-height: 400px;
  padding: 14px 12px;
  box-sizing: border-box;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  font-size: 1.05rem;
  font-weight: 550;
  font-family: "Pretendard";
  color: #333;
  background: #fff;
  line-height: 1.5rem;
  white-space: pre-wrap;
  overflow-y: scroll;
  letter-spacing: 1px;
`;

const WriteFormTextAreaError = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.95rem;
  font-weight: 400;
  color: red;
`;

export default WriteFormTextArea;
