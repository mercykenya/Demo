import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { mockApi } from "./mockData";

// Demo query functions that use mock data instead of real API calls
const demoQueryFunctions: Record<string, () => Promise<any>> = {
  "/api/stats": mockApi.getGameStats,
  "/api/objectives": mockApi.getObjectives,
  "/api/objects": mockApi.getGameObjects,
};

export const getDemoQueryFn: <T>() => QueryFunction<T> = () => async ({ queryKey }) => {
  const key = queryKey.join("/");
  
  // Check if we have a mock function for this query
  if (demoQueryFunctions[key]) {
    return await demoQueryFunctions[key]();
  }
  
  // For unknown queries, return mock data or null
  console.warn(`No mock data available for query: ${key}`);
  return null;
};

export const demoApiRequest = async (
  method: string,
  url: string,
  data?: unknown
): Promise<Response> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Handle different API endpoints
  if (url.includes('/api/objectives') && method === 'PATCH') {
    // Mock updating objective
    const result = await mockApi.updateObjective(data as string, true);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (url.includes('/api/stats') && method === 'POST') {
    // Mock saving stats
    const result = await mockApi.saveGameStats(data as any);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Default response
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const demoQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getDemoQueryFn(),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
