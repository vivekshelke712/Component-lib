const TPagination = () => {
    const pages = [1, 2, 3, 4, 5];
  
    return (
      <div className="flex justify-center mt-4">
        <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          {pages.map((page) => (
            <button
              key={page}
              className={`px-4 py-2 border text-sm font-medium ${
                page === 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  export default TPagination;
  