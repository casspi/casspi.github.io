import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import {Layout,List,Icon,Avatar} from 'antd';
import '../css/home.css'
import axios from 'axios';

const { Header, Footer, Sider, Content } = Layout;

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { listData:[] }
    }
    render() { 
        return ( <div>
            <Layout>
                <Header className="header">Header</Header>
                <Layout>
                    <Content>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={this.state.listData}
                            footer={
                            null
                            }
                            renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                <IconText type="message" text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                                }
                            >
                                <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                                />
                                {item.content}
                            </List.Item>
                            )}
                        />
                    </Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </div> );
    }
    componentDidMount(){
        console.log(axios)
        axios.get('http://v.juhe.cn/joke/content/list.php', {
            params: {
                sort: 'desc',
                page: 'page',
                pagesize: 20,
                time: (new Date()).getTime().toString().slice(0,10),
                key:'1f3406d471280a7916322d25dbb5a0cc'
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
 
export default App;