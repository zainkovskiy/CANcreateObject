import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from "@mui/material/Button";

import { Check } from 'components/Check';
import { ModalWindow } from 'components/ModalWindow';
import { ModalShure } from 'components/ModalShure';
import { Linear } from 'components/Linear';
import { CheckCard } from 'components/CheckCard';

import { step } from 'actions/object';

class CheckContainer extends PureComponent {
  state = {
    load: true,
    answer: null,
    modal: false,
    currentObject: ''
  }
  requestCheck = async () => {
    const { object, nextStep } = this.props;
    // this.setState({ load: !this.state.load });
    try {
      const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Creator/Controller.php', {
        action: 'check',
        object: object,
        float: object.reqFlat
      });
      if (res?.data) {
        this.setState({ answer: res.data })
      }
      // if (!res.data.result) {
      //   this.setState({ answer: res.data })
      // } else {
      //   nextStep('about')
      // }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ load: !this.state.load });
    }
  }
  componentDidMount() {
    this.requestCheck();
  }
  openWindow = () => {
    this.setState({ modal: !this.state.modal })
  }
  answerYes = () => {
    this.openWindow();
    this.setState({ load: !this.state.load });
  }
  answerNo = () => {
    this.openWindow();
    this.setState({ currentObject: '' });
  }
  selectObject = (object) => {
    const { nextStep } = this.props;
    this.openWindow();
    this.setState({ currentObject: object })
    setTimeout(() => {
      nextStep('about')
    }, 1500)
  }
  render() {
    const { nextStep } = this.props;
    return (
      <>
        <span className="subtitle">Поиск дубля</span>
        {/* <Check
          requestCheck={this.requestCheck}
          load={this.state.load}
        /> */}
        {
          this.state.load ?
            <Linear /> :
            <div>
              <div className='cards'>
                {
                  this.state.answer?.data?.length > 0 ?
                  this.state.answer.data.map((card, idx) =>
                    <CheckCard
                      card={card}
                      key={idx}
                      selectObject={this.selectObject}
                    />
                  ) :
                  <span className="text">Нет совпадений по дублям</span>
                }
              </div>
              <div className='cards__btn'>
                {
                  // (this.state.answer?.overlap && this.state.answer.overlap !== 'full') &&
                  <Button
                    variant="contained"
                    onClick={() => { nextStep('about') }}
                  >
                    Далее
                  </Button>
                }
              </div>
            </div>
        }
        <ModalWindow
          open={this.state.modal}
          onClose={this.openWindow}
          maxWidth={'xs'}
          children={
            <ModalShure
              no={this.answerNo}
              yes={this.answerYes}
            />
          }
        />
      </>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    object: state.object.get('entries').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    nextStep: (next) => dispatch(step(next))
  }
}

export const CheckRedux = connect(mapStateToProps, mapDispatchToProps)(CheckContainer);