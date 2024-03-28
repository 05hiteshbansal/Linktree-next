import React from 'react'

const Notfound = () => {
  return (
    <>
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 text-center">
      <h2 className="text-base font-semibold text-indigo-600">404</h2>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <h2 className="mt-6 text-base leading-7 text-gray-600">Sorry, we could not find the page you are looking for.</h2>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
        <a href="/" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
    </>
  )
}
export default Notfound