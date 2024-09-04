import { img1, img2, img3 } from "../assets"

const AboutUs = () => {
  return (
    <div>
        <div id="aboutus" className='flex flex-col justify-center items-center bg-black pt-10 py-10'>
            <h1 className='font-toxic text-white text-2xl md:text-4xl py-10'>ABOUT US</h1>
            <div className="w-80 flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 gap-x-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <p className='w-2/3 text-white font-nunito text-lg mt-10'>At VAC TECH, we are dedicated to transforming the agricultural sector with high-efficiency vacuum pumps designed to optimize liquid handling and improve processes on farms. Our focus is clear: to develop innovative solutions that help farmers maximize productivity, reduce energy costs, and minimize environmental impact. <br></br>
            Every vacuum pump we offer is the result of a deep commitment to advanced engineering and sustainability. We specialize in understanding farmers' challenges and providing robust, reliable equipment tailored to their needs. By working closely with our clients, we ensure that our solutions not only meet but exceed expectations, enhancing the efficiency and profitability of their operations. <br></br> We believe that the future of farming depends on smart and efficient technology. That's why we strive every day to offer vacuum equipment that not only improves our customers' performance, but also contributes to a more sustainable and responsible agricultural environment. </p>
        </div>
    </div>
  )
}

export default AboutUs