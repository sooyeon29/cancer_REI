import styled from "styled-components";

const ProHead = () => {
  return (
    <>
      <MorePrograms>
        <div>교육1</div>
        <div>교육2</div>
        <div>교육3</div>
      </MorePrograms>
    </>
  );
};

export default ProHead;

const MorePrograms = styled.div`
  position: fixed;
  background-color: pink;
  opacity: 0.5;
  margin-left: 60px;
  div {
    margin-top: 5px;
  }
`;
