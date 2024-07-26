"use client"
import Hero from '@/app/components/Hero'
import React, { useEffect, useState } from 'react'
import BrowseCategories from "./components/BrowseCategories";
import MemberSearch from '../app/components/MemberInfo/MemberSearch';
import { Members } from './components/MemberInfo/Members';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
  }, [])

  return (
    <div>
      <Hero userInput={setSearchQuery} />
      <BrowseCategories />
      <MemberSearch searchQuery={searchQuery} members={Members} />
    </div>
  )
}
