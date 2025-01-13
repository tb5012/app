'use client';

import { Anchor, Container, Group, Button, Text } from '@mantine/core';
import Link from 'next/link';

export function MainPage() {
  return (
    <>

      {/* Hero Section */}
      <Container size="lg" py="xl" style={{ backgroundColor: '#FBE9D0', minHeight: '80vh', textAlign: 'center' }}>
        <Text size="xl" style={{ color: '#874F41', marginBottom: '1rem' }}>
          Welcome to My Vintage Portfolio
        </Text>
        <Text size="md" style={{ color: '#244855', marginBottom: '2rem' }}>
          Crafting experiences with a touch of nostalgia and a dash of creativity.
        </Text>
        <Button
          size="lg"
          radius="md"
          variant="filled"
          style={{
            backgroundColor: '#E64833',
            color: '#FBE9D0',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Explore My Work
        </Button>
      </Container>

      {/* Footer */}

    </>
  );
}