import PROFILE from '../index';
import { NotificationTypes } from '../types/NotificationTypes';

export interface NotificationItem {
    id: string;
    username: string;
    profileImage: any;
    type: NotificationTypes;
    time: string;
}

export const notifications: NotificationItem[] = [
    { id: "1", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "request", time: "12m" },
    { id: "2", username: "squarepants_spongebob", profileImage: PROFILE.PROFILE2, type: "new_post", time: "12m" },
    { id: "3", username: "squarepants_spongebob", profileImage: PROFILE.PROFILE2, type: "reply_snap", time: "12m" },
    { id: "4", username: "squarepants_spongebob", profileImage: PROFILE.PROFILE2, type: "join_snap", time: "12m" },
    { id: "5", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "follow", time: "1d" },
    { id: "6", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "like", time: "1d" },
    { id: "7", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "mention", time: "2d" },
    { id: "8", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "follow", time: "2d" },
    { id: "9", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "like", time: "3d" },
    { id: "10", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "mention", time: "5d" },
    { id: "11", username: "uos_gungong", profileImage: PROFILE.PROFILE, type: "follow", time: "1w" },
    { id: "12", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "like", time: "1w" },
    { id: "13", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "mention", time: "1w" },
    { id: "14", username: "mr.Krabs", profileImage: PROFILE.PROFILE3, type: "comment", time: "12w" },
];