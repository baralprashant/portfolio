export default function Footer() {
    return (
      <footer className="bg-gray-800 bg-opacity-80 text-teal-400 text-center py-2 mt-10">
        <div className="container mx-auto">
          <p className="text-xl">&copy; {new Date().getFullYear()} Prashant Baral. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  