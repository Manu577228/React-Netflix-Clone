import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  const [items] = useState(upcome)
  const [item] = useState(latest)
  const [rec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcoming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
    </>
  )
}

export default HomePage
