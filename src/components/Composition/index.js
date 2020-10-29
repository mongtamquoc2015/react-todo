import React from 'react';

function ComponentOne({ children }) {
  return (
    <>
      <h3>I am Component One</h3>
      {children}
    </>
  )
}

function ComponentTwo({ children }) {
  return (
    <>
      <h3>I am Component Two</h3>
      {children}
    </>
  )
}

function ComponentNeedProp({ content }) {
  return <h1>{content}</h1>
}

function ComponentThree({ children }) {
  return (
    <>
      <h3>I am Component three</h3>
      {children}
    </>
  )
}

function Composition() {
  const content = "Hello,I am content";
  return (
    <ComponentOne>
      <ComponentTwo>
        <ComponentThree>
          <ComponentNeedProp content={content} />
        </ComponentThree>
      </ComponentTwo>
    </ComponentOne>
  )
}

export default Composition;