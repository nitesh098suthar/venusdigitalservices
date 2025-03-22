import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Venus Digital</span>
            </div>
            <p className="text-muted-foreground">
              Transform your brand with cutting-edge digital marketing solutions.
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong>Address:</strong><br />
                123 Digital Avenue<br />
                Tech City, TC 12345<br />
                United States
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong><br />
                +1 (987) 654-3210
              </p>
              <p className="text-muted-foreground">
                <strong>WhatsApp:</strong><br />
                +91 987 654 3210
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/social-media-marketing" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/content-creation" className="text-muted-foreground hover:text-primary transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services/website-design" className="text-muted-foreground hover:text-primary transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-advertising" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Venus Digital Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}