import fs from 'fs';
import path from 'path';
import { NearMissRecord } from '@/types';

export async function getNearMissData(): Promise<NearMissRecord[]> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data', 'db.dashboard_incidents.json');
        const fileContents = await fs.promises.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return data as NearMissRecord[];
    } catch (error) {
        console.error('Error loading data:', error);
        return [];
    }
}
