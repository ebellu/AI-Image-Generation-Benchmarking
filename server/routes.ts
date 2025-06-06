import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { solutions } from "@/data/solutions";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes prefix with /api
  
  // Solutions endpoints
  app.get("/api/solutions", (req, res) => {
    res.json(solutions);
  });

  app.get("/api/solutions/:id", (req, res) => {
    const solution = solutions.find(s => s.id === req.params.id);
    if (!solution) {
      return res.status(404).json({ message: "Solution not found" });
    }
    res.json(solution);
  });

  // Comparison matrix endpoint
  app.get("/api/comparison", (req, res) => {
    // Return a simplified version of solutions for comparison
    const comparisonData = solutions.map(solution => ({
      id: solution.id,
      name: solution.name,
      company: solution.company,
      companyColor: solution.companyColor,
      qualityDescription: solution.qualityDescription,
      controlDescription: solution.controlDescription,
      apiDescription: solution.apiDescription,
      featuresDescription: solution.featuresDescription
    }));
    
    res.json(comparisonData);
  });

  const httpServer = createServer(app);

  return httpServer;
}
