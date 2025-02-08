    // @ts-nocheck
import 'next-auth';

declare module 'next-auth' {
    export interface Session {
        user: {
            id: number;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
} 