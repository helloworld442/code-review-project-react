import { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down-solid.svg";

const SelectContext = createContext(null);

const Select = ({ children, onAddSelect, onRemoveSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => setIsOpen(true);

  const onCloseSelect = () => setIsOpen(false);

  return (
    <SelectContext.Provider
      value={{ isOpen, onCloseSelect, onOpenSelect, onAddSelect, onRemoveSelect }}
    >
      <StSelectBox>{children}</StSelectBox>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ trigger }) => {
  const { onOpenSelect } = useContext(SelectContext);

  return (
    <StSelectTrigger onClick={onOpenSelect}>
      {trigger} <ArrowDown />
    </StSelectTrigger>
  );
};

const SelectMenu = ({ items }) => {
  const { isOpen } = useContext(SelectContext);

  return (
    <StSelectMenu isOpen={isOpen}>
      {items.map((item) => (
        <SelectItem item={item} key={item.id} />
      ))}
      <SelectClose trigger="닫기" />
    </StSelectMenu>
  );
};

const SelectItem = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  const { onAddSelect, onRemoveSelect } = useContext(SelectContext);

  const onClickSelect = (item) => {
    // 선택했다면 다음로직을 수행한다.
    if (!isActive) {
      onAddSelect(item);
      setIsActive(true);
    }

    //선택을 취소했다면 다음로직을 수행한다.
    else {
      onRemoveSelect(item);
      setIsActive(false);
    }
  };

  return (
    <StSelectItem>
      <input type="checkbox" className="select-checkbox" onClick={() => onClickSelect(item)} />
      <h4 className="select-name">{item}</h4>
    </StSelectItem>
  );
};

const SelectClose = ({ trigger }) => {
  const { onCloseSelect } = useContext(SelectContext);

  return <StSelectClose onClick={onCloseSelect}>{trigger}</StSelectClose>;
};

const StSelectBox = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 50px;
`;

const StSelectTrigger = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.825rem;
  font-weight: 400;
  font-family: sans-serif;
  color: #888;
  background: #f0f1f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    float: right;
    transform: translateY(-50%);
    border-left: 2px solid #333;
    width: 0.8rem;
    height: 0.8rem;
    padding: 0 4px;
    fill: #333;
  }
`;

const StSelectMenu = styled.ul`
  position: relative;
  width: 100%;
  padding: 12px;
  margin-top: 24px;
  box-sizing: border-box;
  border: 2px solid #888;
  outline: none;
  border-radius: 8px;
  background: #fff;
  z-index: 100;
  display: none;

  ${(props) =>
    props.isOpen &&
    css`
      display: inline-block;
    `}
`;

const StSelectItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  .select-checkbox {
    width: 18px;
    height: 18px;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    -webkit-box-shadow: 0px 0px 0px 2px #ccc;
    -moz-box-shadow: 0px 0px 0px 2px #ccc;
    box-shadow: 0px 0px 0px 2px #ccc;
    cursor: pointer;

    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: rgb(64, 58, 107, 0.8);
    }
  }

  .select-name {
    font-size: 1rem;
    font-weight: 750;
    color: #333;
  }
`;

const StSelectClose = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 0.925rem;
  font-weight: 550;
  font-family: sans-serif;
  color: #333;
  cursor: pointer;
`;

Select.Trigger = SelectTrigger;
Select.Menu = SelectMenu;

export { Select };
