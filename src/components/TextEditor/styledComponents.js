import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppInnerContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppHeading = styled.h1`
  color: #ffffff;
  margin-bottom: 50px;
  margin-top: 0;
`

export const AppImage = styled.img`
  width: 70%;
`

export const EditorContainer = styled.div`
  flex-grow: 1;
  height: 500px;
  min-width: 350px;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 30px;
`

export const StylesList = styled.ul`
  list-style: none;
  padding-left: 0;
  border-bottom: 1px solid #334155;
  padding: 10px 15px;
  display: flex;
  gap: 15px;
`

export const StyleItem = styled.li``

export const IconButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  border: none;
  cursor: pointer;
`

export const Editor = styled.textarea`
  flex-grow: 1;
  background-color: transparent;
  color: #f8fafc;
  border: none;
  padding: 20px;
  outline: none;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
`
