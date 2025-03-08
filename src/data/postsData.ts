import PROFILE from '../index';

// Define post type for better type safety
export type PostType = {
    id: string;
    frontImg: string;
    backImg: string;
    profileImg: string;
    username: string;
    postTime: string;
    likes: number;
};

// Export the posts array
export const POSTS: PostType[] = [
    {
        id: 'uos_gungong_1',
        frontImg: PROFILE.FRONTIMG1,
        backImg: PROFILE.BACKIMG1,
        profileImg: PROFILE.PROFILE,
        username: "uos_gungong",
        postTime: "30m",
        likes: 1000,
    },
    {
        id: 'squarepants_spongebob_1',
        frontImg: PROFILE.FRONTIMG2,
        backImg: PROFILE.BACKIMG2,
        profileImg: PROFILE.PROFILE2,
        username: "squarepants_spongebob",
        postTime: "45m",
        likes: 2000,
    },
    {
        id: 'mr.Krabs_1',
        frontImg: PROFILE.FRONTIMG3,
        backImg: PROFILE.BACKIMG3,
        profileImg: PROFILE.PROFILE3,
        username: "mr.Krabs",
        postTime: "1hr",
        likes: 3000,
    },
];