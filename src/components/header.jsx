import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <MainMenu>
      <Btns>
        <button onClick={() => navigate("/program")}>교육 과정</button>
        <button>연구소 안내</button>
        <button> 교육 후기</button>
        <button>커뮤니티</button>
        <button>협력 센터</button>
      </Btns>
      <Link to={"/"}>
        <img alt="" src="/logo.jpg" width={50} />
      </Link>
      <MyPage>
        <button>로그인</button>
        <button>강의 담기</button>
        <button>나의 정보</button>
      </MyPage>
    </MainMenu>
  );
};
export default Header;
const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;
const Btns = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  button {
    margin: 0px 5px;
    background-color: transparent;
    font-size: 18px;
    border: none;
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }
`;
const MyPage = styled(Btns)`
  justify-content: flex-end;
  padding-right: 50px;
`;
