export declare const authOptions: {
    providers: import("next-auth/providers/credentials").CredentialsConfig<{
        name: {
            label: string;
            type: string;
            placeholder: string;
            required: boolean;
        };
        phone: {
            label: string;
            type: string;
            placeholder: string;
            required: boolean;
        };
        password: {
            label: string;
            type: string;
            required: boolean;
        };
    }>[];
    secret: string;
    callbacks: {
        jwt({ token, user }: {
            token: any;
            user: any;
        }): Promise<any>;
        session({ token, session }: any): Promise<any>;
    };
    pages: {
        signIn: string;
    };
};
//# sourceMappingURL=auth.d.ts.map