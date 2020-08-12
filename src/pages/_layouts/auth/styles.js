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
        display: flex;
        flex-direction: column;
        margin-top:30px;
    }
    input {
        background: rgba(0,0,0,0.8);
        border : 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin : 0 0 10px;

        &::placeholder {
            color: rgba(255 , 255 , 255 , 0.7)
        }
    }


`
export { Wrapper , Content }