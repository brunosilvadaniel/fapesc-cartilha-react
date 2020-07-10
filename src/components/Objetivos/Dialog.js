import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import text from '../../assets/resize-icons/ods1.png'

import './Styles.css'

const styles = [
  {color: '#E32738', margin: '0%', button: 'button-ods button-color-1'},
  {color: '#DDA939', margin: '5.88%', button: 'button-ods button-color-2'},
  {color: '#4AA139', margin: '11.76%', button: 'button-ods button-color-3'},
  {color: '#C21B2D', margin: '17.64%', button: 'button-ods button-color-4'},
  {color: '#FD3921', margin: '23.52%', button: 'button-ods button-color-5'},
  {color: '#21BFE2', margin: '29.41%', button: 'button-ods button-color-6'},
  {color: '#F5C000', margin: '35.29%', button: 'button-ods button-color-7'},
  {color: '#A21943', margin: '41.17%', button: 'button-ods button-color-8'},
  {color: '#FC6924', margin: '47.05%', button: 'button-ods button-color-9'},
  {color: '#DB1465', margin: '52.94%', button: 'button-ods button-color-10'},
  {color: '#FD9D24', margin: '58.82%', button: 'button-ods button-color-11'},
  {color: '#BE8C2D', margin: '64.70%', button: 'button-ods button-color-12'},
  {color: '#3D7F42', margin: '70.58%', button: 'button-ods button-color-13'},
  {color: '#009ADA', margin: '76.47%', button: 'button-ods button-color-14'},
  {color: '#55C12D', margin: '82.35%', button: 'button-ods button-color-15'},
  {color: '#026A9F', margin: '88.23%', button: 'button-ods button-color-16'},
  {color: '#1B496B', margin: '94.11%', button: 'button-ods button-color-17'},
]

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const generateLists = (topic) =>{
    return topic.map((list) =>{
      return(
      <>
        <li>{list}</li>
      </>
      )
    })
  }

  return (
    <div>
      <button  className={styles[props.number - 1].button}onClick={handleClickOpen}>
      
      {/* {styles[props.number].button} */}
        Saiba Mais
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="wrap-dialog-header">
          <div id="alert-dialog-title" className="dialog-title" >O Que Você pode fazer para ajudar</div>
          <img className="img-text" src={text}/>
        </div>
        <DialogContent > 
          <DialogContentText id="alert-dialog-description" >
            <div className="dialog-text">
            <h1>NAS CASAS E COMUNIDADES</h1>
            <ul>
              {generateLists(props.firstTopic)}
            </ul>
            <h1>NAS ESCOLAS E UNIVERSIDADES</h1>
            <ul>
              {generateLists(props.secondTopic)}
            </ul>
            <h1>TRABALHO</h1>
            <ul>
              {generateLists(props.thirdTopic)}
            </ul>
            <h1>NOS MUNICIPIOS</h1>
            <ul>
              {generateLists(props.fourthTopic)}
            </ul>
            </div>
          </DialogContentText>
        </DialogContent>
        <div className="dialog-footer-number" style={{backgroundColor: styles[props.number - 1].color, marginLeft:styles[props.number - 1].margin}}>
        <p>{props.number}</p>
        </div>
        <div className="test-fix">
         <DialogActions className="dialog-footer"/>
        </div>
      </Dialog>
    </div>
  );
}