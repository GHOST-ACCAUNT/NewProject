import Sevices1img from "../../../../../public/mock-imges/img/Service1.png";
import Sevices2img from "../../../../../public/mock-imges/img/Service2.png";
import Sevices3img from "../../../../../public/mock-imges/img/Service3.png";
import { Button } from "../../../common/button/Button";
export const Services = () => {
  return (
    <div>
      <div>
        <div className='flex gap-[120px] justify-center items-center'>
          <div>
            <img src={Sevices1img} alt='img' />
          </div>
          <div>
            <h2 className='w-[558px] h-[99px] flex-shrink-0 text-[26px] not-italic font-bold leading-[48px] text-yomon-1'>
              You want to strengthen more of communities or groups you are
              associated with.
            </h2>
            <p className='w-[527px] h-[103px] flex-shrink-0 text-[16px] not-italic font-normal leading-[24px] text-yomon-default mt-10 mb-10'>
              A simple definition is that leadership is the art of motivating a
              group of people to act towards achieving a common goal. In a
              business setting, this can mean directing workers and colleagues
              with a strategy to meet the company's needs.
            </p>
            <Button type='secondary'>Explore More</Button>
          </div>
        </div>
        <div className='flex gap-[120px] justify-center items-center'>
          <div>
            <h2 className='w-[558px] h-[99px] flex-shrink-0 text-[26px] not-italic font-bold leading-[48px] text-yomon-1'>
              You want to strengthen more of communities or groups you are
              associated with.
            </h2>
            <p className='w-[527px] h-[103px] flex-shrink-0 text-[16px] not-italic font-normal leading-[24px] text-yomon-default mt-10 mb-10'>
              A simple definition is that leadership is the art of motivating a
              group of people to act towards achieving a common goal. In a
              business setting, this can mean directing workers and colleagues
              with a strategy to meet the company's needs.
            </p>
            <Button type='secondary'>Explore More</Button>
          </div>
          <div>
            <img src={Sevices2img} alt='img3' />
          </div>
        </div>
        <div className='flex gap-[120px] justify-center items-center'>
          <div>
            <img src={Sevices3img} alt='img' />
          </div>
          <div>
            <h2 className='w-[558px] h-[99px] flex-shrink-0 text-[26px] not-italic font-bold leading-[48px] text-yomon-1'>
              You want to strengthen more of communities or groups you are
              associated with.
            </h2>
            <p className='w-[527px] h-[103px] flex-shrink-0 text-[16px] not-italic font-normal leading-[24px] text-yomon-default mt-10 mb-10'>
              A simple definition is that leadership is the art of motivating a
              group of people to act towards achieving a common goal. In a
              business setting, this can mean directing workers and colleagues
              with a strategy to meet the company's needs.
            </p>
            <Button type='secondary'>Explore More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
