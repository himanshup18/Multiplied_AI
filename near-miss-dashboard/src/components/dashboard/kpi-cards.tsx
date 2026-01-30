import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, MapPin, FileWarning } from "lucide-react"

interface KPIProps {
    totalIncidents: number;
    highRisk: number;
    openCases: number;
    locations: number;
}

export function KPICards({ totalIncidents, highRisk, openCases, locations }: KPIProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Incidents</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{totalIncidents.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Total records in database</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">High Risk Events</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{highRisk.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Severity Level 3+</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">LCV / Open Cases</CardTitle>
                    <FileWarning className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{openCases.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Marked as is_lcv</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Locations</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{locations}</div>
                    <p className="text-xs text-muted-foreground">Active work areas</p>
                </CardContent>
            </Card>
        </div>
    )
}
