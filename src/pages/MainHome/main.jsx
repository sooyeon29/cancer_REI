import styled from "styled-components";
import Header from "../../components/header";
import Layout from "../../components/layout";

const Main = () => {
  return (
    <>
      <Layout>
        <Header />
        <MainImage>
          <img alt="" src="/mainimg.png" />
        </MainImage>
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
