import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}