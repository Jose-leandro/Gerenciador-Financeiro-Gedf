import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CardComponent } from './CardComponent'

describe('CardComponent', () => {
  const cardFuncionalidades = {
    imgFunct: 'icons8-analysis-64.png',
    titleFunct: 'Spend management',
    textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
  }

  it('renders without crashing and displays the correct information', () => {
    const { getByText, getByAltText } = render(<CardComponent informationCardValue={cardFuncionalidades} />)

    // Check if the image is rendered
    const imgElement = getByAltText(cardFuncionalidades.titleFunct)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', `/img/${cardFuncionalidades.imgFunct}`)

    // Check if the title is rendered
    const titleElement = getByText(cardFuncionalidades.titleFunct)
    expect(titleElement).toBeInTheDocument()

    // Check if the text is rendered
    const textElement = getByText(cardFuncionalidades.textFunct)
    expect(textElement).toBeInTheDocument()
  })

  it('renders the correct class names based on informationCardValue', () => {
    const { container } = render(<CardComponent informationCardValue={cardFuncionalidades} />)

    // Check the container class name
    expect(container.firstChild).toHaveClass(stylesIndex.contener__gastos)

    // Check the title container class name
    const titleContainer = container.querySelector(`.${stylesIndex.gastos__titulos}`)
    expect(titleContainer).toBeInTheDocument()
  })

  it('does not render when informationCardValue is null', () => {
    const { container } = render(<CardComponent informationCardValue={null} />)
    expect(container.firstChild).toBeNull()
  })
})
