import React from 'react'
import FormSignIn from '~/components/form/form-signin'
import RootLayout from '~/layouts/root-layout'

const Landing: React.FC = () => {
  return (
    <>
      <RootLayout>
        <FormSignIn />
      </RootLayout>
    </>
  )
}

export default Landing
