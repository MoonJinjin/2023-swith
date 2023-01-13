import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export type VocaType = {
    id: React.Key;
    title: string;
    editor: string;
    words: {
        word: string;
        meaning: string;
    }[];
};
  
const Container = styled.div`
    height: 100vh;
    min-height: 840px;
`;

const VocaList = styled.div`
    position: relative;
    float: left;
    max-width: 250px;
    height: 100%;
    min-height: 840px;
    text-indent: 10px;
    border-right: 1.5px solid lightgray;
    left: 15%;
    @media (max-width:532px) {
        left: 0;
        max-width: 200px;
    }
`;

const ListUl = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 29px;
    padding-top: 100px;
    font-size: 25px;
    line-height: 29px;
    @media (max-width:532px) {
        font-size: 18px;
    }
`;

const ListLi = styled.li`
    float: left;
    list-style: none;
`;

const GroupTitle = styled.div`
    width: 300px;
    height: 35px;
    line-height: 35px;
    margin: 17px 0 17px 0;
    cursor: pointer;
    font-weight: bold;
    @media (max-width:532px) {
        margin: 12px 0 12px 0;
        line-height: 20px;
    }
`;

const Folder = styled.img`
    position: absolute;
    width: 32px;
    height: 32px;
    margin-left: 50px;
    @media (max-width:532px) {
        width: 16px;
        height: 16px;
        margin-left: 5px;
    }
`;

const GroupName = styled.a`
    margin-left: 90px;
    @media (max-width:532px) {
        margin-left: 28px;
    }
`;

const New = styled.p`
    z-index: 1;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    padding-top: 10px;
    border-top: 1.5px solid lightgray;
    cursor: pointer;
`;

const UnitList = styled.div`
    position: relative;
    width: 45%;
    display: inline-block;
    left: 20%;
    padding-top: 80px;
    @media (max-width:532px) {
        left: 2%;
        width: 50%;
    }
`;

const SearchDiv = styled.div`
    position: relative;
    width: 80%;
    margin: 0 auto;
    @media (max-width:532px) {
        width: 90%;
    }
`;

const SearchInput = styled.input`
    width: 100%;
    height: 45px;
    margin: 60px 0;
    font-size: 17px;
    text-indent: 15px;
    border-radius: 15px;
    outline: none;
    border: 1.5px solid lightgray;
    @media (max-width:532px) {
        font-size: 13px;
        margin: 30px 0;
    }
`;

const SearchButton = styled.button`
    position: absolute;
    right: 15px;
    top: 76px;
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;
    @media (max-width:532px) {
        top: 46px;
    }
`;

const Unit = styled.div`
    height: 35px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1.5px solid lightgray;
    @media (max-width:532px) {
        margin-bottom: 20px;
        padding-bottom: 10px;
    }
`;

const UnitTitle = styled.div`
    list-style: none;
    font-size: 25px;
    line-height: 25px;
    @media (max-width:532px) {
        font-size: 18px;
        line-height: 18px;
    }
`;

const UnitFlag = styled.div`
    float: left;
    width: 20px;
    height: 20px;
    margin-left: 15px;
    background-color: #fcd121;
    margin-right: 20px;
`;

const UnitLength = styled.p`
    float: right;
    margin-right: 15px;
    font-size: 18px;
    color: gray;
    @media (max-width:532px) {
        font-size: 14px;
        margin-right: 5px;
    }
`;

const Vocabulary: React.FC = () => {
    
    let navigate = useNavigate();

    const handleClick = (value:any) => {
        window.parent.postMessage({ urlhash: value }, '*');
    }

    const test:VocaType[] = [
        {
            id: 0,
            title: "1단원",
            editor: "문진진",
            words: [
                {
                    word: "apple",
                    meaning: "사과"
                },
                {
                    word: "orange",
                    meaning: "귤"
                },
                {
                    word: "pencil",
                    meaning: "연필"
                },
                {
                    word: "apple",
                    meaning: "사과"
                },
                {
                    word: "orange",
                    meaning: "귤"
                },
                {
                    word: "pencil",
                    meaning: "연필"
                },
                {
                    word: "apple",
                    meaning: "사과"
                },
                {
                    word: "orange",
                    meaning: "귤"
                },
                {
                    word: "pencil",
                    meaning: "연필"
                },
            ]
        },
    ]

    const VocaHistory = test.map(value => {
        return (
            <Unit>
                <UnitTitle>
                    <UnitFlag />
                    <span style={{cursor:'pointer'}} onClick={()=> navigate("/memorize", { state: { voca: value} }) }>{value.title}</span>
                    <UnitLength>{value.words.length}카드</UnitLength>
                </UnitTitle>
            </Unit>
        )
    })

    return (
        <>
            <Container>
                <VocaList>
                    <ListUl>
                        <ListLi>
                            <GroupTitle>
                                <Folder src={process.env.PUBLIC_URL+"/img/folder.png"} />
                                <GroupName href="MakingVocabulary.html">
                                    영어
                                </GroupName>
                            </GroupTitle>
                        </ListLi>
                    </ListUl>
                    <New>
                        <Link to='/makevoca' key={0} onClick={() => handleClick('/makevoca')}>+ 새로 만들기</Link>
                    </New>
                    <ListUl style={{position:'absolute', bottom:'200px'}}>
                        <ListLi style={{marginTop:'25px'}}>
                            {/* <GroupTitle>
                                <Folder src={process.env.PUBLIC_URL+"/img/folder.png"} />
                                <GroupName href="#">
                                    일본어
                                </GroupName>
                            </GroupTitle> */}
                        </ListLi>
                    </ListUl>
                </VocaList>

                <UnitList>
                    <SearchDiv>
                        <SearchButton><FaSearch /></SearchButton>
                        <SearchInput type="text" name="search" placeholder="과목, 단원 등을 검색하세요"/>
                    </SearchDiv>
                    <p id="voca_intro" style={{marginBottom:'40px'}}>최근 사용한 단어장</p>
                    
                    {VocaHistory}
                </UnitList>
            </Container>
        </>
    )
}

export default Vocabulary;