import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import CommunityPostFeeds from '../components/CommunityPostFeeds'
import DiscussionForum from '../components/DiscussionForum'
import FeaturedCommunityMembers from '../components/FeaturedCommunityMembers'
import CommunityEvents from '../components/CommunityEvents'

const CommunityPage = () => {
  return (
    <div>
      <ScrollToTop/>
      <CommunityPostFeeds/> 
      <DiscussionForum/>
      <FeaturedCommunityMembers/>
      <CommunityEvents/>
    </div>
  )
}

export default CommunityPage
