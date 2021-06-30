import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <React.Fragment>
    <PrimaryButton>Primary button</PrimaryButton>
    <SecondaryButton>Secondary Button</SecondaryButton>
    <TertiaryButton disabled>Hey world</TertiaryButton>
    <GlobalStyle />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#root'));
