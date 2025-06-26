import Image from "next/image";
import { Container } from "../shared/Container";
import CountUp from "../shared/CountUp";



export default function SaleDividerSection() {
  return (
    <section className="my-12 lg:my-24 relative bg-primary px-4 flex gap-6 items-center  ">
        <Image src="/gift-boxes.png" alt="gift boxes" className="absolute left-0" width={400} height={100}/>
        <Container>
            <div className="py-16 relative text-center z-20">
                <h3 className="text-4xl tracking-widest font-semibold text-white">SAVE UP TO <span className="text-primary-accent"><CountUp from={10} to={50}/>% OFF</span> WITH OUR DEALS </h3>
                <p className="text-white tracking-wider italic text-xl">Only until the end of this week. Terms and conditions apply</p>
               
            </div>
        </Container>

      
        
    </section>
  );
}
