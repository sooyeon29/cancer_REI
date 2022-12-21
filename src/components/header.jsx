import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsCalendarWeek } from "react-icons/bs";
import useToggle from "../hooks/useToggle";

const Header = ({ toggle, setToggle, clickToggle }) => {
  const navigate = useNavigate();

  return (
    <MainMenu>
      <Btns>
        <Program onClick={() => navigate("/program")}>
          교육 과정
          <div className="sideProgram">교육1 교육2 교육3</div>
        </Program>
        <LapInfo>
          연구소 안내
          <div className="sideLapInfo">교육1 교육2 교육3</div>
        </LapInfo>
        <Comments>
          {" "}
          교육 후기
          <div className="sideComments">교육1 교육2 교육3</div>
        </Comments>
        <Community>
          커뮤니티
          <div className="sideCommunity">교육1 교육2 교육3</div>
        </Community>
        <Center>
          협력 센터
          <div className="sideCenter">교육1 교육2 교육3</div>
        </Center>
      </Btns>
      <Link to={"/"}>
        <img alt="" src="/logo.jpg" width={50} />
      </Link>
      <MyPage>
        {toggle ? (
          <button onClick={clickToggle}>달력닫기</button>
        ) : (
          <button onClick={clickToggle}>
            <BsCalendarWeek />
          </button>
        )}

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
const Program = styled.button`
  .sideProgram {
    visibility: hidden;
  }
  :hover {
    .sideProgram {
      margin-top: 20px;
      visibility: visible;
    }
  }
`;
const LapInfo = styled.button`
  .sideLapInfo {
    visibility: hidden;
  }
  :hover {
    .sideLapInfo {
      margin-top: 20px;
      visibility: visible;
    }
  }
`;
const Comments = styled.button`
  .sideComments {
    visibility: hidden;
  }
  :hover {
    .sideComments {
      margin-top: 20px;
      visibility: visible;
    }
  }
`;
const Community = styled.button`
  .sideCommunity {
    visibility: hidden;
  }
  :hover {
    .sideCommunity {
      margin-top: 20px;
      visibility: visible;
    }
  }
`;
const Center = styled.button`
  .sideCenter {
    visibility: hidden;
  }
  :hover {
    .sideCenter {
      margin-top: 20px;
      visibility: visible;
    }
  }
`;
const MyPage = styled(Btns)`
  justify-content: flex-end;
  padding-right: 50px;
`;
