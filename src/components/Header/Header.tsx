import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 80px;
    z-index: 3;
    background: white;
    position: fixed;
    box-shadow: 2px 2px 50px -30px gray;
`;

const SubContainer = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-weight: bold;
    margin: auto;
    @media (max-width:1070px) {
        max-width: 1070px;
    }
`;

const Logo = styled.img`
    width: 110px;
    height: 44px;
    margin-left: 100px;
    @media (max-width:1070px) {
        width: 90px;
        height: 34px;
        margin-left: 30px;
    }
`;

const Navbar = styled.nav`
    max-width: 1200px;
`;

const Navli = styled.li`
    list-style: none;
    margin: auto;
    float: right;
    text-align: center;
    margin-right: 27px;
    margin-left: 27px;
    font-size: 20px;
    text-decoration: none;
    color: black;
    @media (max-width:1070px) {
        font-size: 14px;
    }
`;


const Header: React.FC = () => {

    const handleClick = (value:any) => {
        window.parent.postMessage({ urlhash: value }, '*');
    }

    return (
        <>
            <Container>
                <SubContainer>
                    <Link to='/' key={0} onClick={() => handleClick('/')}>
                        <Logo src={process.env.PUBLIC_URL+"/img/logo_small.png"} />
                    </Link>
                    <Navbar>
                        <ul style={{marginRight:'10px'}}>
                            <Link to='/login' key={1} onClick={() => handleClick('/login')}>
                                <Navli>MY PAGE</Navli>
                            </Link>
                            <Link to='/timer' key={2} onClick={() => handleClick('/timer')}>
                                <Navli>TIMER</Navli>
                            </Link>
                            <Link to='/voca' key={3} onClick={() => handleClick('/voca')}>
                                <Navli>STUDY</Navli>
                            </Link>
                        </ul>
                    </Navbar>
                </SubContainer>
            </Container>
        </>
    )
}

export default Header;