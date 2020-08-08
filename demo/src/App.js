import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme, Content, Icon, Layout, IconButton, Switch, loadTheme, Aside, toggleTheme, useModal } from 'notion-ui';

function App() {
  useTheme();
  const theme = loadTheme();
  useEffect(() => {
    console.log(window.parent.postMessage('abc'));
  }, [])
  const modal = useModal();
  const handleOpenShareModal = () => {
    modal.openModal({
      title: 'share',
      contents: <div>share</div>
    });
  }
  const handleOpenNotificationModal = () => {
    modal.openModal({
      title: 'notification',
      contents: <div>notification</div>
    });
  }
  return (
    <Layout.App
    leftMenus={<>Untiltled</>}
    rightMenus={
      <>
        <IconButton
          icon="moreHorizon"
          size="Big"
          className="MoreHorizon"
        />
        <IconButton
          icon="share"
          size="Big"
          className="Share"
          onClick={handleOpenShareModal}
        />
        <IconButton
          icon="notification"
          size="Big"
          className="Notification"
          onClick={handleOpenNotificationModal}
        />
      </>
    }
    aside={
      <>
        <Margin size={16}/>
        <Aside.Group title="public">
          <Aside.Menu title="vue"/>
          <Aside.Menu title="react"/>
          <Aside.Menu title="angular"/>
        </Aside.Group>
        <Aside.Group title="public">
          <Aside.Menu title="vue"/>
          <Aside.Menu title="react"/>
          <Aside.Menu title="angular"/>
        </Aside.Group>
        <div>
          toggle Theme
          <Switch
            switchOn={theme === 'Dark'}
            onEvent={toggleTheme}
            offEvent={toggleTheme}
          />
        </div>
      </>
    }
    >
      <div className="App">
        <h1>a ddd</h1>
        <AB>babbab</AB>
        <Icon icon="hambugMenu"/>
      </div>
    </Layout.App>
  );
}

export default App;

const AB = styled(Content.Text)`
  color: red;
`;

const Margin = (props) => {
  const { size } = props;
  return <div style={{
    display: 'inline-block',
    margin: `${size}px 0 0 0`,
    hegiht: '0',
    width: '100%',
  }}/>

}