const WishlistContainer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4 p-8">
        <h5 className="text-xl font-medium text-black border-b-2 border-[#E8E8E9] pb-2">
          This Month
        </h5>
        {/* {Wishlists.map(wishlist => (
                    <div className='w-full p-6'>
                        <div
                            dangerouslySetInnerHTML={{ __html: wishlist.content }}
                            key={wishlist.id}
                            className='text-black'
                        />
                    </div>
                ))} */}
      </div>
    </div>
  );
};

export default WishlistContainer;
