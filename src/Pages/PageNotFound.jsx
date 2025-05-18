import { useEffect } from "react"
import { Link } from "react-router-dom"


export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });

  return (
    <main>
      <section className="flex flex-col items-center justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 p-4  shadow-lg  dark:text-white rounded">404, oops</p>
          
          <div className="max-w-lg shadow-lg p-5 mx-auto">
            <img src="https://media.giphy.com/media/3o7aD2saX0v1x4q5iY/giphy.gif" alt="Page not found" className="w-96 h-96 rounded" />
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
       <Link to="/" className="text-2xl font-bold my-10 p-4 rounded">
  <button className="w-64 text-xl text-gray-800 mr-2 mb-2 dark:text-white rounded bg-gradient-to-r from-white via-darkbg to-white dark:from-slate-600 dark:via-slate-300 dark:to-slate-900 px-5 py-2.5">
    Back To Inimate with a Click
  </button>
</Link>

        </div>
      </section>
    </main>
  )
}
