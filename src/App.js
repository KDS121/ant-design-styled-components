import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Input,Carousel, Card, Image } from 'antd';
import Title from 'antd/lib/typography/Title';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import styled from 'styled-components';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const Navbar = styled(Header)`
    padding: 12px 30px;
    background-color: #fff;
    color: #555;
    box-shadow: 0 0px 2px #eaeaea;
    width: 100%;
    z-index: 20;
`;
const UserIcon = styled(Avatar)`
  float: right;
  border: 1px solid orange;
  cursor: pointer;
`;
const MindTickleLogo = styled.img`
  width: auto;
    max-height: 29px;
`;
const NavTitle = styled(Title)`
  color: #555555;
`;
const Sidebar = styled(Sider)`
  background-color: #19212e;
`;
const MainMenu = styled(Menu)`
  background-color: #19212e;
  color: #ffffff; 
`;
const MenuItem = styled(Menu.Item)`
  background: transparent !important;
  color: orange;
  `;
const SubMenuContainer = styled(SubMenu)`
  background-color: transparent;
  color: ${({title}) => title ? 'orange': ''};

`;
const SubMenuItemGroup = styled(Menu.ItemGroup)`
  //d
`;
const SubMenuItems = styled(Menu.Item)`
//d  
`;
const ContentContainer = styled(Content)`
   padding: 0 50px;
`;
const ContentMain = styled.div`
  /* min-height: 80vh;
  padding: 24;
  background: #ffffff;
  text-align: center; */

  background-color: #fff;
    margin: 24px 0;
    padding: 12px 24px 24px;
    min-height: calc(100vh - 108px);
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
`;
const FooterContainer = styled(Footer)`
  text-align: center;
`;
const BreadCrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;
const BreadCrumbItem = styled(Breadcrumb.Item)`
//d
`;
const SearchBar =  styled(Search)`
width: 500px;
position: relative;
left: 30%;
bottom: 90%;

.ant-input::placeholder{
  color: green;
}
  /* &::placeholder{
    color: green; //doubt
  } */
`;
const BannersContainer = styled.div`
  padding: 20px;
`;
const Banner = styled(Carousel)`

`;
const BannerItem = styled.div`
  height: 300px;
  color:  #fff;
  line-height: 160px;
  text-align: center;
  background: orange;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
const CardContainer = styled.div`
    /* background-color: lightgray; */
    box-shadow: 12px 12px 40px 0 rgb(55 84 170 / 8%), 12px 12px 20px 0 rgb(0 0 0 /8%), -12px -12px 80px 0 #fff, inset 4px 4px 20px 0 #fff;
    margin: 20px;
    border-radius: 4px;
    height: 400px;
    display: flex;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
`;
const CardBody = styled(Card)`
  height: 360px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  transform: scale(1.05);               //doubt
  cursor: pointer;
  transition: box-shadow 1s ease-in-out,transform 1s;
`;
const CardImage = styled(Image)`
  margin: 0 auto;
  border-radius: 4px;
`;

function App() {

  return (
    <div className="App">
      <Layout>
        <Navbar>
          <UserIcon src='https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg' icon={<UserOutlined />} />
          <NavTitle level={3}>
            <MindTickleLogo src='https://cf-ap1.mindtickle.com/pathshala/1597962497574mtlogoblueorangetransparent687px.png?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vY2YtYXAxLm1pbmR0aWNrbGUuY29tL3BhdGhzaGFsYS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjMwNTA1MDAxfSwiSXBBZGRyZXNzIjp7IkFXUzpTb3VyY2VJcCI6IjAuMC4wLjAvMCJ9LCJEYXRlR3JlYXRlclRoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTQ0NDk3NzExNn19fV19&Signature=F1pzuTLzjZEce4w7~02A1sixz3HpSUU07vPK9S-lHFgbzUS5ncFhj1uyFMCq9QW2Nli1u9wlX-rfZ5swTBHrKUn77581k2-IptR5bAmo91JbHdplaquTqXBv4CmKBF~efNvw8bO6c1jk~elfLakkC7vQDxWbJ0ReeISEv5GuNv-cJG4mWt01GNxGLYnKT-yx2pXakni7XOPGz0X2BcuPtK~htWGnf5cuHPlSkBErFkNp4rBNsQsUy7KaLBvubNdEvW5g11So040SkQDkGxZW5wNjuNBhcgPq96eYf0HFZNFoJjH1bgs0r9zJ7fwrdyUbljUDEj~PLh~efYDg4SEJJA__&Key-Pair-Id=APKAJGWBOHCJNXASNZPA' />
          </NavTitle>
          <SearchBar placeholder="input search text" allowClear enterButton />
        </Navbar>
          <Layout>
            <Sidebar>
              <MainMenu 
                 defaultSelectedKeys={['Dashboard']}
                 mode='inline'
                 theme='dark'
              >
                <MenuItem key='Dashboard'>
                  Dashboard
                </MenuItem>
                <SubMenuContainer
                  title={
                    <span>
                      <span>About US</span>
                    </span>
                  }
                >
                  <SubMenuItemGroup key='AboutUS' title='Country 1'>
                    <SubMenuItems key='location1'>Location 1</SubMenuItems>
                    <SubMenuItems key='location2'>Location 2</SubMenuItems>
                  </SubMenuItemGroup>
                </SubMenuContainer>
              </MainMenu>
            </Sidebar>
            <Layout>
            <ContentContainer>
              <BreadCrumb>
                <BreadCrumbItem>Dashboard</BreadCrumbItem>
              </BreadCrumb>
              <ContentMain>
                <BannersContainer>
                  <Banner autoplay={true}>
                      <BannerItem>
                        <Img src='https://i.picsum.photos/id/692/1000/300.jpg?hmac=Np5CTHoHgxjjFISFdwLjHyxONEqVoED8-7L114wmxJk' />
                      </BannerItem>
                      <BannerItem>
                        <Img src='https://i.picsum.photos/id/74/1000/300.jpg?hmac=10HAbegcVYVim_n29w5auQcAzqbkgRUd21jQZxvtiZg' />
                      </BannerItem>
                      <BannerItem>
                        <Img src='https://i.picsum.photos/id/803/1000/300.jpg?hmac=MUQ98WmdhthYvYTGjjpltGrlsIj2PRyVtj__19ET_Fs' />
                      </BannerItem>
                      <BannerItem>
                      <Img src='https://i.picsum.photos/id/18/1000/300.jpg?hmac=2yMVVoYVIF92DVwMsGwD5X25U8fGPxRiGBqIZ-x2jIc' />
                      </BannerItem>
                    </Banner>
                </BannersContainer>
                <CardContainer>
                  <CardBody>
                    <CardImage
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <p>Card content 1</p>
                  </CardBody>
                  <CardBody>
                    <CardImage
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    <p>Card content 2</p>
                  </CardBody>
                  <CardBody>
                    <CardImage
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    <p>Card content 3</p>
                  </CardBody>
                </CardContainer>
              </ContentMain>
            </ContentContainer>
            <FooterContainer>Ant Design ©2018 Created by Ant UED</FooterContainer>
            </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
