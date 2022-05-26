import React from 'react'

interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  return (
      <script>console.log('test');</script>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
