import Arrow from "./Arrow"
import Cards from "./Cards"
import { useState, useEffect } from "react"


export default function Carousel({data}) {
  let photo_from = 0
  let photo_to = photo_from+4
  let [counter,setCounter] = useState(0)
  let [counterTo,setCounterTo] = useState(4)
  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (counter <= 0) {
      setCounter(data.length-4)
      setCounterTo(data.length)
    } else {
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  useEffect(
    () => {
        setTimeout(() => {
            next_slide()
        }, 5000)
    }
)
 
  return (
    
    

    <div className="flex col justify-center items-center">

      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5"  onClick={prev_slide}  />
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">
          <div class="carousel-item active">
          <div className=" flex  flex-wrap justify-center mt-1">
           
              {data.slice(counter, counterTo).map((each, index) => (
                <Cards
                  key={index}
                  src={each.photo}
                  alt={each.id}
                  text={each.city}
                  _id={each._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
    </div>


  )
}
