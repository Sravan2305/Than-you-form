import './App.css';
import {Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'blue',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 8,
      padding: '4px !important',
    },
  },
})(TextField);
function App() {
  return (
    <div className='parent'>
    <Grid container spacing={3} className="st--container">
      <Grid item xs={12} md={6} className="st--container__left">
        <div className='st--left__quote'>
          <p className='quotesymbol'></p>
          <p className='st--left__text'>The meaning of life is to find your gift. The purpose of life is to give it away.</p>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className="st--container__right">
        <div className="right_items">
          <h2>
                Thank the saviour
          </h2>
          <p>and also let the world know them...</p>
          <Grid item xs={12}>
 
                <ValidationTextField
                  placeholder="John Doe"
                  label= "Donor's Name"
                  required={true}
                  className="st--input marginTop"
                />
          </Grid>
          <Grid item xs={12}>

                <ValidationTextField
                  placeholder="Contact Number/ Email ID"
                  label= "Donor's Contact"
                  required={true}
                  className="st--input"
                />

          </Grid>
          <Grid item xs={12} className='button-inputs'>

          <button
        onClick={()=>console.log("Submit")}
        className='st--thanks__button'
      >
        Thanks &#10084;
      </button>
      <button
        onClick={()=>console.log("Cancel")}
        className='st--cancel__button'

      >
        Cancel &#10006;

      </button>

          </Grid>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
