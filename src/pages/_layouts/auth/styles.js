import styled from 'styled-components';
import login from '../../../assets/login.jpg';
 const  Wrapper = styled.div`
    height : 100%;
    background: url(${login});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color : #FFF;
    display : flex;
    justify-content : center;
    align-items : center;


`;
const Content =  styled.div`
    width: 100%;
    max-width : 315px;
    text-align : center;

    form {
        
    }


`
export { Wrapper , Content }