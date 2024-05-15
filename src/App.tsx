import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Highligths from "./components/highligths";
import HowItWorks from "./components/how-it-works";
import Model from "./components/model";
import Navbar from "./components/navbar";

function App() {
	return (
		<>
			<main className="bg-black">
				<Navbar />
				<Hero />
				<Highligths />
				<Model />
				<Features />
				<HowItWorks />
				<Footer />
			</main>
		</>
	);
}

export default App;
