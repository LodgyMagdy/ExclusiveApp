import { ArrowBigRightDash, Copyright, Facebook, Instagram, Linkedin, QrCode, Twitter } from "lucide-react";
import { Input } from "../ui/input";


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex flex-col items-center">

        <div className="flex flex-wrap justify-center gap-x-20 text-start my-20">

          <div className="flex flex-col max-w-xs gap-y-3">
            <h1 className="text-2xl font-bold mb-2">Exclusive</h1>
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="relative max-w-[200px]">
              <Input
                placeholder="Enter your email"
                className="p-5"
              />
              <ArrowBigRightDash className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-3">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-sm">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          <div className="flex flex-col max-w-xs gap-y-3">
            <h3 className="text-xl font-semibold mb-2">Account</h3>
            <p className="text-sm">My Account</p>
            <p className="text-sm">Login / Register</p>
            <p className="text-sm">Cart</p>
            <p className="text-sm">Wishlist</p>
            <p className="text-sm">Shop</p>
          </div>

          <div className="flex flex-col max-w-xs gap-y-3">
            <h3 className="text-xl font-semibold mb-2">Quick Link</h3>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Terms Of Use</p>
            <p className="text-sm">FAQ</p>
            <p className="text-sm">Contact</p>
          </div>

          <div className="flex flex-col max-w-xs gap-y-3">
            <h3 className="text-xl font-semibold mb-2">Download App</h3>
            <p className="text-[10px] text-white/80">Save $3 with App New User Only</p>
            <div className="flex flex-row gap-x-1">
              <QrCode size={80} />
              <div className="flex flex-col gap-y-2">
                <div className="p-1 border border-white rounded">
                  <p className="text-[10px]">GET IT ON</p>
                  <h1>Google Play</h1>
                </div>
                <div className="p-1 border border-white rounded">
                  <p className="text-[10px]">Download on the</p>
                  <h1>App Store</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <Facebook size={24} />
              <Twitter size={24} />
              <Instagram size={24} />
              <Linkedin size={24} />
            </div>
          </div>
        </div>



      </div>
      <div className="w-full border-t border-white/30 text-white/30 py-3  flex justify-center">
        <Copyright size={20} />
        <p className="ms-1 text-sm">Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
}
