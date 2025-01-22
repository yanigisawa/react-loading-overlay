/**
 * @jest-environment jsdom
 */

/* global jest, describe, it, expect, afterEach */
import LoadingOverlay from '../src/LoadingOverlay'
import React, { Component } from 'react'
import { render, cleanup, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.useFakeTimers()

afterEach(cleanup)


describe('Loader DOM state', () => {
  it('is not in DOM initially if active:false', () => {
    const { getByTestId } = render(<LoadingOverlay />)
    expect(getByTestId('wrapper').children.length).toBe(0)
  })

  it('is in DOM initially if active:true', () => {
    const { getByTestId } = render(<LoadingOverlay active />)
    expect(getByTestId('wrapper').children.length).toBe(1)
  })

  it('supports click events on overlay', async () => {
    let clicked = false;
    const user = userEvent.setup({delay: null});
    act(() => {

      render(
        <LoadingOverlay
          active
          onClick={() => { clicked = true }}
        />
      )
    })
    await user.click(screen.getByTestId('overlay'))
    expect(clicked).toBe(true)
  })

})
