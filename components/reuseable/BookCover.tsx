import BookSide from "./BookSide"

interface cover {
  image: string
  coverColor: string
}

const BookCover = ({image, coverColor}: cover) => {
  return (
    <div className=" relative max-sm:max-w-[150px] md:max-w-[170px] lg:max-w-[210px] xl:max-w-[277px]">
      <div className=" absolute w-[85%] left-[15%] top-[0%]">
        <img src={image} className=" object-fill"/>
      </div>
      
      <div className="">
        <BookSide coverColor={coverColor}/>
      </div>
      
    </div>
  )
}

export default BookCover
