import { useState } from "react";
// import Logo from '../assets/images/logo.svg'
import "./App.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  BarChartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  BellOutlined,
  WechatOutlined,
  HomeOutlined,
  DownOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";

import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
  Space,
  Col,
  Row,
  Typography,
} from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const { Title, Text, Link } = Typography;

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="Custom-slider"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical">
          <img src="https://placehold.co/128x40" className="img-fluid" alt="" />
          <Button
            type="text"
            icon={collapsed ? <CloseCircleOutlined /> : <CloseCircleOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="btn-collapse"
          
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <BarChartOutlined />,
              label: "Analytic",
            },
            {
              key: "3",
              icon: <SearchOutlined />,
              label: "Explore",
            },
            {
              key: "4",
              icon: <ShoppingOutlined />,
              label: "Shop",
            },
            {
              key: "5",
              icon: <WechatOutlined />,
              label: "Inbox",
            },
          ]}
        />
      </Sider>
      <Layout className="content-column">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="btn-collapse"
          
          />
          <div className="header-content d-flex align-items-center flex-warp">
            <div className="left-column d-flex align-items-center">
              <div className="profile flex-shrink-0">
                <img
                  src="https://placehold.co/100x100"
                  className="img-fluid"
                  alt=""
                />
                <span className="number-text">3</span>
              </div>
              <div className="content flex-grow-1">
                <h1>Good Evening Team!</h1>
                <p>
                  Have an in-depth look at all the metrics within your dashboard{" "}
                </p>
              </div>
            </div>
            <div className="right-column">
              <div className="icon-column">
              <Button shape="circle" icon={<SearchOutlined />} />

              <div className="bell-icon">

                <BellOutlined>
                  
                </BellOutlined>
                <span className="info-dot"></span>
                </div>
              </div>
              <div className="dropdown-column">
                <img
                  src="https://placehold.co/35x35"
                  className="img-fluid"
                  alt=""
                />
                <select>
                  <option value="Jhontosan">Jhontosan</option>
                </select>
              </div>
            </div>
          </div>
        </Header>
        <Content className="custom-content">
          <Row gutter={24}>
            <Col xs={24} xl={16} >
              <div className="monthly-revenue">
                <Row gutter={12}>
                  <Col xs={24}  lg={8}>
                    <div className="card">
                      <div className="image-icon">
                        <img src="https://placehold.co/64x64" alt="" />
                      </div>
                      <div className="monthly-content">
                        <small className="small-title">Monthly Revenue </small>
                        <div className="heading-title">
                          <h2>$3.500</h2>
                          <span className="percentage">+2.4%</span>
                        </div>
                        <div className="monthly-revenue-text">
                          <small>Previous month </small>
                          <strong>$1.7k</strong>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="card">
                      <div className="image-icon">
                        <img src="https://placehold.co/64x64" alt="" />
                      </div>
                      <div className="monthly-content">
                        <small className="small-title">Monthly Revenue </small>
                        <div className="heading-title">
                          <h2>$3.500</h2>
                          <span className="percentage">+2.4%</span>
                        </div>
                        <div className="monthly-revenue-text">
                          <small>Previous month </small>
                          <strong>$1.7k</strong>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} lg={8}>
                    <div className="card">
                      <div className="image-icon">
                        <img src="https://placehold.co/64x64" alt="" />
                      </div>
                      <div className="monthly-content">
                        <small className="small-title">Monthly Revenue </small>
                        <div className="heading-title">
                          <h2>$3.500</h2>
                          <span className="percentage">+2.4%</span>
                        </div>
                        <div className="monthly-revenue-text">
                          <small>Previous month </small>
                          <strong>$1.7k</strong>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="total-sales mt-50">
                <Row>
                  <Col xl={12}>
                    <div className="card">
                      <div className="header">
                        <Title level={2}>Total Sales & Cost </Title>
                        <small>Last 60 days</small>
                      </div>

                      <div className="number-content d-flex align-items-center">
                        <Title level={3}>$956.82k</Title>
                        <div className="badge-success">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.294898 4.24263L4.24464 0.292893C4.63516 -0.097631 5.26833 -0.097631 5.65885 0.292893L9.60859 4.24263C10.2386 4.8726 9.79239 5.94974 8.90148 5.94974H1.002C0.1111 5.94974 -0.335067 4.8726 0.294898 4.24263Z"
                              fill="#3DC764"
                            />
                          </svg>
                          +5.4%
                        </div>
                      </div>
                      <div className="numbe-preview">
                        <Text type="success">+8.20k</Text>
                        <span className="color-gray">vs prev.60 days</span>
                      </div>
                    </div>
                  </Col>
                  <Col xl={12}>
                    <BarChart
                      width={350}
                      height={240}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#6E62E5" />
                      <Bar dataKey="uv" fill="#D3CFFC" />
                    </BarChart>
                  </Col>
                </Row>
              </div>
              <div className="transastion-history mt-50">
                <div className="header d-flex align-items-center flex-warp">
                  <div className="title-box">
                    <Title level={2}>Transaction history</Title>
                  </div>
                  <div className="dropdown-box">
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <div className="drop-group-btn">
                  <select>
                    <option value="Recepient">Recepient</option>
                  </select>
                  <select>
                    <option value="Amount">Amount</option>
                  </select>
                  <select>
                    <option value="Status">Status</option>
                  </select>
                </div>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Invoice</th>
                        <th>People</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="td-1">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-shrink-0">
                              <img
                                src="https://placehold.co/66x66"
                                className="img-fluid border-radius-100"
                                alt=""
                              />
                            </div>
                            <div className="content flex-grow-1 title-box">
                              <h3>Flyod Johntosan</h3>
                              <p>johntosan@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="status-btn">
                            <span className="bg-success"></span>
                            Success
                          </div>
                        </td>
                        <td>Nov 02, 2021</td>
                        <td>$100,00</td>
                        <td>
                          <div className="avatr-images">
                            <img
                              src="https://placehold.co/35x35"
                              className="img-fluid"
                              alt=""
                            />
                            <img
                              src="https://placehold.co/35x35"
                              className="img-fluid"
                              alt=""
                            />
                            <img
                              src="https://placehold.co/35x35"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="td-1">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-shrink-0">
                              <img
                                src="https://placehold.co/66x66"
                                className="img-fluid border-radius-100"
                                alt=""
                              />
                            </div>
                            <div className="content flex-grow-1 title-box">
                              <h3>Flyod Johntosan</h3>
                              <p>johntosan@gmail.com</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="status-btn">
                            <span className="bg-success"></span>
                            Success
                          </div>
                        </td>
                        <td>Nov 02, 2021</td>
                        <td>$100,00</td>
                        <td>
                          <div className="avatr-images">
                            <img
                              src="https://placehold.co/35x35"
                              className="img-fluid"
                              alt=""
                            />
                            <img
                              src="https://placehold.co/35x35"
                              className="img-fluid"
                              alt=""
                            />
                            <img
                              src="https://placehold.co/35x35"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
            <Col xs={24} xl={8}>
              <aside className="home-aside-bar">
                <div className="permium-access">
                  <span className="text-primary">Premium Access</span>
                  <h2>
                    Take Back Your Creative <br /> Control
                    <span>
                      <img
                        src="https://placehold.co/35x35"
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src="https://placehold.co/35x35"
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src="https://placehold.co/35x35"
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src="https://placehold.co/35x35"
                        className="img-fluid"
                        alt=""
                      />
                    </span>
                  </h2>
                  <select>
                    <option value="The Professional Platform">
                      The Professional Platform{" "}
                    </option>
                  </select>
                  <Button className="outline-button">
                    Upgrade Now
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_51_7)">
                        <path
                          d="M15.9527 17.8029C15.9056 17.8603 15.8484 17.9072 15.7842 17.9408C15.72 17.9745 15.6502 17.9942 15.5788 17.9989C15.5073 18.0036 15.4357 17.9932 15.3681 17.9683C15.3005 17.9433 15.2383 17.9043 15.1849 17.8536C14.9603 17.64 14.9397 17.2708 15.1382 17.0296L21.2498 9.58654H0.545801C0.244375 9.58654 0 9.32382 0 8.99996C0 8.67658 0.244375 8.41386 0.545801 8.41386H21.2503L15.1382 0.97082C14.9397 0.729597 14.9603 0.360359 15.1849 0.146841C15.41 -0.0666769 15.7537 -0.0442265 15.9527 0.196996L22.8558 8.60397C23.0431 8.82131 23.0503 9.15998 22.8634 9.38687L15.9527 17.8029Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_51_7">
                          <rect width="23" height="18" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </div>
                <hr />
                <div className="custom-calendar">
                  <Calendar />
                </div>
                <div className="meeting-column">
                  <div className="meeting-list d-flex align-items-center">
                    <div className="image flex-shrink-0">
                      <img
                        src="https://placehold.co/72x72"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="content flex-grow-1">
                      <h2>Meeting with Client</h2>
                      <div className="d-flex icon-flex flex-warp align-items-center">
                        <div className="text-icon d-flex align-items-center">
                          <svg
                            width="24"
                            height="13"
                            viewBox="0 0 24 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.198 3.21972V4.46118L22.962 1.73603V8.67003L18.198 5.94488V7.18634L23.83 10.396V0L18.198 3.21972ZM16.028 0.868012H1.30202C0.585404 0.868012 0 1.45342 0 2.17003V11.698C0 12.4146 0.585404 13 1.30202 13H16.028C16.7446 13 17.33 12.4146 17.33 11.698V2.17003C17.33 1.44332 16.7446 0.868012 16.028 0.868012ZM16.462 10.7089C16.462 11.4961 15.8463 12.1219 15.0893 12.1219H2.24068C1.4837 12.1219 0.868013 11.486 0.868013 10.7089V3.14907C0.868013 2.3618 1.4837 1.73603 2.24068 1.73603H15.0792C15.8059 1.73603 16.3812 2.31134 16.4418 3.03804H16.4519L16.462 10.7089Z"
                              fill="#B2B7BE"
                            />
                          </svg>
                          Google Meet
                        </div>
                        <div className="text-icon d-flex align-items-center">
                          <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.51145 0.00889756C8.2747 0.160155 7.1625 0.453774 6.22826 0.871957C2.91839 2.37564 0.694007 5.30292 0.0800777 8.92421C0.0177951 9.29791 0 9.62712 0 10.4902C0 11.6824 0.0444876 12.0739 0.275823 13.026C1.35242 17.3413 5.04489 20.5355 9.47586 20.9626C10.1521 21.0337 11.4422 20.9982 12.0828 20.9003C14.2004 20.5711 16.2024 19.5834 17.7506 18.0976C19.45 16.4693 20.5355 14.3784 20.9092 12.0561C21.007 11.4422 21.0337 10.1343 20.9715 9.47586C20.5444 5.08048 17.3769 1.37912 13.0972 0.293618C12.2341 0.0711802 11.7892 0.017795 10.6948 0C10.1254 0 9.60043 3.38088e-08 9.51145 0.00889756ZM12.0206 1.00542C12.6256 1.11219 13.4708 1.33463 13.9513 1.52148C16.843 2.66036 19.014 5.08938 19.7792 8.04336C20.0194 8.95091 20.0817 9.48476 20.0817 10.4902C20.0817 11.4956 20.0194 12.0294 19.7792 12.937C18.9072 16.2647 16.2647 18.9072 12.937 19.7792C12.0294 20.0194 11.4956 20.0817 10.4902 20.0817C9.48476 20.0817 8.95091 20.0194 8.04336 19.7792C5.61434 19.1475 3.52342 17.5637 2.21548 15.366C1.61045 14.3339 1.20117 13.1772 0.987625 11.8871C0.880855 11.2287 0.880855 9.75168 0.987625 9.09327C1.34353 6.95786 2.23328 5.19615 3.71916 3.71027C5.34741 2.08202 7.41163 1.11219 9.72499 0.907547C10.1966 0.86306 11.5223 0.925342 12.0206 1.00542Z"
                              fill="#989FA8"
                            />
                            <path
                              d="M10.1965 2.84718L10.0542 2.97175L10.0364 6.76209C10.0275 10.152 10.0364 10.5613 10.0987 10.6859C10.2321 10.9706 10.1431 10.9617 13.2484 10.9617C16.3536 10.9617 16.2646 10.9706 16.3981 10.6859C16.4871 10.5079 16.4871 10.4724 16.3981 10.3033C16.2646 10.0186 16.3269 10.0275 13.5064 10.0275H10.9706V6.58414C10.9706 2.89167 10.9706 2.94505 10.7482 2.7938C10.588 2.68703 10.3567 2.70482 10.1965 2.84718Z"
                              fill="#989FA8"
                            />
                          </svg>
                          12 pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meeting-list d-flex align-items-center">
                    <div className="image flex-shrink-0">
                      <img
                        src="https://placehold.co/72x72"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="content flex-grow-1">
                      <h2>Meeting with Client</h2>
                      <div className="d-flex icon-flex flex-warp align-items-center">
                        <div className="text-icon d-flex align-items-center">
                          <svg
                            width="24"
                            height="13"
                            viewBox="0 0 24 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.198 3.21972V4.46118L22.962 1.73603V8.67003L18.198 5.94488V7.18634L23.83 10.396V0L18.198 3.21972ZM16.028 0.868012H1.30202C0.585404 0.868012 0 1.45342 0 2.17003V11.698C0 12.4146 0.585404 13 1.30202 13H16.028C16.7446 13 17.33 12.4146 17.33 11.698V2.17003C17.33 1.44332 16.7446 0.868012 16.028 0.868012ZM16.462 10.7089C16.462 11.4961 15.8463 12.1219 15.0893 12.1219H2.24068C1.4837 12.1219 0.868013 11.486 0.868013 10.7089V3.14907C0.868013 2.3618 1.4837 1.73603 2.24068 1.73603H15.0792C15.8059 1.73603 16.3812 2.31134 16.4418 3.03804H16.4519L16.462 10.7089Z"
                              fill="#B2B7BE"
                            />
                          </svg>
                          Google Meet
                        </div>
                        <div className="text-icon d-flex align-items-center">
                          <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.51145 0.00889756C8.2747 0.160155 7.1625 0.453774 6.22826 0.871957C2.91839 2.37564 0.694007 5.30292 0.0800777 8.92421C0.0177951 9.29791 0 9.62712 0 10.4902C0 11.6824 0.0444876 12.0739 0.275823 13.026C1.35242 17.3413 5.04489 20.5355 9.47586 20.9626C10.1521 21.0337 11.4422 20.9982 12.0828 20.9003C14.2004 20.5711 16.2024 19.5834 17.7506 18.0976C19.45 16.4693 20.5355 14.3784 20.9092 12.0561C21.007 11.4422 21.0337 10.1343 20.9715 9.47586C20.5444 5.08048 17.3769 1.37912 13.0972 0.293618C12.2341 0.0711802 11.7892 0.017795 10.6948 0C10.1254 0 9.60043 3.38088e-08 9.51145 0.00889756ZM12.0206 1.00542C12.6256 1.11219 13.4708 1.33463 13.9513 1.52148C16.843 2.66036 19.014 5.08938 19.7792 8.04336C20.0194 8.95091 20.0817 9.48476 20.0817 10.4902C20.0817 11.4956 20.0194 12.0294 19.7792 12.937C18.9072 16.2647 16.2647 18.9072 12.937 19.7792C12.0294 20.0194 11.4956 20.0817 10.4902 20.0817C9.48476 20.0817 8.95091 20.0194 8.04336 19.7792C5.61434 19.1475 3.52342 17.5637 2.21548 15.366C1.61045 14.3339 1.20117 13.1772 0.987625 11.8871C0.880855 11.2287 0.880855 9.75168 0.987625 9.09327C1.34353 6.95786 2.23328 5.19615 3.71916 3.71027C5.34741 2.08202 7.41163 1.11219 9.72499 0.907547C10.1966 0.86306 11.5223 0.925342 12.0206 1.00542Z"
                              fill="#989FA8"
                            />
                            <path
                              d="M10.1965 2.84718L10.0542 2.97175L10.0364 6.76209C10.0275 10.152 10.0364 10.5613 10.0987 10.6859C10.2321 10.9706 10.1431 10.9617 13.2484 10.9617C16.3536 10.9617 16.2646 10.9706 16.3981 10.6859C16.4871 10.5079 16.4871 10.4724 16.3981 10.3033C16.2646 10.0186 16.3269 10.0275 13.5064 10.0275H10.9706V6.58414C10.9706 2.89167 10.9706 2.94505 10.7482 2.7938C10.588 2.68703 10.3567 2.70482 10.1965 2.84718Z"
                              fill="#989FA8"
                            />
                          </svg>
                          12 pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meeting-list d-flex align-items-center">
                    <div className="image flex-shrink-0">
                      <img
                        src="https://placehold.co/72x72"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="content flex-grow-1">
                      <h2>Meeting with Client</h2>
                      <div className="d-flex icon-flex flex-warp align-items-center">
                        <div className="text-icon d-flex align-items-center">
                          <svg
                            width="24"
                            height="13"
                            viewBox="0 0 24 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.198 3.21972V4.46118L22.962 1.73603V8.67003L18.198 5.94488V7.18634L23.83 10.396V0L18.198 3.21972ZM16.028 0.868012H1.30202C0.585404 0.868012 0 1.45342 0 2.17003V11.698C0 12.4146 0.585404 13 1.30202 13H16.028C16.7446 13 17.33 12.4146 17.33 11.698V2.17003C17.33 1.44332 16.7446 0.868012 16.028 0.868012ZM16.462 10.7089C16.462 11.4961 15.8463 12.1219 15.0893 12.1219H2.24068C1.4837 12.1219 0.868013 11.486 0.868013 10.7089V3.14907C0.868013 2.3618 1.4837 1.73603 2.24068 1.73603H15.0792C15.8059 1.73603 16.3812 2.31134 16.4418 3.03804H16.4519L16.462 10.7089Z"
                              fill="#B2B7BE"
                            />
                          </svg>
                          Google Meet
                        </div>
                        <div className="text-icon d-flex align-items-center">
                          <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.51145 0.00889756C8.2747 0.160155 7.1625 0.453774 6.22826 0.871957C2.91839 2.37564 0.694007 5.30292 0.0800777 8.92421C0.0177951 9.29791 0 9.62712 0 10.4902C0 11.6824 0.0444876 12.0739 0.275823 13.026C1.35242 17.3413 5.04489 20.5355 9.47586 20.9626C10.1521 21.0337 11.4422 20.9982 12.0828 20.9003C14.2004 20.5711 16.2024 19.5834 17.7506 18.0976C19.45 16.4693 20.5355 14.3784 20.9092 12.0561C21.007 11.4422 21.0337 10.1343 20.9715 9.47586C20.5444 5.08048 17.3769 1.37912 13.0972 0.293618C12.2341 0.0711802 11.7892 0.017795 10.6948 0C10.1254 0 9.60043 3.38088e-08 9.51145 0.00889756ZM12.0206 1.00542C12.6256 1.11219 13.4708 1.33463 13.9513 1.52148C16.843 2.66036 19.014 5.08938 19.7792 8.04336C20.0194 8.95091 20.0817 9.48476 20.0817 10.4902C20.0817 11.4956 20.0194 12.0294 19.7792 12.937C18.9072 16.2647 16.2647 18.9072 12.937 19.7792C12.0294 20.0194 11.4956 20.0817 10.4902 20.0817C9.48476 20.0817 8.95091 20.0194 8.04336 19.7792C5.61434 19.1475 3.52342 17.5637 2.21548 15.366C1.61045 14.3339 1.20117 13.1772 0.987625 11.8871C0.880855 11.2287 0.880855 9.75168 0.987625 9.09327C1.34353 6.95786 2.23328 5.19615 3.71916 3.71027C5.34741 2.08202 7.41163 1.11219 9.72499 0.907547C10.1966 0.86306 11.5223 0.925342 12.0206 1.00542Z"
                              fill="#989FA8"
                            />
                            <path
                              d="M10.1965 2.84718L10.0542 2.97175L10.0364 6.76209C10.0275 10.152 10.0364 10.5613 10.0987 10.6859C10.2321 10.9706 10.1431 10.9617 13.2484 10.9617C16.3536 10.9617 16.2646 10.9706 16.3981 10.6859C16.4871 10.5079 16.4871 10.4724 16.3981 10.3033C16.2646 10.0186 16.3269 10.0275 13.5064 10.0275H10.9706V6.58414C10.9706 2.89167 10.9706 2.94505 10.7482 2.7938C10.588 2.68703 10.3567 2.70482 10.1965 2.84718Z"
                              fill="#989FA8"
                            />
                          </svg>
                          12 pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
