import { QueryStringProvider } from "@contexts";
import { Footer, Header } from "@layout";
import { Router } from "@router";

const App = () => {
  return (
    <>
      <QueryStringProvider>
        <Header />
        <Router />
      </QueryStringProvider>
      <Footer />
    </>
  );
};

export default App;
