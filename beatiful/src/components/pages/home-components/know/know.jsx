import circle from "/mock-imges/icons/circle-fr-bg.svg";
import play from "/mock-imges/icons/play-fr-bg.svg";

export const Know = () => {
  return (
    <>
      <div>
        <div className='text-center'>
          <h1 className='text-black-default text-[26px] font-bold leading-[48px]'>
            They love us! Do you know why?
          </h1>
          <p className='text-black-1 text-[16px] leading-[24px] mt-[20px] mb-[60px]'>
            The following videos are currently in production. In the meantime,
            please use our Help Center.
          </p>
        </div>
        <div className='dfrow gap-[33px]'>
          <div className="bg-cover w-[559px] h-[350px] bg-[url('/src/assets/img/bg-1.png')] rounded-[30px] relative dfcol items-start justify-end px-[28px] py-[23px]">
            <img
              src={circle}
              alt='cirlce img'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <img
              src={play}
              alt='play img'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2'
            />
            <h1 className='text-white text-[26px] font-bold leading-[36px]'>
              What is <br />
              Sociality?
            </h1>
            <h1 className='text-white text-[26px] font-bold leading-[36px]'>
              Sociality
            </h1>
          </div>
          <div className="bg-cover w-[559px] h-[350px] bg-[url('/src/assets/img/bg-2.png')] relative rounded-[30px] dfcol items-start justify-end px-[28px] py-[23px]">
            <img
              src={circle}
              alt='cirlce img'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <img
              src={play}
              alt='play img'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2'
            />
            <h1 className='text-white text-[26px] font-bold leading-[36px]'>
              Customer <br />
              Testimonials
            </h1>
            <h1 className='text-white text-[26px] font-bold leading-[36px]'>
              Sociality
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
