export interface User {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}

// Define the props types for UserSection component
export interface UserSectionProps {
    username: string;
    isWideScreen: boolean;
}

// Define the props types for UserInfo component
export interface UserDisplayProps {
    login: string;
    linkColor: string;
}

// Define the props types for UserAvatar component
export interface UserAvatarProps {
    src: string;
    alt: string;
}

// Component props
export interface UserInfoProps {
    username: string;
}

// Define the props types for UserHeader component
export interface UserHeaderProps {
    login: string;
    linkColor: string;
}

// Define the props types for UserCard component
export interface UserCardProps {
    user: User;
}