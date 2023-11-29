import { Button } from "../../../common/button/Button";
import YoutubeSvg from "../../../../../public/mock-imges/svg/Vector.svg";
export const Hero = () => {
  return (
    <div className='flex justify-center m-10'>
      <div className='text-center'>
        <h2 className='text-center font-bold text-4xl leading-tight tracking-wide w-[650px] h-[234px] ml-[100px] mb-[-100px]'>
          Your Private Online Marketplace Where{" "}
          <span className='text-blue-500 font-semibold text-4xl leading-tight tracking-wide'>
            Socielities
          </span>{" "}
          That Comprise Your Personal{" "}
          <span className='text-blue-500 font-semibold text-4xl leading-tight tracking-wide'>
            World
          </span>
        </h2>
        <p className='text-center text-[16px] font-normal leading-[24px] h-[54px] w-[828px] mt-10 mb-10'>
          Your private online marketplace where you can trade goods and services
          with family, friends, neighbors, classmates, co-workers, and members
          of the many other communities that comprise your personal world.
        </p>
        <Button type='primary'>Explore More</Button>
        <div className='flex gap-[10px] justify-center items-center underline m-5'>
          <img src={YoutubeSvg} alt='Youtube Svg' />
          <ul>
            <li>
              <a href='https://robocontest.uz/profile/kamroncik'>
                Let's have a look
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
