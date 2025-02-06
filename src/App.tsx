import { Container, Footer, Header } from "@components";
import { Router } from "@router";

const App = () => {
  return (
    <Container>
      <Header />
      <Router />
      <Footer />
    </Container>
  );
};

export default App;
