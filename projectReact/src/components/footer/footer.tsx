// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-blue-950 py-4 text-center">
//       <div className="container mx-auto">
//         <p className="text-white text-sm">
//           Rizal. All rights reserved. &copy; {new Date().getFullYear()}
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

function Footer() {
  return (
    <footer className="w-full h-16 flex items-center justify-center bg-blue-950">
      <p className="text-white text-sm">
        Rizal. All rights reserved. &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
