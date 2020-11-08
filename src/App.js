import React from 'react';
import { withTranslation, Trans} from 'react-i18next'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLang: "en"
    }
  }
  onLanguageChange = (event) => {
    let newLang = event.target.value;
    this.setState({selectedLang: newLang})
    this.props.i18n.changeLanguage(newLang)
  }
 
  renderRadioButtonLayout = () => {
    return (
      <div><input
      checked={this.state.selectedLang === 'en'}
      name="language" onChange={(e) => this.onLanguageChange(e)} value="en" type="radio" />English &nbsp; 
      <input name="language" value="jap" 
      checked={this.state.selectedLang === 'jap'}
      type="radio" onChange={(e) => this.onLanguageChange(e)} />Japanese</div>
    )
  }

  render(){
    const {t, i18n} = this.props
    return (
      <>
       <div style={{textAlign : 'center'}}>
        <h3>{'Localization'}</h3>
        { this.renderRadioButtonLayout() }
          <p>
            {t('introduction')}
          </p>
          <Trans i18nKey="subtext" count={1} >
            <p>I have translated the above line in <strong>1</strong>language.</p>
           </Trans>
       </div>
        
      </>  
    );
  }
}

export default withTranslation()(App);
