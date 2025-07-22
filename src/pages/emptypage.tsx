import React from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'

const emptypage = () => {
  return (
    <AppLayout>
    <div>
      <div className='flex text-center text-7xl  pl-8 text-primary-activelink  '>Page Not Found</div>
    </div>
    </AppLayout>
  )
}

export default emptypage;
export const Head = () => (
  <>
<title>Page Not Found | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)