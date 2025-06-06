import { Card, CardContent } from "@/components/ui/card";
import { BadgeWithDot } from "@/components/ui/badge-with-dot";
import { solutions } from "@/data/solutions";

export function Evaluation() {
  return (
    <section id="evaluation" className="mb-16">
      <div className="border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Evaluation</h2>
        <p className="text-gray-600 mt-2">In-depth analysis of the selected image generation tools.</p>
      </div>
 {/* Detailed Solution Descriptions */}
      <div className="space-y-12 mb-16">
        {solutions.map((solution) => (
          <div key={solution.id} id={solution.id} className="scroll-mt-24">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-2xl font-bold text-gray-800">{solution.name}</h3>
                    <BadgeWithDot text={solution.company} color={solution.companyColor} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Score</div>
                    <div className="text-2xl font-bold text-primary">{solution.overallScore}/10</div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-6">{solution.description}</p>

                <div className="mt-6">
                  <h4 className="font-semibold text-800 text-primary mb-3">Example Images with Prompts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {solution.examplePrompts.map((example, index) => (
                      
                      <div key={index} className="rounded-lg overflow-hidden">
                       
                      <img src={example.imageUrl} alt={`Generated image ${index + 1}`} className="rounded-lg w-full h-80 object-cover" />
                        <div className="p-3">
                          {
                          example.promptSummary=="" 
                          ? 
                          <p className="text-sm text-gray-700">{example.prompt}</p> 
                          :
                           <details className="text-sm text-gray-700">
                            <summary className="text-sm text-gray-700">{example.promptSummary}</summary>
                            {example.prompt}
                          </details>
                        }
                        </div>
                      </div> 
                    ))}
                  </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-6">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Quality of the Result</h4>
                    <p className="text-sm text-gray-700">{solution.qualityDescription}</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Configurability and Control</h4>
                    <p className="text-sm text-gray-700">{solution.controlDescription}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">API Integration</h4>
                    <p className="text-sm text-gray-700">{solution.apiDescription}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-ingraydigo-800 mb-2">Additional features</h4>
                    <p className="text-sm text-gray-700">{solution.featuresDescription}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Strengths</h4>
                    <ul className="space-y-2">
                      {solution.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">Limitations</h4>
                    <ul className="space-y-2">
                      {solution.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-4 w-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div> 
      
    </section>
  );
}
