'use client'

import { Anchor, Text, Title, useComputedColorScheme } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={ computedColorScheme === 'light' ? { from: '#ea8d8d', to: '#a890fe' } : { from: '#d3d9d4', to: '#124e66' }}>
          Tony Baek
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Welcome to my website!
      </Text>
    </>
  );
}
