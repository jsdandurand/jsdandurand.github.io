
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-sm">&copy; {currentYear} JS Dandurand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
