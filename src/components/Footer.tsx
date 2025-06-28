export default function Footer() {
    return (
      <footer className="bg-gray-800 bg-opacity-80 text-white text-center py-4 mt-10">
        <div className="container mx-auto">
          <p className="text-xl">&copy; {new Date().getFullYear()} Prashant Baral. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  