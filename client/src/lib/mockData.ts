// Mock data service for demo deployment
export interface GameStats {
  health: number;
  oxygen: number;
  score: number;
  level: number;
}

export interface GameObjective {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  progress?: number;
  maxProgress?: number;
}

export interface GameObject {
  id: string;
  name: string;
  type: string;
  description: string;
  x: number;
  y: number;
  interactive: boolean;
}

// Mock game data
export const mockGameStats: GameStats = {
  health: 85,
  oxygen: 62,
  score: 1250,
  level: 3
};

export const mockObjectives: GameObjective[] = [
  {
    id: "1",
    title: "Explore the Station",
    description: "Walk around and familiarize yourself with the environment",
    completed: true
  },
  {
    id: "2", 
    title: "Repair Communication Array",
    description: "Fix the damaged communication equipment",
    completed: false,
    progress: 2,
    maxProgress: 5
  },
  {
    id: "3",
    title: "Collect Resources",
    description: "Gather materials for station maintenance",
    completed: false,
    progress: 3,
    maxProgress: 10
  },
  {
    id: "4",
    title: "Restore Power Grid",
    description: "Reactivate the main power systems",
    completed: false
  }
];

export const mockGameObjects: GameObject[] = [
  {
    id: "console1",
    name: "Command Console",
    type: "terminal",
    description: "Main command interface for station operations. Shows system status and allows control of various station functions.",
    x: 200,
    y: 150,
    interactive: true
  },
  {
    id: "panel1",
    name: "Control Panel",
    type: "panel",
    description: "Secondary control panel with environmental controls and backup systems.",
    x: 500,
    y: 200,
    interactive: true
  },
  {
    id: "computer1",
    name: "Data Terminal",
    type: "computer",
    description: "Research computer containing scientific data and mission logs.",
    x: 350,
    y: 400,
    interactive: true
  },
  {
    id: "door1",
    name: "Airlock Door",
    type: "door", 
    description: "Sealed airlock leading to the outer sections of the station.",
    x: 100,
    y: 300,
    interactive: true
  },
  {
    id: "equipment1",
    name: "Repair Kit",
    type: "equipment",
    description: "Tools and components needed for station repairs.",
    x: 600,
    y: 350,
    interactive: true
  }
];

// Mock API functions
export const mockApi = {
  getGameStats: async (): Promise<GameStats> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return { ...mockGameStats };
  },

  getObjectives: async (): Promise<GameObjective[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...mockObjectives];
  },

  getGameObjects: async (): Promise<GameObject[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...mockGameObjects];
  },

  updateObjective: async (id: string, completed: boolean): Promise<GameObjective> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    const objective = mockObjectives.find(obj => obj.id === id);
    if (objective) {
      objective.completed = completed;
    }
    return objective!;
  },

  saveGameStats: async (stats: Partial<GameStats>): Promise<GameStats> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    Object.assign(mockGameStats, stats);
    return { ...mockGameStats };
  }
};
