import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
  return (
    <div className='w-screen bg-white h-full text-black flex flex-col py-10 p-4'>
        <div className="header flex items-center justify-center">
            <div className="left_gradient hidden md:flex mx-4 w-[200px] h-[10px] rounded-2xl"/>

            <h1 className='w-full md:w-auto text-left md:text-center'>Testimonials</h1>
            <div className="right_gradient hidden md:flex mx-4 w-[200px] h-[10px] rounded-2xl"/>
        </div>


        <div className="testimonial_cards flex flex-nowrap overflow-x-auto items-center justify-start md:w-[90%] w-full mx-auto h-full md:p-4 ">
            <TestimonialCard item={{name: 'Emily R', image: 'https://s3-alpha-sig.figma.com/img/38a2/4495/454e02789f38efe4cfb91abb19e84990?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jUWP8v11TTtkZukByIAnIcv6mib3QyCU6E9DAF5CMsELWxwaGXLMDRwMeOKIEC3gB4mqb5dnMJs9QCOUAnGp93rulqejMhmg2KZQ8n2x0kbYApUve8dRoLlSzDcEQkxK99IG48D6UGKy-BLp9DEvaqzZF0MlZ7GgPOTOXVgzOEiArLChY7VaACg1uMTWlGgJj07~iNHqbhoRnfjlprdH5mWkaWSzmJlhgiYoF5in4~3kq8xOFeh~jiT2BoU0IFm8CwLNXmQol4i~3fmv8Q7TdP-CjILjgHF78lTjXuX0baPsPeh2I~-iLXkZPEewwWydJEg0ktu8gY-nd-1tD~nH1w__', testimonial: 'The atmosphere is so warm and inviting! From the lighting to the decor, every detail makes dining herea wonderful experience.'}}/>


            <TestimonialCard item={{name: 'Daniel L',image: 'https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iiv2eQpy9M7Ro9noN8BPWprVs63QsOjznCF8NXKHcWPJSB1e7zX-kCfCZvkfaAVquKwJWnJ7cHHubY6yN7Qxko32Lem2uq25NITl1LtsmkIcWpFc9Ibhswq9w81HVkbuOWlIM2vJEY9w4E78wqGYwrLUk3c3TZ0fGwPXB45Oq4EU4EQaLHvJtALAyDsxw67EdAqn~L3BZdwt4OiJJeb3EX3j9ZmSeaMCt8GiaA5J0beuvu2ODUqMeWkZ28yvPcsV0osSVLPvdRkig1VlSAVC5BFDJ7BRpWAhuJGvDI45kuJvuafU1DIZ7JS~yBVmfc~KwpG-USxfdafY-RSKjeI1sg__', testimonial: 'Not only is the food incredible, but the ambianceis just as perfect! Cozy, elegant, and the idealspot for a date night or a special dinner.'}}/>

            <TestimonialCard item={{name: 'Sam Wilson', image: 'https://s3-alpha-sig.figma.com/img/151c/a36e/0a3d3fc0d34cf0d02f566ad377813e78?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wl51MRjXONYY07h0AN1D~vV-Uu9dnC37~~nX9DrbjU0DJwi6eYVlgcjj3RhpDXrJy~UvRfqrf00ThRcASaQExCYil69MunObiEW1HQBK4ve~OGSqOzKj0OeTClyHAa4z2IZvBPuulW-fcq95uCWkE1KgcKzdOr3qQlRSbU6-IsSfZh4NgJcZrVthY2rbzL-zaGCJi13osJGdCCoUmNRhtRqzaNYTuHXdQpy8cvH1lvM~aGi9~zFJvPLeAWI6QiIJz~Be7gqRXfECZqJvYeoB7igkptl~kE8eeD8rP517k88JGBmwYgM7XaTP3mzJjH28vViTr4U0Jxnoek19B9MUdw__', testimonial: 'I loved every bite of my meal!'}}/>

            
            <TestimonialCard item={{name: 'Sam W',  image: 'https://via.placeholder.com/150', testimonial: 'Beautiful interiors and a relaxing ambiance. Whether youre dining in or just having coffee, the space feels like a little escape.'}}/>


            <TestimonialCard item={{name: 'Sam Wilson', image: 'https://via.placeholder.com/150', testimonial: 'I loved every bite of my meal!'}}/>
        </div>
    </div>
  )
}

export default Testimonials



function TestimonialCard({item}) {
    return (
            <div className="card flex flex-col w-[400px] min-w-[400px] max-h-[400px] h-full rounded-xl shadow-lg p-4 m-4 bg-slate-100">
                <span className='text-5xl'><RiDoubleQuotesL/></span>

                <p className='text-xs my-3 w-[90%]'>{item.testimonial}</p>

                <div className="user_review flex items-center mt-4 justify-between w-full"> 
                    <div className="user_details flex py-4 items-center justify-start w-[80%]">
                        <img src={item.image} alt="user image" className='w-[50px] h-[50px] rounded-full object-cover mx-2'/>
                        <span className='font-semibold flex-col flex'>
                            <span>{item.name}</span>
                            <span className='text-[.8rem]'>Customer</span>
                        </span>

                    </div>

                    <div className="stars flex items-center justify-start mt-4"> 

                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-black mx-1.5 text-lg'/>
                <FaStar className='text-slate-300 mx-1.5 text-lg'/>
                    </div>
                </div>

            </div>
    )
}