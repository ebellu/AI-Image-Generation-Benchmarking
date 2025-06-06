export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start">
          <div className="flex-1 max-w-2xl">
            <h3 className="text-lg font-semibold mb-4">AI Image Generation Solutions Benchmark</h3>
          </div>
          <div className="flex-shrink-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Sections</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white">Overview</a></li>
              <li><a href="#evaluation" className="text-gray-400 hover:text-white">Evaluation</a></li>
              <li><a href="#recommendations" className="text-gray-400 hover:text-white">Recommendations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
