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
    load: false,
    answer: null,
    modal: false,
    currentObject: ''
  }
  requestCheck = async (float) => {
    const { object } = this.props;
    this.setState({ load: !this.state.load });
    // try {
    // const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Creator/Controller.php', {
    //   action: 'check',
    //   object: object,
    //   float: float
    // });
    //   if (!res.data.result) {

    //   } else {

    //   }
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   this.setState({ load: !this.state.load });
    // }
    this.setState({
      answer: {
        "action": "check",
        "result": true,
        "overlap": "full",
        "data": [
          {
            "reqNumber": 6516516516,
            "photo": "https://zhenomaniya.ru/wp-content/uploads/2018/09/1-2.jpg",
            "address": "Новосибирск, ул Ватутина 22",
            "docType": "free",
            "areas": "50/15/48",
            "overlap": "full"
          },
          {
            "reqNumber": 651651651,
            "photo": "https://stihi.ru/pics/2015/01/08/4035.jpg",
            "address": "Новосибирск, ул Ватутина 34",
            "docType": "exclusive",
            "areas": "50/15/48",
            "overlap": "half"
          },
          {
            "reqNumber": 651651651651,
            "photo": "http://www.mice-award.ru/media/images/products/153/85379-icon.jpg",
            "address": "Новосибирск, ул Ватутина 122",
            "docType": "adv",
            "areas": "50/15/48",
            "overlap": "half"
          }
        ]
      }
    }, () => {
      this.setState({ load: !this.state.load })
    })
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
    this.openWindow();
    this.setState({ currentObject: object })
  }
  render() {
    const { nextStep } = this.props;
    return (
      <>
        <span className="subtitle">Поиск дубля</span>
        <Check
          requestCheck={this.requestCheck}
          load={this.state.load}
        />
        {
          this.state.load ?
            <Linear /> :
            <div>
              <div className='cards'>
                {
                  this.state.answer?.data?.length > 0 &&
                  this.state.answer.data.map(card =>
                    <CheckCard
                      card={card}
                      key={card.reqNumber}
                      selectObject={this.selectObject}
                    />
                  )
                }
              </div>
              <div className='cards__btn'>
                {
                  (this.state.answer?.overlap && this.state.answer.overlap !== 'full') &&
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