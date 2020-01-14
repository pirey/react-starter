import React from 'react'

function Screen(props) {
  const { children } = props
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  )
}

function Title(props) {
  const { children } = props
  return (
    <h1
      style={{
        fontSize: '48px',
        fontFamily: 'sans-serif',
        textShadow: 'rgba(0, 0, 0, 0.2) 9px 9px 7px'
      }}
    >
      {children}
    </h1>
  )
}

function Text(props) {
  const { children } = props
  return <div style={{ fontFamily: 'sans-serif' }}>{children}</div>
}

export default function App() {
  return (
    <Screen>
      <Title>Ready Perfectly!</Title>
      <Text>{process.env.BASE_API_URL}</Text>
    </Screen>
  )
}