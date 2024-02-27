import { FaMoneyCheckAlt } from "react-icons/fa";
const FetcherCurd = () => {
    return (
        <div>
            <div>
            <div className="bg-white mt-12">

    <div className="mx-auto container flex justify-center px-4">
        <div className="flex flex-col space-y-8 w-full px-16 max-w-xl">
            <h1 className='text-center text-5xl font-bold'>Services</h1>
            
            <div className="bg-gradient-to-tl from-green-500 to-green-950 text-white h-56 w-96 p-6 rounded-xl shadow-md">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between space-x-4">
                        <div className=" text-xl font-semibold tracking-tigh">
                            SUPERCOMPANY
                        </div>

                        <div className="inline-flex flex-col items-center justify-center">
                            <svg className="h-8 w-8" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                                    stroke="currentColor" stroke-width="1.5"></path>
                                <path
                                    d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11 8.5L8 15.5L5 8.5" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>

                            <div
                                className="font-semibold text-white">
                                wallet
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                        <div className="relative w-full h-full grid grid-cols-2 gap-1">
                            <div className="absolute border border-gray-900 rounded w-4 h-6 left-4 top-1"></div>
                            <div className="border-b border-r border-gray-900 rounded-br"></div>
                            <div className="border-b border-l border-gray-900 rounded-bl"></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className="border-t border-r border-gray-900 rounded-tr"></div>
                            <div className="border-t border-l border-gray-900 rounded-tl"></div>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-xs font-semibold tracking-tight">
                            balance
                        </div>

                        <div className="text-2xl font-semibold">
                            $50
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="relative">
                <div
                    className="absolute right-10 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-16 w-72 px-2 py-3 rounded-lg">
                    <div className="flex-initial h-8 w-8">
                        <div
                            className="inline-flex  items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                            <div className="p-2 h-8 w-8">
                            <FaMoneyCheckAlt className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 inline-flex items-start justify-between">
                        <div>
                            <h2 className="text-xs font-semibold tracking-tight">Loyalty program</h2>
                            <p className="text-xs text-gray-500 font-light">You received $5 credit</p>
                        </div>

                        <div className="text-xs text-gray-400">17:15</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        </div>
    );
};

export default FetcherCurd;