import { NearMissRecord } from '@/types';

export const calculateKPIs = (data: NearMissRecord[]) => {
    const totalIncidents = data.length;
    // Assuming severity > 3 is high risk
    const highRisk = data.filter((d) => d.severity_level >= 3).length;
    const openCases = data.filter((d) => d.is_lcv).length; // Just an assumption for 'open' or significant

    // Calculate unique locations
    const locations = new Set(data.map(d => d.location)).size;

    return { totalIncidents, highRisk, openCases, locations };
};

export const getSeverityDistribution = (data: NearMissRecord[]) => {
    const distribution: Record<string, number> = {};
    data.forEach((d) => {
        const key = `Level ${d.severity_level}`;
        distribution[key] = (distribution[key] || 0) + 1;
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
};

export const getTrendsByMonth = (data: NearMissRecord[]) => {
    const trends: Record<string, number> = {};
    // Sort by year then month
    // Create keys like "2024-01"
    data.forEach((d) => {
        const key = `${d.year}-${String(d.month).padStart(2, '0')}`;
        trends[key] = (trends[key] || 0) + 1;
    });

    return Object.entries(trends)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([date, count]) => ({ date, count }));
};

export const getRegularBreakdown = (data: NearMissRecord[]) => {
    const counts: Record<string, number> = {};
    data.forEach((d) => {
        if (d.region) {
            counts[d.region] = (counts[d.region] || 0) + 1;
        }
    });
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1]) // Top regions first
        .map(([name, value]) => ({ name, value }));
};

export const getCategoryBreakdown = (data: NearMissRecord[]) => {
    const counts: Record<string, number> = {};
    data.forEach((d) => {
        // Use primary category, check for empty
        const cat = d.primary_category || 'Uncategorized';
        counts[cat] = (counts[cat] || 0) + 1;
    });
    // Return top 10
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([name, value]) => ({ name, value }));
};

export const getBehaviorAnalysis = (data: NearMissRecord[]) => {
    const counts: Record<string, number> = {};
    data.forEach((d) => {
        const type = d.behavior_type || 'Unknown';
        counts[type] = (counts[type] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
};
