import styled from "styled-components";
import Header from "../../components/header";
import Layout from "../../components/layout";
import useToggle from "../../hooks/useToggle";
import MyCalendar from "./calendar";

const Main = () => {
  const [toggle, setToggle, clickToggle] = useToggle();
  return (
    <>
      <Layout>
        <Header
          toggle={toggle}
          setToggle={setToggle}
          clickToggle={clickToggle}
        />
        {toggle ? (
          <MyCalendar />
        ) : (
          <MainImage>
            <img alt="" src="/mainimg.png" />
          </MainImage>
        )}
      </Layout>
    </>
  );
};

export default Main;

const MainImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  img {
    width: 600px;
  }
`;
