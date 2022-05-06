const SignUp = () => {
    return (
        <>
            <div class="w-full mt-10 mobile:w-80 max-w-sm p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">FoodDelivery</h1>

            <form class="mt-6">
                <div>
                    <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                    <input type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                    </div>

                    <input type="password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="mt-6">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        SignUp
                    </button>
                </div>
            </form>

            <div class="flex items-center mt-6 -mx-2">
                <button type="button"
                    class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span class="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>
            </div>
            </div>
        </>
    )
}

export default SignUp
