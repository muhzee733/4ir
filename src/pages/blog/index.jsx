import React from 'react'
import Layout from '@/components/layout'
import "./blog.css"
import Image from 'next/image'
import breadcrumb from "@/images/breadcrumb-title.png"
import Para from "@/components/typography/Para"
import LatestNews from '@/components/LatestNews/LatestNews'


const index = () => {
  return (
    <Layout>
      <section>
        <div className='main-wrapper backcolor'>
          <div className="container">
            <div className='row'>
              <div className="blogtext lh-sm">
                <Image src={breadcrumb} />
                Latest Blog
              </div>
              <div className='ps-5 '>
                <Para paragraph="- Discover the most recent blogs about artificial intelligence here." />
               </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className='main-wrapper'>
          <LatestNews />
        </div>
      </section>
    </Layout>
  )
}

export default index