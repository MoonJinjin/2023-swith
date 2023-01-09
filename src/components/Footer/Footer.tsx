import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: #363636;
    align-items: center;
    clear: both;
    height: 100px;
`;

const Logo = styled.img`
    margin-top: 35px;
    margin-left: 50px;
`;

const Desc = styled.p`
    color: white;
    float: right;
    margin-top: 35px;
    margin-right: 50px;
`;

const Footer: React.FC = () => {

    return (
        <>
            <Container>
                <Logo src={process.env.PUBLIC_URL+"/img/footer_logo.png"} />
                <Desc>2023 이민지/문진진/한나래</Desc>
            </Container>
        </>
    )
}

export default Footer;