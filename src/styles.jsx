import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export const Header = styled.header`
  text-align: center;
  background-color: #2965ed;
  h1 {
    color: #ffff;
    margin: 0;
    padding: 40px;
    font-size: 57px;
  }
`;
export const AppElement = styled.div`
  margin: 120px;
  border: #2965ed 1px solid;
  font-family: "Poppins", sans-serif;
  box-shadow: -1px 1px 2px 3px rgba(166, 177, 191, 0.1);
`;
export const ErrorMessage = styled.h2`
  position: relative;
  top: 50px;
  right: 30px;
  font-size: 25px;
  line-height: 1.8;
  letter-spacing: 2px;
  color: red;
  text-align: center;
  height: 100%;
`;
export const HomePage = styled.section`
  font-size: 25px;
  line-height: 1.8;
  letter-spacing: 2px;
  color: #124191;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TaskPageElement = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const ListItemElement = styled.div`
  padding-left: 90px;
  h1 {
    color: #124191;
    font-size: 35px;
  }
  ul {
    padding-left: 15px;
    margin-right: 100px;
  }
`;
export const TaskItemElement = styled.div`
  li {
    margin: 10px;
    color: #124191;
    font-size: 18px;
  }
`;
export const SidebarLink = styled(NavLink)`
  text-align: center;
  color: #124191;
  display: block;
  padding: 20px;
  margin-top: 10px;
  font-size: 18px;
  background-color: #ffff;
  border: #2965ed 1px solid;
  border-radius: 5px;
  box-shadow: -1px 1px 2px 3px rgba(166, 177, 191, 0.1);

  &:hover,
  &:active {
    background-color: #2965ed;
    color: #ffff;
  }
`;
export const SidebarElement = styled.div`
  margin-top: 10px;
  a {
    text-decoration: none;
    font-weight: bold;
  }
`;
export const AppCoreElement = styled.div`
  padding: 5px 30px;
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 30vh;
`;