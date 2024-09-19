import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <div>
      <li>
      <Link href="/">home</Link>
      </li>
      <li>
      <Link href="/cabins">Cabins</Link>
      </li>
      <li>
      <Link href="/about">about</Link>
      </li>
      <li>
      <Link href="/account">account</Link>
      </li>
    </div>
  )
}

export default Navigation
