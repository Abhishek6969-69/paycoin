
export function Shimmer() {
    return (
        <div className="w-full h-screen bg-[#FBFBFB] flex justify-center items-start pt-20">
            <div className="w-full max-w-7xl px-4">
                {/* Header Shimmer */}
                <div className="animate-pulse mb-8">
                    <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-64 mb-4 shimmer-bg"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Left Column - Add Money Form */}
                    <div className="animate-pulse">
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 shimmer-card">
                            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-32 mb-6 shimmer-bg"></div>
                            
                            {/* Amount Input */}
                            <div className="mb-4">
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-16 mb-2 shimmer-bg"></div>
                                <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg shimmer-bg"></div>
                            </div>

                            {/* Bank Selection */}
                            <div className="mb-6">
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-20 mb-2 shimmer-bg"></div>
                                <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg shimmer-bg"></div>
                            </div>

                            {/* Button */}
                            <div className="h-14 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-lg shimmer-bg"></div>
                        </div>
                    </div>

                    {/* Right Column - Balance & Transactions */}
                    <div className="space-y-6">
                        {/* Balance Card */}
                        <div className="animate-pulse">
                            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 shimmer-card">
                                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-20 mb-4 shimmer-bg"></div>
                                
                                {/* Balance Items */}
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-32 shimmer-bg"></div>
                                        <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-20 shimmer-bg"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Transactions Card */}
                        <div className="animate-pulse">
                            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 shimmer-card">
                                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-40 mb-4 shimmer-bg"></div>
                                
                                {/* Transaction Items */}
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
                                        <div className="flex-1">
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-24 mb-2 shimmer-bg"></div>
                                            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-20 shimmer-bg"></div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="h-6 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 rounded-full w-16 shimmer-bg"></div>
                                            <div className="h-5 bg-gradient-to-r from-green-200 via-green-100 to-green-200 rounded w-16 shimmer-bg"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .shimmer-bg {
                    position: relative;
                    overflow: hidden;
                }

                .shimmer-bg::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.4),
                        transparent
                    );
                    animation: shimmer 1.5s infinite;
                    transform: translateX(-100%);
                }

                .shimmer-card {
                    position: relative;
                    overflow: hidden;
                }

                .shimmer-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    animation: shimmer 2s infinite;
                    z-index: 1;
                }
            `}</style>
        </div>
    );
}
  
 