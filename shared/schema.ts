import { pgTable, text, serial, integer, boolean, json, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (base schema from the template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// AI Image Generation Solutions
export const solutions = pgTable("solutions", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  companyColor: text("company_color").notNull(),
  description: text("description").notNull(),
  tags: text("tags").array().notNull(),
  overallScore: decimal("overall_score").notNull(),
  qualityScore: decimal("quality_score").notNull(),
  controlScore: decimal("control_score").notNull(),
  apiScore: decimal("api_score").notNull(),
  costScore: decimal("cost_score").notNull(),
  safetyScore: decimal("safety_score").notNull(),
  featuresScore: decimal("features_score").notNull(),
  qualityDescription: text("quality_description").notNull(),
  controlDescription: text("control_description").notNull(),
  apiDescription: text("api_description").notNull(),
  costDescription: text("cost_description").notNull(),
  safetyDescription: text("safety_description").notNull(),
  featuresDescription: text("features_description").notNull(),
  pros: text("pros").array().notNull(),
  cons: text("cons").array().notNull(),
});

export const insertSolutionSchema = createInsertSchema(solutions).omit({
  id: true
});

export type InsertSolution = z.infer<typeof insertSolutionSchema>;
export type Solution = typeof solutions.$inferSelect;

// Evaluation Metrics
export const evaluationMetrics = pgTable("evaluation_metrics", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // quality, control, api, etc.
  name: text("name").notNull(),
  description: text("description"),
});

export const insertEvaluationMetricSchema = createInsertSchema(evaluationMetrics).omit({
  id: true
});

export type InsertEvaluationMetric = z.infer<typeof insertEvaluationMetricSchema>;
export type EvaluationMetric = typeof evaluationMetrics.$inferSelect;

// Solution Metrics (scores for each metric for each solution)
export const solutionMetrics = pgTable("solution_metrics", {
  id: serial("id").primaryKey(),
  solutionId: integer("solution_id").notNull().references(() => solutions.id),
  metricId: integer("metric_id").notNull().references(() => evaluationMetrics.id),
  score: decimal("score").notNull(),
});

export const insertSolutionMetricSchema = createInsertSchema(solutionMetrics).omit({
  id: true
});

export type InsertSolutionMetric = z.infer<typeof insertSolutionMetricSchema>;
export type SolutionMetric = typeof solutionMetrics.$inferSelect;

// Use Cases
export const useCases = pgTable("use_cases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  advice: text("advice").notNull(),
});

export const insertUseCaseSchema = createInsertSchema(useCases).omit({
  id: true
});

export type InsertUseCase = z.infer<typeof insertUseCaseSchema>;
export type UseCase = typeof useCases.$inferSelect;

// Use Case Recommendations
export const useCaseRecommendations = pgTable("use_case_recommendations", {
  id: serial("id").primaryKey(),
  useCaseId: integer("use_case_id").notNull().references(() => useCases.id),
  name: text("name").notNull(), // e.g. "Best choice", "Alternative"
  value: text("value").notNull(), // e.g. "Midjourney for aesthetic quality"
  order: integer("order").notNull(), // for ordering recommendations within a use case
});

export const insertUseCaseRecommendationSchema = createInsertSchema(useCaseRecommendations).omit({
  id: true
});

export type InsertUseCaseRecommendation = z.infer<typeof insertUseCaseRecommendationSchema>;
export type UseCaseRecommendation = typeof useCaseRecommendations.$inferSelect;

// Features
export const features = pgTable("features", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const insertFeatureSchema = createInsertSchema(features).omit({
  id: true
});

export type InsertFeature = z.infer<typeof insertFeatureSchema>;
export type Feature = typeof features.$inferSelect;

// Solution Features (which solutions have which features)
export const solutionFeatures = pgTable("solution_features", {
  id: serial("id").primaryKey(),
  solutionId: integer("solution_id").notNull().references(() => solutions.id),
  featureId: integer("feature_id").notNull().references(() => features.id),
  supported: boolean("supported").notNull(),
});

export const insertSolutionFeatureSchema = createInsertSchema(solutionFeatures).omit({
  id: true
});

export type InsertSolutionFeature = z.infer<typeof insertSolutionFeatureSchema>;
export type SolutionFeature = typeof solutionFeatures.$inferSelect;

// Additional Evaluation Criteria
export const evaluationCriteria = pgTable("evaluation_criteria", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const insertEvaluationCriterionSchema = createInsertSchema(evaluationCriteria).omit({
  id: true
});

export type InsertEvaluationCriterion = z.infer<typeof insertEvaluationCriterionSchema>;
export type EvaluationCriterion = typeof evaluationCriteria.$inferSelect;

// Recommendations (strategic recommendations)
export const strategicRecommendations = pgTable("strategic_recommendations", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // immediate, longTerm
  recommendation: text("recommendation").notNull(),
  order: integer("order").notNull(),
});

export const insertStrategicRecommendationSchema = createInsertSchema(strategicRecommendations).omit({
  id: true
});

export type InsertStrategicRecommendation = z.infer<typeof insertStrategicRecommendationSchema>;
export type StrategicRecommendation = typeof strategicRecommendations.$inferSelect;
