const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/Yashvardhandhondge" className="social-icon" target="_blank">
            
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://x.com/yashvardhandho3" className="social-icon"  target="_blank">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.linkedin.com/in/yashvardhan-dhondge-0b9857296/" className="social-icon "  target="_blank">
            <img src="/assets/li.jpg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Yashvardhan Dhondge. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;