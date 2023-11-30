import arrows from "/mock-imges/icons/arrrows.svg";
import circle from "/src/assets/img/circle.png";
import peopleImg from "/src/assets/img/people.svg";
import dots from "/src/assets/img/dots.png";
import sms from "/src/assets/img/sms.png";

export const Testimonial = () => {
  return (
    <>
      <div className='dfrow mt-[120px] items-center gap-[110px]'>
        <div className='relative'>
          <img src={peopleImg} alt='people img' className=' w-[420px] z-10' />
          <img
            src={dots}
            alt='dots'
            className='absolute top-[84px] left-[-200px]'
          />
          <img
            src={circle}
            alt='circle'
            className='absolute mt-[-150px] ml-[50px]'
          />
          <img
            src={sms}
            alt='sms img'
            className='absolute mt-[-340px] ml-[340px]'
          />
        </div>
        <div className='dfcol items-start'>
          <h2 className='text-black-default text-[16px] leading-[24px] font-bold'>
            Skylar George
          </h2>
          <span className='text-black-default text-[14px] leading-[24px] font-normal mt-1 mb-[19px]'>
            Managing Director, Lovgency Company
          </span>
          <p className='text-black-default text-[16px] leading-[140%] font-bold mb-[34px]'>
            “You'll want to use a format that's viewable for your <br />
            potential leads and aligns closely with their values. To <br /> give
            you an idea of how testimonials can be portrayed, <br /> below are
            the different testimonial types that you can use <br /> to show off
            your customers' stories”
          </p>
          <div className='arrows'>
            <img src={arrows} alt='arrows' />
          </div>
        </div>
      </div>
    </>
  );
};
