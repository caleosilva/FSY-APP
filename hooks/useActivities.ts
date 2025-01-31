"use client"

import { useEffect, useState } from "react";
import daysResponse from "@/data/dias.json"
import activitiesResponseImport from "@/data/atividades.json"
import { Activity } from "@/types/activity";


interface DaysResponse {
  dia1: string[];
  dia2: string[];
  dia3: string[];
  dia4: string[];
  dia5: string[];
}

interface ActivitiesResponse {
  [id: string]: Activity;
}

export function useActivities(day: keyof DaysResponse) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const activitiesResponse: ActivitiesResponse = activitiesResponseImport;
        const activityIds = daysResponse[day] || []; 
        const filteredActivities = activityIds.map((id: string) => activitiesResponse[id]);

        setActivities(filteredActivities);
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    }
    fetchData();
  }, [day]);
  return activities;
}
