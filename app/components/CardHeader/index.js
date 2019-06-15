import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserAstronaut,
  faFileAlt,
  faLayerGroup,
  faImages,
  faUsers,
  faComments,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Container from './Container';
import Items from './Item';
import Section from './Section';
import messages from './messages';
import logo from './logo.png';

class CardHeader extends Component {
  menu = () => (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/resume">Resume</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/portfolio">Portfolio</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/game">Game</Link>
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Container>
        <Dropdown overlay={this.menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            <Icon type="menu" />
          </a>
        </Dropdown>
        <Link to="/">
          <img
            alt="Navid Ful Stack Developer"
            style={{ marginTop: 30, marginRight: '12em', height: 20 }}
            src={logo}
          />
        </Link>
        <Link style={{ width: '10%' }} to="/">
          <Items>
            <FontAwesomeIcon icon={faUserAstronaut} />
            <Section>
              <FormattedMessage {...messages.profile} />
            </Section>
          </Items>
        </Link>
        <Link style={{ width: '10%' }} to="/resume">
          <Items>
            <FontAwesomeIcon icon={faFileAlt} />
            <Section>
              <FormattedMessage {...messages.resume} />
            </Section>
          </Items>
        </Link>
        <Link style={{ width: '10%' }} to="/portfolio">
          <Items>
            <FontAwesomeIcon icon={faImages} />
            <Section>
              <FormattedMessage {...messages.portfolio} />
            </Section>
          </Items>
        </Link>
        <Link style={{ width: '10%' }} to="/contact">
          <Items>
            <FontAwesomeIcon icon={faComments} />
            <Section>
              <FormattedMessage {...messages.contact} />
            </Section>
          </Items>
        </Link>
        <Link style={{ width: '10%' }} to="/game">
          <Items>
            <FontAwesomeIcon icon={faPuzzlePiece} />
            <Section>
              <FormattedMessage {...messages.game} />
            </Section>
          </Items>
        </Link>
      </Container>
    );
  }
}

export default CardHeader;
