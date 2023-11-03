import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/magnifying-glass-solid.svg";

const BestPostsSearch = () => {
  return (
    <BestPostsSearchForm>
      <BestPostsSearchInput
        placeholder="제목을 입력해주세요 (태그 사용 가능 구분 : #)"
        spellCheck="false"
      />
      <BestPostsSearchButton>
        <Search />
      </BestPostsSearchButton>
    </BestPostsSearchForm>
  );
};

const BestPostsSearchForm = styled.div`
  width: 100%;
  padding: 20px 24px;
  box-sizing: border-box;
  border-radius: 48px;
  background: #f0f1f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BestPostsSearchInput = styled.input`
  width: 80%;
  border: none;
  outline: none;
  font-size: 0.95rem;
  font-weight: 400;
  font-family: "Jua";
  color: #333;
  background: transparent;
`;

const BestPostsSearchButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`;

export default BestPostsSearch;
