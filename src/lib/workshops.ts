import { backendUrl } from "@/env";
import { Workshop, WorkshopData } from "@/types";
import axios from "axios";
import { formatWorkshops } from "./format-data";

export const getWorkshops = async (): Promise<Workshop[]> => {
    const response = await axios.get<{ data: WorkshopData[] }>(`${backendUrl}/api/workshops`)
    return formatWorkshops(response.data.data);
}