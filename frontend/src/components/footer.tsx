import { Link } from "wouter";
import { Eye } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--medical-gray))] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="h-8 w-8 text-black" />
              <span className="text-xl font-bold">EyeAI Diagnosis</span>
            </div>
            <p className="text-gray-400">
              Advancing medical AI through privacy-preserving federated learning approaches.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="hover:text-white transition-colors">
                  Diagnosis
                </Link>
              </li>
              <li>
                <Link href="/performance" className="hover:text-white transition-colors">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Decentralized Federated Learning Project. All rights reserved.</p>
          <p className="text-sm mt-2">Final Year Research Project - Computer Science Department</p>
        </div>
      </div>
    </footer>
  );
}
