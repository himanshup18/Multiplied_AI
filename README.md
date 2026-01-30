# Near Miss Data Dashboard

An interactive dashboard for analyzing Near Miss / Incident data in a construction context. Built with Next.js, Tailwind CSS, shadcn/ui, and Recharts.

## Features
- **Key Performance Indicators (KPIs)**: Overview of total incidents, high-risk events, and open cases.
- **Severity Distribution**: Donut chart visualizing incidents by severity level.
- **Trend Analysis**: Area chart showing incident trends over time (monthly).
- **Category Breakdown**: Top incident categories.
- **Behavior Analysis**: Breakdown of unsafe behaviors vs conditions.
- **Regional Analysis**: Incidents by geographic region.

## Tech Stack
-   **Framework**: Next.js 14+ (App Router)
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui (Radix UI)
-   **Charts**: Recharts
-   **Icons**: Lucide React

## Setup Instructions

1.  **Navigate to the project directory**:
    ```bash
    cd near-miss-dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the dashboard**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Assumptions
-   **High Risk**: Incidents with `severity_level` 3 or higher are flagged as High Risk.
-   **Open Cases**: Records with `is_lcv: true` are treated as significant/open cases for the KPI card.
-   **Data Source**: The application reads from `public/data/db.dashboard_incidents.json`.



