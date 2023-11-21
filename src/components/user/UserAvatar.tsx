// UserAvatar.tsx

import { Avatar, Image } from "@chakra-ui/react";
import { UserAvatarProps } from "./types";

// UserAvatar component
const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt }) => (
    <Avatar size="lg" overflow="hidden" border="1px">
        {/* Image component with src and alt */}
        <Image src={src} alt={alt} boxSize="100%" objectFit="cover" />
    </Avatar>
);

export default UserAvatar;