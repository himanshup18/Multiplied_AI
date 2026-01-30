import { getNearMissData } from "@/lib/data";
import {
  calculateKPIs,
  getSeverityDistribution,
  getTrendsByMonth,
  getCategoryBreakdown,
  getBehaviorAnalysis,
  getRegularBreakdown
} from "@/lib/analytics";
import { KPICards } from "@/components/dashboard/kpi-cards";
import { SeverityDistribution } from "@/components/charts/severity-distribution";
import { IncidentTrend } from "@/components/charts/incident-trend";
import { CategoryBreakdown } from "@/components/charts/category-breakdown";
import { RegionAnalysis } from "@/components/charts/region-analysis";
import { BehaviorAnalysis } from "@/components/charts/behavior-analysis";

export default async function DashboardPage() {
  const data = await getNearMissData();

  if (!data || data.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-destructive">Error: No Data Found</h1>
      </div>
    );
  }

  const kpis = calculateKPIs(data);
  const severityData = getSeverityDistribution(data);
  const trendData = getTrendsByMonth(data);
  const categoryData = getCategoryBreakdown(data);
  const regionData = getRegularBreakdown(data); // Using the one I defined
  const behaviorData = getBehaviorAnalysis(data);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          {/* Filters could go here, but for now just title */}
          <span className="text-sm text-muted-foreground">Near Miss Data Analysis</span>
        </div>
      </div>

      <KPICards {...kpis} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <IncidentTrend data={trendData} />
        </div>
        <div className="col-span-3">
          <SeverityDistribution data={severityData} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <CategoryBreakdown data={categoryData} />
        <BehaviorAnalysis data={behaviorData} />
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <RegionAnalysis data={regionData} />
      </div>
    </div>
  );
}
