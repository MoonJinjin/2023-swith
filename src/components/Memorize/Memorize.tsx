import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Card, Col, Row } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { VocaType } from '../Vocabulary/Vocabulary';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

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
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Memorize: React.FC = () => {

    let navigate = useNavigate();
    const location = useLocation();

    const [voca, setVoca] = useState<VocaType>(location.state.voca);
    const [cardSetLength, setCardSetLength] = useState<number>(1);
    const [cardStatus, setCardStatus] = useState<number[]>([]);

    useEffect(() => {
        if(voca.words.length % 8 != 0 && voca.words.length / 8 < 1) {
            setCardSetLength(1);
        } else {
            setCardSetLength(Math.ceil(voca.words.length / 8));
        }
    }, [])

    const Panels = () => {
        var panel_list = [];
        var i: number;
        for(i = 0; i < cardSetLength; i++) {
            panel_list.push(
                <Panel header={i+1+"세트"} key={i}>
                    <Row gutter={16}>
                        {Cols(i)}
                    </Row>
                </Panel>
            );
        }
        return panel_list
    }

    const Cols = (i:number) => {
        var col_list: JSX.Element[] = [];
        voca.words.slice(i*8, 8+i*cardSetLength).map((value, index)=> { // 8개씩 자르기
            col_list.push(
                <Col span={8} style={{paddingBottom:'15px'}}>
                    <Card hoverable className={cardStatus.includes(i*8+index) ? 'card' : 'active_card'} style={{height:'120px', lineHeight:'120px'}} onClick={()=>setCardStatus(current => [...current, i*8+index])}>
                        <p style={{textAlign:'center', fontSize:'18px'}}>{value.word}</p>
                    </Card>
                    <Card hoverable className={cardStatus.includes(i*8+index) ? 'active_card' : 'card'} style={{height:'120px', lineHeight:'120px', border:'1px solid #fcd121'}} onClick={()=>setCardStatus(cardStatus.filter(item => item !== i*8+index))}>
                        <p style={{textAlign:'center', fontSize:'18px'}}>{value.meaning}</p>
                    </Card>
                </Col>
            );
        })
        return col_list
    }
    

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
                        <Button style={{margin: '0 5px'}} onClick={()=> navigate("/card", { state: { voca: voca }} )}>카드 게임</Button>
                        <Button style={{margin: '0 5px'}} onClick={()=> navigate("/test", { state: { voca: voca }} )}>테스트</Button>
                    </Right>
                </Title>
            </Header>
            <VocaField>
                <Collapse defaultActiveKey={['0']} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                    {Panels()}
                </Collapse>
            </VocaField>
        </>
    )
}

export default Memorize;