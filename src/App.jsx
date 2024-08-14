import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <Header />
      <Counter />
      <Footer />
    </section>
  );
}
