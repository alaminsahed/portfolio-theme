import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black dark:text-white dark:bg-black py-5 mt-20">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mx-5">
          <div>
            <p>Copyright &copy; 2023 My Website</p>
          </div>
          <div>
            <p>Developed with ❤️ by Md.Al-Amin Sahed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
