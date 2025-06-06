import { Card, CardContent } from "@/components/ui/card";
import { BadgeWithDot } from "@/components/ui/badge-with-dot";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/solutions";

export function Overview() {
  return (
    <section id="overview" className="mb-16">
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Overview of Solutions</h2>
        <p className="text-gray-600 mt-2">A selection of some of the best and most popular AI image generation solutions.</p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {solutions.map((solution) => (
          <Card key={solution.id} className="overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300"> 
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{solution.name}</h3>
                <BadgeWithDot text={solution.company} color={solution.companyColor} />
              </div>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <div className="mt-auto">
                <a href={`#${solution.id}`}>
                  <Button variant="link" className="text-primary hover:text-blue-700 font-medium flex items-center p-0">
                    <span>View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </section>
  );
}
