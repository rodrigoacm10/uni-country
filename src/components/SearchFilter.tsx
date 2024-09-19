export function SearchFilter() {
  return (
    <div className="w-[300px]   gap-2 self-center flex-col  flex mt-20   ">
      <div className="relative">
        <input
          placeholder="sla"
          className="w-full font-[600]  border-2 rounded-full px-6 py-2 "
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-black absolute -top-[28%] translate-y-1/2 right-[6px] w-[33px] p-[5px] rounded-full"
        >
          a
        </button>
      </div>

      <div className="w-full flex gap-2 items-center justify-end">
        {/* top-0 -right-12 */}
        <button className="border bg-black  p-2 w-[42px] rounded-full   ">
          a
        </button>
        {/* top-0 -right-[94px] */}
        <button className="border bg-black  p-2 w-[42px] rounded-full   ">
          a
        </button>
      </div>
    </div>
  );
}
