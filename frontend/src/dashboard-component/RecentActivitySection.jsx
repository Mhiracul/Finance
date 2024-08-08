const RecentActivitySection = () => (
  <section className="flex-col basis-3/5 border-2 w-1/2 font-grotesque border-black self-stretch md:self-start items-center rounded-xl m-4 py-10 px-6">
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <p className="text-gray-900 text-base md:text-base font-semibold my-2">
          Recent Activity
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-700 font-medium rounded-full p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      </div>

      <div className="flex justify-between mb-1">
        <p className="text-gray-900 text-base md:text-sm font-semibold">Type</p>
        <p className="text-gray-900 text-base md:text-sm font-semibold">
          Amount
        </p>
        <p className="text-gray-900 text-base md:text-sm font-semibold">Date</p>
        <p className="text-gray-900 text-base md:text-sm font-semibold">
          Status
        </p>
      </div>
    </div>
  </section>
);

export default RecentActivitySection;
