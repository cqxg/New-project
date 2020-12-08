import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import 'bootstrap/dist/css/bootstrap.min.css';

const CookiesPage = () => {
    return (
        <div className="cookiesPage">
            <BreadCrumbs scheme="cookies" />
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="cookiesPageTitle">
                                        
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>second</div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default CookiesPage