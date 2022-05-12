import styled from 'styled-components'


 export const Header = styled.header ` 
 text-align: center;
  h1  {
  margin: 0;
  padding: 40px;
  font-size: 50px;
  border-bottom: violet 1px solid;
}
`
export const AppElement = styled.div`
  margin: 120px;
  border: violet 1px solid;
  border-radius: 40px;
  color: blueviolet;
  font-family: 'Poppins', sans-serif;
`
export const HomePage = styled.section`
  font-size: 30px;
  color: #000;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TaskPageElement = styled.div `
    text-align: center;
    padding-top: 30px;
    color: blueviolet;
   `
   export const SidebarElement = styled.div` 
   border-right: violet 1px solid;
 a {
   text-decoration:none;
   font-weight: bold;
 }
 .link-name{
   text-align: center;
   padding: 20px;
   border-bottom:  violet 1px solid;
 }
 `
 export const AppCoreElement = styled.div `
   display: grid;
   grid-template-columns: 20% 80%;
   min-height: 30vh;
 `