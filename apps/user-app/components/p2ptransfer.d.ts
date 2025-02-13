export default function p2ptransferserver(): Promise<{
    status: number;
    data: {
        message: string;
    };
    transfer?: undefined;
    session?: undefined;
} | {
    transfer: {
        amount: number;
        id: number;
        timestamp: Date;
        fromUserId: number;
        toUserId: number;
    }[];
    session: any;
    status?: undefined;
    data?: undefined;
}>;
//# sourceMappingURL=p2ptransfer.d.ts.map