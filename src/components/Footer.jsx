import logo from '../../src/assets/logo-vartech.svg';
import { social } from '../constants';

const Footer = () => {
  return (
    <div className='bg-black flex flex-col md:flex-row gap-y-12 justify-evenly items-center font-nunito text-white py-6'>
        <img className='w-20' src={logo} alt="Logo" />
        <p>Vac Tech® - Canada - All rights reserved.</p>
        <div>
          <div className='flex flex-row gap-x-4'>
            {social.map((item, index) => (
              <img className='w-8' key={index} src={item} alt="Social Icon"/>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Footer;
