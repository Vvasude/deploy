"use client"
import Hero from '@/app/components/Hero'
import React, { useEffect, useState } from 'react'
import BrowseCategories from "./components/BrowseCategories";
import MemberSearch from '../app/components/MemberInfo/MemberSearch';
import { Members } from './components/MemberInfo/Members';
import MemberCarousel from './components/MemberInfo/MemberCarousel';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
  }, [])

  return (
    <div>
      <Hero userInput={setSearchQuery} />
      <BrowseCategories />
      <MemberSearch searchQuery={searchQuery} members={Members} />
      <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 0', marginTop: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2 style={{ color: '#5a3d99', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
            Our Corporate Members
          </h2>
        </div>
        <div style={{ padding: '0 20px', marginTop: '20px' }}>
          <MemberCarousel />
        </div>
      </footer>

    </div>
  )
}
