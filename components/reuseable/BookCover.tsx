import BookSide from "./BookSide"

interface cover {
  image: string
  coverColor: string
  variant: string
}

const BookCover = ({image, coverColor, variant}: cover) => {
  return (
    <div className={`${variant} relative`}>
      <div className=" absolute w-[83%] h-full left-[15%] top-[0%]">
        <img src={image} className=" object-fill h-[85%] w-full"/>
      </div>
      
      <div className=" h-full">
        <BookSide coverColor={coverColor}/>
      </div>
      
    </div>
  )
}

export default BookCover
