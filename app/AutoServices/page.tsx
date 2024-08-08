'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Members } from '../components/MemberInfo/Members';
import MemberCard from '../components/MemberInfo/MemberCard';
import categories from '../data/category'; // Assuming this is an array

// Define the Member type
interface Member {
  id: string;
  Firstname: string;
  Lastname: string;
  logo: string;
  address: string;
  type: string;
  phone: string;
  email: string;
  website: string;
  iframe: string;
  aboutus: string;
  sectionItem1: string;
  sectionItem2: string;
  sectionItem3: string;
}

const RealEstate: React.FC = () => {
  const [shuffledMembers, setShuffledMembers] = useState<Member[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');

  const shuffleArray = (array: Member[]): Member[] => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    if (categories.length > 0) {
      // Assuming you want to use the first category's name
      const firstCategory = categories[1];
      setCategoryName(firstCategory.name);

      // Update the document title based on the category's name
      document.title = `CTCC | ${firstCategory.name}`;

      // Filter members whose type matches the category name
      const realEstateMembers = Members.filter(member => member.type === 'AutoServices');
      setShuffledMembers(shuffleArray(realEstateMembers));
    }
  }, [categories]);

  return (
    <Grid container spacing={3} justifyContent="center" marginTop={9}>
      {shuffledMembers.map((member, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <MemberCard
            firstName={member.Firstname}
            lastName={member.Lastname}
            logo={member.logo}
            address={member.address}
            type={member.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default RealEstate;
