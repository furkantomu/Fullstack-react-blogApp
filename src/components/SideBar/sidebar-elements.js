import styled from "styled-components";

export const SideBarContainer = styled.div`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
`;
export const SideBarTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 100%;
  position: relative;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: "Varela Round", sans-serif;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;
export const SideBarImg = styled.img`
  margin-top: 15px;
`;
export const SideBarDesc = styled.p`
  padding: 30px;
`;
export const SideBarList = styled.ul`
  display: flex;
  
  flex-wrap: wrap;
  margin:0;
  padding: 0;
  width: 210px;

  
  a {
    margin:0 20px 5px 0;
    cursor: pointer;
    background-color: #ccc;
    padding: 5px 5px;
    border-radius: 4px;
  }
`;
export const SideBarListItem = styled.li`
  width: 100%;
  list-style: none;
`;
export const SideBarSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
