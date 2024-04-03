"use client"
import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { InvoiceMain } from '@/app/components';

// Styled component for custom styling
const MainContainer = styled('main')({
  paddingTop: '20px',
  margin: '0 auto', // Center the container
});

export default function Home() {
  return (
    <MainContainer>
      <InvoiceMain />
    </MainContainer>
  );
}
