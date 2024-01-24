import { FC, useState } from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

export const Header: FC = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React Typscript...</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
