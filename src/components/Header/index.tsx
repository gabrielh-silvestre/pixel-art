import { Container, ContentContainer, Navigation, NavLinks } from './style';

export default function Header() {
  return (
    <Container>
      <ContentContainer>
        <h1>Pixel Art</h1>

        <Navigation>
          <NavLinks
            href="https://github.com/gabrielh-silvestre"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            GitHub
          </NavLinks>

          <NavLinks
            href="https://www.linkedin.com/in/gabrielh-silvestre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </NavLinks>
        </Navigation>
      </ContentContainer>
    </Container>
  );
}
