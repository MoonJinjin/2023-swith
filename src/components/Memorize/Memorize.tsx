import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = styled.div`
    width: 100%;
    height: 20vh;
    background-color: #fcd121;
    padding-bottom: 20px;
    /* z-index: 5; */
`;

const Title = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    background-color: #fcd121;
    color: white;
    vertical-align: bottom;
    padding-top: 80px;
`;

const Left = styled.div`
    position: absolute;
    width: 50%;
    bottom: 0;
    margin: 30px;
`;

const Right = styled.div`
    position: absolute;
    width: 220px;
    bottom: 0;
    right: 0;
    margin: 0 90px 30px 0;
`;

const VocaField = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 50px;
`;

const Memorize: React.FC = () => {

    let navigate = useNavigate();
    const location = useLocation();

    const [voca, setVoca] = useState(location.state.voca);

    return (
        <>
            <Header>
                <Title>
                    <Left>
                        <h1 style={{float:'left', marginLeft:'50px', fontSize:'30px'}}>{location.state.voca?.title}</h1>
                        <p style={{float:'left', marginLeft:'10px', paddingTop:'18px'}}>{location.state.voca?.words.length}카드 | {location.state.voca?.editor}</p>
                        <a href="#" style={{color:'white'}}>
                            <img src={process.env.PUBLIC_URL+"/img/share.png"} style={{float:'left', marginLeft:'10px', paddingTop:'18px'}} />
                            <p style={{float:'left', marginLeft:'10px', paddingTop:'18px'}}>공유하기</p>
                        </a>
                    </Left>
                    <Right>
                        <Button style={{margin: '0 5px'}} onClick={()=> navigate("/swith/card", { state: { voca: voca }} )}>카드 게임</Button>
                        <Button style={{margin: '0 5px'}} onClick={()=> navigate("/swith/test", { state: { voca: voca }} )}>테스트</Button>
                    </Right>
                </Title>
                
            </Header>
            <VocaField>
                
            </VocaField>
        </>
    )
}

export default Memorize;