import React from 'react'
import SettingsHeader from '../SettingsHeader'
import SettingsSideBar from '../SettingsSideBar'

const SettingsLayout = ({ children }) => {
  return (
    <>
      <SettingsHeader />
      <SettingsSideBar/>
      <section className="content">
        {children}
      </section>
    </>
  )
}

export default SettingsLayout