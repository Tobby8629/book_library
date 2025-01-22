import Header from "@/components/Home/Header";
import { sampleBooks } from "@/constants";

const Home = () => {
  const sample = sampleBooks[0]
  return (
    <>
      <Header book={sample}/>
    </>
  );
}

export default Home;