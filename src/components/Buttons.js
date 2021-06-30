import styled from "styled-components";

const primary = '#596E6D';
const secondary = '#3DBFB9';
const tertiary = '#C4C4C4';

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`

export const PrimaryButton = styled(Button)`
  background-color: ${primary};
  border: none;
  color: white;
`

export const SecondaryButton = styled(Button)`
  background-color: ${secondary};
  border: none;
  color: #333;
`

export const TertiaryButton = styled(Button)`
  background-color: ${tertiary};
  border: none;
  color: #333;
`
