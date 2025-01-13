'use client';

import { Anchor, Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  { link: '#', label: 'About Me' },
  { link: '#', label: 'Projects' },
  { link: '#', label: 'Connect' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="md"> Tony Baek </Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
