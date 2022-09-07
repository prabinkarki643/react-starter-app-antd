import React, { useState, useEffect } from "react";
import NavigationMenu from "./navigationmenu";
import { Row, Col, Layout } from "antd";
import { observer } from "mobx-react";
const { Header } = Layout;

function LandingHeader() {
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "transparent",
  });
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeaderStyle({
        ...headerStyle,
        backgroundColor: "transparent",
      });
    } else if (window.scrollY > 70) {
      return setHeaderStyle({
        ...headerStyle,
        backgroundColor: "black",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: 0,
        ...headerStyle,
      }}
    >
      <Row flex="auto" style={{ ...headerStyle }} className="container">
        <Col flex="none" style={{ ...headerStyle }}>
          <div className="logo" style={{ ...headerStyle }}>
            <img
              src="/images/Fiscall.Finance.png"
              style={{ width: "100%" }}
              alt="logo"
            />
          </div>
        </Col>
        <Col
          flex="auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            ...headerStyle,
          }}
        >
          <NavigationMenu navStyle={{ ...headerStyle }} />
        </Col>
      </Row>
      <style jsx="true">{`
        .logo {
          float: left;
          width: 120px;
          height: 31px;
        }
      `}</style>
    </Header>
  );
}

export default observer(LandingHeader);
