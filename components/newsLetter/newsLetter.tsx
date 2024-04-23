import { Input } from "../ui/input";
import { Label } from "../ui/label";

const NewsLetter = () => {
  return (
    <section className="bg-white rounded-xl shadow-md my-4 w-[95%] border-meta-1 border">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-meta-8 sm:text-4xl dark:text-white">
            Subscribe for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Do you want to get notified when a new component is added to
            BitSnip? Subscribe our newsletter and you will be among the first to
            find out about new features, updates, versions, and tools.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <Label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </Label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-meta-0 sm:rounded-none sm:rounded-l-lg focus:ring-meta-0 focus:border-meta-0 focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-meta-0 border-meta-0/80 sm:rounded-none sm:rounded-r-lg hover:bg-meta-0/80 focus:ring-2 focus:ring-meta-5 "
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500">
              We care about the protection of your data.{" "}
              <a href="#" className="font-medium text-meta-0 hover:underline">
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
