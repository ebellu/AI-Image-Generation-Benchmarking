import { Card, CardContent } from "@/components/ui/card";
import { solutions } from "@/data/solutions";

export function Recommendations() {

  return (
    <section id="recommendations" className="mb-16">
     <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Final Recommendations</h2>
        <p className="text-gray-600 mt-2">Guidance based on evaluated solutions, specific use cases and requirements.</p>
      </div>

      {/* Use Case Matching */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {solutions.map((solution) => (
          <Card key={solution.id} className="overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300"> 
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{solution.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{solution.recommendations}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
