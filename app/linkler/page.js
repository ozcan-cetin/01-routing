import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div><h1>Linkler</h1>
    <div>
        <Link href="/about">Hakkımızda</Link>
    </div>
    <div>
        <Link href="/docs/2">doküman 2</Link>
    </div>
    <div>
        <Link href="/docs/3">doküman 3</Link>
    </div>
    <div>
        <Link classname="test"
        style={{color:"red"}} href={{
            pathname:"/about",
            query:{
                name:"ozcan",
                surname:"cetin",
            },
        }}>Hakkımızda obje yazılımı</Link>
    </div>
    </div>
  )
}

export default Page