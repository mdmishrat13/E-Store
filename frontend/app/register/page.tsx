import React from 'react'

const page = () => {
  return (
   <section className="bg-gray-50 flex flex-col items-center justify-center min-h-screen w-full">
  <div className="px-6 py-8 mx-auto lg:py-0">
    <div className="bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Create a new account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
            <input type="text" name="naem" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your Name" required/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700" required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full font-medium text-white bg-gray-900 rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default page