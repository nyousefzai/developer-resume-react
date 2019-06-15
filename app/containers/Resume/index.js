import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Timeline, Icon, Progress, Rate } from 'antd';
import Container from './Container';
import Card from './Card';

import messages from './messages';

export function Resume() {
  return (
    <Container>
      <div className="two-card-wrapper">
        <Card>
          <div className="icon-continer">
            <Icon type="bank" />
            <span className="icon-side-content">Education</span>
          </div>

          <Timeline>
            <Timeline.Item>
              University of California,Berkeley <br /> Psychology 2006
            </Timeline.Item>
            <Timeline.Item>
              University of California,Berkeley <br /> Software Engineering 2017
            </Timeline.Item>
            <Timeline.Item>
              AWS DevOps Lynda.com <br />
              March 2019
            </Timeline.Item>
          </Timeline>
        </Card>
        <br />
        <Card>
          <div className="icon-continer">
            <Icon type="project" />
            <span className="icon-side-content">Professional Skills</span>
          </div>

          <Timeline>
            <Timeline.Item>
              PHP
              <br />
              <Progress percent={70} />
            </Timeline.Item>
            <Timeline.Item>
              CSS
              <br />
              <Progress percent={91} />
            </Timeline.Item>
            <Timeline.Item>
              JAVA SCRIPT
              <br />
              <Progress percent={85} />
            </Timeline.Item>
            <Timeline.Item>
              SQL/Mongodb
              <br />
              <Progress percent={70} />
            </Timeline.Item>
            <Timeline.Item>
              C++
              <br />
              <Progress percent={60} />
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
      <div className="two-card-wrapper">
        <Card>
          <div className="icon-continer">
            <Icon type="hdd" />
            <span className="icon-side-content">Employment</span>
          </div>

          <Timeline>
            <Timeline.Item>
              Bone Robertson & Mc Bride Inc <br /> Full Stack Developer <br />
              Jun - 2018 - Current
            </Timeline.Item>
            <Timeline.Item>
              Zoopify Inc <br /> Co-Founder/Full Stack Developer
              <br />
              Nov - 2016 May-2018
            </Timeline.Item>
            <Timeline.Item>
              Ibabel Inc <br />
              Co-Founder <br />
              Jan - 2010 Oct - 2016
            </Timeline.Item>
          </Timeline>
        </Card>
        <br />
        <Card>
          <div className="icon-continer">
            <Icon type="book" />
            <span className="icon-side-content">Certificates & Langauges</span>
          </div>

          <Timeline>
            <Timeline.Item>
              Farsi & Dari <br />
              <Rate className="stars" disabled defaultValue={5} />
            </Timeline.Item>
            <Timeline.Item>
              Pashto & Urdu <br />
              <Rate className="stars" disabled defaultValue={4} />
            </Timeline.Item>
            <Timeline.Item>
              Handi & Uzbaki <br />
              <Rate className="stars" disabled defaultValue={4} />{' '}
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>

      {/* <FormattedMessage {...messages.header} /> */}
    </Container>
  );
}

Resume.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Resume);
