import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
    width: 100%;
    height: 20vh;
    background-color: #fcd121;
    padding-bottom: 20px;
    /* z-index: 5; */
`;

const InputTitle = styled.input`
    position: absolute;
    color: white;
    background-color: #fcd121;
    border: none;
    border-bottom: solid 1px white;
    outline-style: none;
    font-size: 20px;
    padding: 5px;
    bottom: 0;
    right: 0;
    @media (max-width:532px) {
        left: 20px;
        width: 45%;
    }
`;

const VocaField = styled.div`
    max-width: 700px;
    margin: 0 auto;
    margin-top: 50px;
`;

const CreateVocabulary: React.FC = () => {

    let navigate = useNavigate();
    
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
        navigate("/voca");
    };

    return (
        <>
            <Header>
                <div style={{maxWidth:'1200px', height:'100%', margin:'auto', position:'relative'}}>
                    <InputTitle type="text" name="title" id="title" placeholder="제목을 입력하세요" autoFocus />
                </div>
            </Header>
            <VocaField>
                <Form name="voca_form" onFinish={onFinish} autoComplete="off">
                    <Form.List name="words">
                        {(fields, {add, remove}) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} style={{display:'flex'}} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'word']}
                                            rules={[{ required: true, message: '단어를 입력하세요' }]}
                                        >
                                            <Input placeholder="단어" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'meaning']}
                                            rules={[{ required: true, message: '의미를 입력하세요' }]}
                                        >
                                            <Input placeholder="의미" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        필드 추가
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <Form.Item style={{display:'flex', justifyContent:'center'}}>
                        <Button type="primary" htmlType="submit"> 저장하기 </Button>
                    </Form.Item>
                </Form>
            </VocaField>
        </>
    )
}

export default CreateVocabulary;