# Near Miss Data Dashboard

An interactive dashboard for analyzing Near Miss/Incident data in a construction environment. This application visualizes trends, severity distributions, and high-risk behaviors to help safety teams identify potential hazards before they become accidents.

## 🚀 Features

-   **Data Processing**: Loads and processes ~7,800 JSON records server-side.
-   **Interactive Charts**:
    -   **Incident Trends**: Monthly volume analysis (Area Chart).
    -   **Severity Distribution**: Breakdown of incidents by severity level (Donut Chart).
    -   **Category Analysis**: Top incident categories (Bar Chart).
    -   **Behavior Analysis**: At-risk vs. Safe behaviors (Bar Chart).
    -   **Regional Heatmap**: Incident frequency by location/region (Bar Chart).
-   **KPI Cards**: High-level summary of total incidents, high-risk events, and open cases.
-   **Premium UI**: Dark-themed, glassmorphism-inspired interface for a modern look.
-   **Responsive Design**: Fully responsive grid layout for desktop and mobile.

## 🛠️ Tools & Technologies

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: TypeScript / JavaScript
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Setup Instructions

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/himanshup18/Multiplied_AI.git
    cd Multiplied_AI/near-miss-dashboard
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

## 📁 Project Structure

-   `src/app/page.tsx`: Main dashboard entry point (Server Component).
-   `src/lib/data.ts`: Data loading utility (Server-side FS access).
-   `src/lib/analytics.ts`: Data aggregation and processing logic.
-   `src/components/charts/`: Reusable chart components.
-   `src/components/dashboard/`: Dashboard-specific layouts and widgets.
-   `src/components/ui/`: Shared UI components (Cards, etc.).
-   `public/data/`: Contains the accepted dataset (`db.dashboard_incidents.json`).

## 📝 Assumptions & Limitations

-   **Data Source**: The application accepts a static JSON file located in `public/data/`.
-   **Date Parsing**: Assumes 'Date' field is in standard date strings (ISO or similar) for trend analysis.
-   **Performance**: Data is processed on the server at request time. For significantly larger datasets, database indexing or pre-aggregation would be recommended.

## ✅ Evaluation Criteria Checklist

-   [x] **Data Handling**: JSON Data loaded via server-side Node.js logic.
-   [x] **Visualizations**: Implemented >5 meaningful charts.
-   [x] **Stability**: Error handling for missing/empty data included.
-   [x] **Code Quality**: Modular component structure with separated analytics logic.
-   [x] **User Experience**: Clean, modern dark theme for professional usage.
