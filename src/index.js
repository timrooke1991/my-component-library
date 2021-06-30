import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => (
  <React.Fragment>
    <PrimaryButton>Primary button</PrimaryButton>
    <SecondaryButton>Secondary Button</SecondaryButton>
    <TertiaryButton>Tertiary Button</TertiaryButton>
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#root'));
