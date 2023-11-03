import { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down-solid.svg";
import styled from "styled-components";

const BestPostsSelect = ({ trigger, items, onToggleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => setIsOpen(true);

  const onCloseSelect = (item) => {
    onToggleSelect(item);
    setIsOpen(false);
  };

  return (
    <StBestPostsSelect>
      <BestPostsSelectTrigger onClick={onOpenSelect}>
        {trigger}
        <ArrowDown />
      </BestPostsSelectTrigger>
      {isOpen && (
        <BestPostsSelectMenu>
          {items.map((item) => (
            <BestPostsSelectItem key={item} onClick={() => onCloseSelect(item)}>
              {item}
            </BestPostsSelectItem>
          ))}
        </BestPostsSelectMenu>
      )}
    </StBestPostsSelect>
  );
};

const StBestPostsSelect = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 180px;
  border: 2px solid #ccc;
  border-radius: 4px;
  z-index: 50;
`;

const BestPostsSelectTrigger = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 650;
  font-family: sans-serif;

  svg {
    margin-left: 48px;
    width: 1rem;
    height: 1rem;
  }
`;

const BestPostsSelectMenu = styled.ul`
  background: #fff;
`;

const BestPostsSelectItem = styled.li`
  padding: 12px;
  font-size: 1rem;
  font-weight: 650;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    background: rgb(64, 58, 107, 0.1);
  }
`;

export default BestPostsSelect;
