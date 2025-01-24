import BookCover from "../reuseable/BookCover"
import { maxText } from "@/constants"

interface bookList{
  book: bookObject
}

const BookList = ({book}: bookList) => {
  return (
    <div className="flex flex-col w-[146px] max-sm:w-[30.5%] min-h-56">
      <BookCover variant="small" image={book.cover} coverColor={book.color}/>
      <h2 className="py-1  max-sm:text-xs font-ibm-plex-sans font-semibold ">
         {maxText(`${book.title}- By ${book.author}`, 27)}
      </h2>
      <p className="max-sm:text-[10px] text-xs text-gray-300 italic max-sm:font-thin font-light">
        {maxText(book.genre, 18)}
      </p>
    </div>
  )
}

export default BookList
