import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Foter() {
  return (
    <footer className='bg-primary text-gray-300 py-16'>
      <div className='px-10'>
        <div className='grid md:grid-cols-2 gap-10 px-20'>

          <div className='left'>
            <div className='space-y-4'>
              <h1 className='font-bold text-xl text-white'>
                How <span className=''>Souqbay</span> Transformed Online Shopping in Pakistan
              </h1>
              <p>
                <span className=''>Souqbay</span> first made waves in Pakistan’s e-commerce market after its introduction in 2012.
                We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and <span className=''>Souqbay</span>.com.np.
              </p>
              <p>
                Our vision was to provide a safe, efficient online marketplace platform for vendors and customers. We started off as an online fashion retail platform and expanded to a one-stop solution for all your buying needs.
              </p>
              <h2 className='font-bold text-lg text-white'>What Makes Us Different?</h2>
              <p className='font-bold '>Select from the Largest Online Marketplace in Pakistan</p>
              <p>With over 15 million products, <span className=''>Souqbay</span> offers the most comprehensive listing of products in the country.</p>
              <h2 className='font-bold text-lg text-white'>Hassle-Free Delivery</h2>
              <p>
                <span className=''>Souqbay</span> promises hassle-free delivery right from the moment you order to when your package arrives. Track your package at every step, and enjoy a 7-day return or exchange policy.
              </p>
              <h2 className='font-bold text-lg text-white'>Payment Options to Suit Every Style</h2>
              <p>Pay via credit/debit card, cash on delivery, or EMI. We make it easy for everyone!</p>
            </div>
          </div>

          <div className='w-full'>
            <div className='container mx-auto py-16'>
              <div className='flex justify-between'>

                {/* Categories Section on Right */}
                <div className='flex flex-col items-end'>
                  <h2 className='text-lg font-bold text-white mb-4'>Categories</h2>
                  <ul className='space-y-2'>
                    <li><a href='' className='text-white hover:underline'>Smartphones</a></li>
                    <li><a href='' className='text-white hover:underline'>Tablets</a></li>
                    <li><a href='' className='text-white hover:underline'>Laptops</a></li>
                    <li><a href='' className='text-white hover:underline'>Cameras</a></li>
                    <li><a href='' className='text-white hover:underline'>Audio</a></li>
                    <li><a href='' className='text-white hover:underline'>Gaming</a></li>
                    <li><a href='' className='text-white hover:underline'>Smart Home</a></li>
                    <li><a href='' className='text-white hover:underline'>TVs</a></li>
                    <li><a href='' className='text-white hover:underline'>Drones</a></li>
                  </ul>
                </div>

                {/* Payment Methods */}
                <div className='space-y-4'>
                  <h1 className='text-lg font-bold text-white'>Payment Methods</h1>
                  <ul className='space-y-2'>
                    <li><a href='' className='text-white hover:underline'>Souqbay Wallet</a></li>
                    <li><a href='' className='text-white hover:underline'>Visa</a></li>
                    <li><a href='' className='text-white hover:underline'>Cash on Delivery</a></li>
                    <li><a href='' className='text-white hover:underline'>EMI Options</a></li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className='flex justify-between items-center md:pt-20 sm:pt-5 mt-8'>
                <div>
                  <h1 className='text-lg font-bold text-white'>Contact With Us</h1>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:bg-orange-400">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:underline-offset-1 hover:bg-orange-400">
                    <FaInstagram />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:bg-orange-400">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl hover:bg-orange-400">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <hr/>
        <div className="footer_copyright flex justify-between items-center mt-10">
          <div className="footer_details">
            <div className="link_tooltip">© 2024 Souqbay. All Rights Reserved</div>
            <div className="flex flex-col space-y-2">
              <ul className="space-y-1 flex flex-wrap">
                <li className='me-2'>
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Careers</a>
                </li>
                <li className='me-2'>
                  <a href="" className="text-white hover:underline">Warranty Policy</a>
                </li>
                <li className='me-2'>
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Sell with us</a>
                </li>
                <li className='me-2'>
                  <a href="" className="text-white hover:underline">Terms of Use</a>
                </li>
                <li className='me-2'>
                  <a href="" className="text-white hover:underline">Terms of Sale</a>
                </li>
                <li className='me-2'>
                  <a href="" className="text-white hover:underline">Privacy Policy</a>
                </li>
                <li className='me-2'>
                  <div className="flex items-center space-x-2">
                    <a href="" className="text-white hover:underline">Consumer Rights</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4">
            <img alt="mastercard" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg" className="h-6" />
            <img alt="visa" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg" className="h-6" />
            <img alt="tabby" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby_v2.svg" className="h-6" />
            <img alt="tamara" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tamara-en.svg" className="h-6" />
            <img alt="amex" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" className="h-6" />
            <img alt="cod" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
