import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  AppInnerContainer,
  LeftContainer,
  AppHeading,
  AppImage,
  EditorContainer,
  StylesList,
  StyleItem,
  IconButton,
  Editor,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderlined: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderlined = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {isBold, isItalic, isUnderlined} = this.state

    return (
      <AppContainer>
        <AppInnerContainer>
          <LeftContainer>
            <AppHeading>Text Editor</AppHeading>
            <AppImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <EditorContainer>
            <StylesList>
              <StyleItem>
                <IconButton
                  type="button"
                  data-testid="bold"
                  onClick={this.onClickBold}
                  isActive={isBold}
                >
                  <VscBold size={25} />
                </IconButton>
              </StyleItem>
              <StyleItem>
                <IconButton
                  type="button"
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  isActive={isItalic}
                >
                  <GoItalic size={25} />
                </IconButton>
              </StyleItem>
              <StyleItem>
                <IconButton
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickUnderlined}
                  isActive={isUnderlined}
                >
                  <AiOutlineUnderline size={25} />
                </IconButton>
              </StyleItem>
            </StylesList>
            <Editor
              isBold={isBold}
              isItalic={isItalic}
              isUnderlined={isUnderlined}
            />
          </EditorContainer>
        </AppInnerContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
