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
`;

const Logo = styled.img`
    width: 110px;
    height: 44px;
    margin-left: 100px;
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
`;


const Header: React.FC = () => {

    const handleClick = (value:any) => {
        window.parent.postMessage({ urlhash: value }, '*');
    }

    return (
        <>
            <Container>
                <SubContainer>
                    <Logo src="logo_small.png" />
                    <Navbar>
                        <ul style={{marginRight:'10px'}}>
                            <Link to='/login' key={0} onClick={() => handleClick('/login')}>
                                <Navli>MY PAGE</Navli>
                            </Link>
                            <Link to='/timer' key={1} onClick={() => handleClick('/timer')}>
                                <Navli>TIMER</Navli>
                            </Link>
                            <Link to='/voca' key={2} onClick={() => handleClick('/voca')}>
                                <Navli>STUDY</Navli>
                            </Link>
                            <Link to='/' key={3} onClick={() => handleClick('/')}>
                                <Navli>HOME</Navli>
                            </Link>
                        </ul>
                    </Navbar>
                </SubContainer>
            </Container>
        </>
    )
}

export default Header;