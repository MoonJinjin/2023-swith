import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: #363636;
    align-items: center;
    clear: both;
    height: 100px;
    position: absolute;
    z-index: 3;
`;

const Logo = styled.img`
    margin-top: 35px;
    margin-left: 50px;
    @media (max-width:1070px) {
        width: 80px;
        height: 20px;
        margin-left: 30px;
    }
`;

const Desc = styled.p`
    color: white;
    float: right;
    margin-top: 35px;
    margin-right: 50px;
    @media (max-width:1070px) {
        margin-right: 30px;
    }
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