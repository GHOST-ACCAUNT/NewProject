import { Button } from "../../../common/button/Button";

export const Navbar = () => {
  return (
    <div className='container'>
      <nav className='flex justify-center gap-20 items-center m-5'>
        <h3 className='text-blue-600 text-4xl not-italic font-bold mr-20'>
          Socielity
        </h3>
        <ul className='flex gap-7'>
          <li className='text-base not-italic font-bold leading-6'>
            <a href='#0'>Socielity</a>
          </li>
          <li className='text-base not-italic font-bold leading-6'>
            <a href='#1'>Resources</a>
          </li>
          <li className='text-base not-italic font-bold leading-6'>
            <a href='#2'>Platfrom</a>
          </li>
          <li className='text-base not-italic font-bold leading-6'>
            <a href='#3'>Support</a>
          </li>
          <li className='text-base not-italic font-bold leading-6'>
            <a href='#4'>Login</a>
          </li>
        </ul>
        <Button type='primary'>Explore More</Button>
      </nav>
    </div>
  );
};
