export interface TimelineItem {
    time: string;
    description: string;
}

export interface KeyPoint {
    title?: string;
    details?: string;
    todo?: string[];
    timeline?: TimelineItem[];
}

export interface Activity {
    time: { [day: string]: string };
    name: string;
    location: string;
    key_points: KeyPoint[];
}

export interface DayTopics {
    [day: string]: {
        topics: string[];
    };
}
