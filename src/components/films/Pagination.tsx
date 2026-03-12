export default function Pagination({
  page,
  totalPages,
  setCurrentPage,
}: {
  page: number
  totalPages: number
  setCurrentPage: (page: number) => void
}) {
  return (
    <div className="flex justify-center mt-4 join">
      {page >= 2 && (
        <button onClick={() => setCurrentPage(1)} className="join-item btn">
          1
        </button>
      )}
      {page >= 3 && (
        <button
          onClick={() => setCurrentPage(page - 1)}
          className="join-item btn"
        >
          {page - 1}
        </button>
      )}
      <button
        onClick={() => setCurrentPage(page)}
        className="join-item btn btn-disabled"
      >
        {page}
      </button>
      {page < totalPages - 1 && (
        <button
          onClick={() => setCurrentPage(page + 1)}
          className="join-item btn"
        >
          {page + 1}
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={() => setCurrentPage(totalPages)}
          className="join-item btn"
        >
          {totalPages}
        </button>
      )}
    </div>
  )
}
