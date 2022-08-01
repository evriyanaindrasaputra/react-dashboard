import React from 'react'

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex w-full items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        {children}
      </div>
    </>
  )
}

export default RootLayout
