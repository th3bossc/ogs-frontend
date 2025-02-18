import { backendUrl } from "@/env";
import { Notification, NotificationData } from "@/types";
import axios from "axios";
import { formatNotifications } from "./format-data";

/**
 * get notificaionts
 * @returns Notificaionts
 * 
 * @example
 * const notifications = await getNotifications();
 */
export const getNotifications = async (): Promise<Notification[]> => {
    const response = await axios.get<{ data: NotificationData[] }>(`${backendUrl}/api/notifications`);
    return formatNotifications(response.data.data)
}