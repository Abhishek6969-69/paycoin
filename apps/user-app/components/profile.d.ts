interface UserSession {
    user: {
        name: string | null;
        email: string;
        id: string;
        token: string;
        image: string;
    };
}
export default function Profilesection({ userData, onClose }: {
    userData: UserSession;
    onClose: () => void;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=profile.d.ts.map