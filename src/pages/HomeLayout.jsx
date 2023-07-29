import React from 'react'
import Navbar from '../component/Navbar'
import {Outlet, useNavigation} from "react-router-dom"
const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoadingPage= navigation.state === "loading"
  return (
    <>
       <Navbar/>
<section>
  {
    isLoadingPage?<h2>loading...</h2>:<Outlet/>
  }
</section>
    </>
  )
}

export default HomeLayout