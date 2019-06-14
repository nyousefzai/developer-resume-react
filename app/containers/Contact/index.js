import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Input, Button, Alert } from 'antd';
import makeSelectContact from './selectors';

import Continer from './Continer';
import messages from './messages';
import ThankYou from './ThankYou';

class Contact extends Component {
  state = { formValueRecived: false, message: '', loading: false };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        (async () => {
          const rawResponse = await fetch('/api/navid', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          const content = await rawResponse.json();

          this.setState({
            loading: true,
          });

          setTimeout(() => {
            this.setState({
              formValueRecived: true,
              message: content,
            });
          }, 2000);
        })();
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    return (
      <Continer>
        <FormattedMessage {...messages.header} />
        {!this.state.formValueRecived ? (
          <Form onSubmit={this.handleSubmit} layout="horizontal">
            <Form.Item colon={false} label="NAME">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                ],
              })(<Input placeholder="Full Name" />)}
            </Form.Item>
            <Form.Item colon={false} label="EMAIL">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input placeholder="Email" />)}
            </Form.Item>
            <Form.Item colon={false} label="PHONE">
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    pattern: new RegExp(
                      /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/g,
                    ),
                    message: 'Please input your Phone!',
                  },
                ],
              })(<Input placeholder="Phone" />)}
            </Form.Item>
            <Form.Item colon={false}>
              {getFieldDecorator('message', {
                rules: [
                  {
                    required: false,
                    message: 'Please input your Message!',
                  },
                ],
              })(
                <TextArea
                  autosize={{ minRows: 3, maxRows: 6 }}
                  placeholder="Write Your Message"
                />,
              )}
            </Form.Item>
            <div className="form-bottom">
              <Button
                loading={this.state.loading}
                htmlType="submit"
                type="primary"
                onClick={() => this.state.loading}
              >
                SEND
              </Button>
            </div>
          </Form>
        ) : (
          <ThankYou>
            <div>
              <Alert
                message="Message Recived"
                description={this.state.message.message}
                type="success"
                showIcon
              />
            </div>
          </ThankYou>
        )}
      </Continer>
    );
  }
}
const WrappedContactForm = Form.create({ name: 'contact' })(Contact);

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(WrappedContactForm);
