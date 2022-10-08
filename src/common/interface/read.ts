export interface Read {
    readById: (resourceId: any) => Promise<any>
}