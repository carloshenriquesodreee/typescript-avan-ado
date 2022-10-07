export interface Delete {
    deleteById: (resourceId: any) => Promise<void>
}