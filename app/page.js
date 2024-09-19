import React from 'react'
import Link from "next/link"
import Navigation from './components/Navigation'

function page() {
  return (
    <div>
      <h1>Lest explore paradise</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  )
}

export default page
