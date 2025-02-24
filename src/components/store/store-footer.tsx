export default function Footer() {
  return (
    <footer className="w-full py-10 px-4">
      <div className="border-t border-white/15 pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-white text-lg mb-4">Join the NVH® Experience</h3>
          <p className="text-sm text-neutral-400 mb-6">
            Subscribe to receive exclusive offers, early access to limited
            editions, and skincare insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/15 text-white/60 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-300"
            />
            <button className="bg-white text-neutral-900 px-6 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 pt-8 mt-8 text-sm text-neutral-400 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© {`${new Date().getFullYear()}`} NVH®. All rights reserved.</p>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a> */}
            {/* <a href="#" className="hover:text-white transition-colors">
              Shipping
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Returns
            </a> */}
            <span>
              Developed by{" "}
              <a
                target="_blank"
                href="https://nzar.dev"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                Nzar.dev
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
