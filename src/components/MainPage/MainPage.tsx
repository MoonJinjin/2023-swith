import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    min-height: 2800px;
    background: linear-gradient(-173deg, #fff8db, #fff8db 40%, #fcd121 40%, #fcd121);
    @media (max-width:1070px) {
        min-height: 2000px;
        background: linear-gradient(-173deg, #fff8db, #fff8db 45%, #fcd121 45%, #fcd121);
    }
    @media (max-width:532px) {
        min-height: 1500px;
        background: linear-gradient(-173deg, #fff8db, #fff8db 45%, #fcd121 45%, #fcd121);
    }
`;

const Container1 = styled.div`
    overflow: hidden;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    height: 1800px;
    @media (max-width:1070px) {
        height: 1300px;
    }
    @media (max-width:532px) {
        height: 950px;
    }
`

const Container2 = styled.div`
    height: 1000px;
    background: linear-gradient(173deg, #fcd121, #fcd121 22%, #fff8db 22%, #fff8db);
    overflow: hidden;
    position: relative;
    @media (max-width:1070px) {
        height: 700px;
    }
    @media (max-width:532px) {
        height: 550px;
    }
`;

// s-with
const Subject = styled.h1`
    display: inline-block;
    font-size: 300px;
    font-family: 'Nunito', sans-serif;
    margin-top: 40vh;
    line-height: 230px;
    z-index: 5;
    color: ${(props)=> props.theme.colors.subText};
    @media (max-width:1070px) {
        font-size: 160px;
        line-height: 150px;
    }
    @media (max-width:532px) {
        font-size: 100px;
        line-height: 100px;
    }
`;

// study with me
const MiniSubject = styled.h3`
    font-size: 45px;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${(props)=> props.theme.colors.subText};
`;

const ScrollDown = styled.a`
    position: absolute;
    margin: 0 auto;
    bottom: 5rem;
    align-items: center;
    text-align: center;
    transform: translateY(-800%);
    @media (max-width:1070px) {
        display: none;
    }
`

const MouseDown = styled.div`
    width: 3rem;
    height: 5rem;
    border: 2px solid ${(props)=> props.theme.colors.subText};
    border-radius: 2rem;
    margin-bottom: 0.5rem;
    display: flex;
`

const MouseDownSpan = styled.span`
    width: 1rem;
    height: 1rem;
    background-color: ${(props)=> props.theme.colors.subText};
    display: block;
    border-radius: 50%;
    margin: auto;
    animation: move-wheel 1s linear infinite;
`

const ArrowSpan = styled.span`
    width: 1rem;
    height: 1rem;
    border: 2px solid transparent;
    border-right: 2px solid ${(props)=> props.theme.colors.subText};
    border-bottom-color: ${(props)=> props.theme.colors.subText};
    display: block;
    transform: rotate(45deg);
    animation: arrow-down 2s alternate infinite;
`

const StudyTitle = styled.p`
    float: right;
    font-size: 150px;
    position: absolute;
    top: 1010px;
    right: 30px;
    transform: rotate(6.5deg);
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: #fcd121;
    @media (max-width:1070px) {
        top: 825px;
        font-size: 90px;
    }
    @media (max-width:532px) {
        top: 580px;
        font-size: 90px;
    }
`;

const StudyMent1 = styled.p`
    float: right;
    position: absolute;
    color: white;
    right: 80px;
    text-align: right;
    font-family: 'LotteMartDream', sans-serif;

    font-size: 60px;
    top: 1340px;
    line-height: 70px;
    font-weight: 700;
    @media (max-width:1070px) {
        top: 1040px;
        right: 30px;
        line-height: 40px;
        font-size: 40px;
    }
    @media (max-width:532px) {
        top: 750px;
        right: 30px;
        line-height: 40px;
        font-size: 40px;
    }
`;
const StudyMent2 = styled.p`
    float: right;
    position: absolute;
    color: white;
    right: 80px;
    text-align: right;
    font-family: 'LotteMartDream', sans-serif;
    font-size: 25px;
    bottom: 150px;
    line-height: 40px;
    @media (max-width:1070px) {
        right: 30px;
        bottom: 20px;
        font-size: 18px;
        line-height: 25px;
    }
    @media (max-width:532px) {
        right: 30px;
        bottom: 0;
        font-size: 18px;
        line-height: 25px;
    }
`;

const TimerTitle = styled.p`
    float: left;
    font-size: 150px;
    position: absolute;
    top: 90px;
    left: 30px;
    transform: rotate(-6.5deg);
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: #fff8db;
    @media (max-width:1070px) {
        font-size: 90px;
        top: 65px;
    }
    @media (max-width:532px) {
        font-size: 90px;
        top: 25px;
    }
`;

const TimerMent1 = styled.p`
    top: 450px;
    left: 60px;
    float: left;
    position: absolute;
    color: #0f0071;
    text-align: left;
    font-family: 'LotteMartDream';
    font-size: 60px;
    line-height: 70px;
    font-weight: 700;
    @media (max-width:1070px) {
        top: 300px;
        left: 30px;
        line-height: 40px;
        font-size: 40px;
    }
    @media (max-width:532px) {
        top: 200px;
        left: 30px;
        line-height: 40px;
        font-size: 40px;
    }
`;

const TimerMent2 = styled.p`
    top: 610px;
    left: 60px;
    float: left;
    position: absolute;
    color: #0f0071;
    text-align: left;
    font-family: 'LotteMartDream';
    font-size: 25px;
    line-height: 40px;
    @media (max-width:1070px) {
        top: 420px;
        left: 30px;
        font-size: 18px;
        line-height: 25px;
    }
    @media (max-width:532px) {
        top: 300px;
        left: 30px;
        font-size: 18px;
        line-height: 25px;
    }
`;

const CircleSVG = styled.svg`
    position: absolute;
    top: 0%;
    max-width: 50rem;
`;

const AnimationCircle: React.FC = () => {
    return (
        <CircleSVG viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="pulse">
            <circle id="Oval" cx="512" cy="512" r="512" className="circle"></circle>
            <circle id="Oval" cx="512" cy="512" r="512" className="circle"></circle>
            <circle id="Oval" cx="512" cy="512" r="512" className="circle"></circle>
        </CircleSVG>
    )
}

const MainPage: React.FC = () => {
    return (
        <>
            <Container>
                <Container1>
                    <div style={{textAlign:'center'}}>
                        <Subject>S-</Subject>
                        <Subject style={{color:"#fcd121"}}>with</Subject>
                        <MiniSubject>study with me</MiniSubject>
                    </div>
                    <AnimationCircle />
                    <AnimationCircle />
                    <ScrollDown href="#study">
                        <MouseDown>
                            <MouseDownSpan />
                        </MouseDown>
                        <div style={{display:'inline-block'}}>
                            <ArrowSpan />
                        </div>
                    </ScrollDown>

                    <StudyTitle id="study">study</StudyTitle>
                    <StudyMent1>보다 효율적인<br/>단어 암기 시스템</StudyMent1>
                    <StudyMent2>단어장을 제작하고<br/> 친구들에게 공유해보세요!<br/>일일이 가려야 했던 단어장은 그만!<br/> 이제는 클릭 한번으로 손쉽게 뜻을 가리세요</StudyMent2>
                </Container1>
                
                <Container2>
                    <TimerTitle id="timer">timer</TimerTitle>
                    <TimerMent1>타이머를 통한<br/>공부 시간 측정</TimerMent1>
                    <TimerMent2>내 공부시간을 파악하고 더욱 집중해 보세요!<br/>과목별 측정과 공부 시간 통계를 통해<br/> 나의 공부 습관을 파악할 수 있어요</TimerMent2>
                    <AnimationCircle />
                </Container2>
            </Container>
        </>
    )
}

export default MainPage;