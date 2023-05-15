import React from 'react'

import { CSSTransition } from 'react-transition-group'

import type { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
}

const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    ...rest
  } = props

  return (
    <CSSTransition
      classNames={classNames || animation}
      {...rest}
    >
      {children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition