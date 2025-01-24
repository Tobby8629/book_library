import BookList from "@/components/Home/BookList";
import Header from "@/components/Home/Header";
import { sampleBooks } from "@/constants";

const Home = () => {
  const sample = sampleBooks[0]
  return (
    <>
      <Header book={sample}/>
      <section className=" wrapper_div max-sm:my-5 mt-24 pb-10">
        <h4 className="sub_textHeader">Popular Books</h4>
        <div className=" flex flex-wrap flex-grow max-sm:gap-3 gap-8 xl:gap-10 ">
          {sampleBooks.map((book)=>(
            <BookList key={book.id} book={book}/>
          ))}
        </div>
        
      </section>
    </>
  );
}

export default Home;