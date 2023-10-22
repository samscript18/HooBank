import {
  Navbar,
  Header,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="w-full bg-primary">
        <Navbar />
        <Header />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
