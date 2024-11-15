const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white/90">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                <div className="text-blue-500 text-lg font-medium">Loading...</div>
            </div>
        </div>
    );
};

export default Loading;
