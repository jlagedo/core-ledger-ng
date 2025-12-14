export interface Todo {
    id: number;
    description: string | null;
    isCompleted: boolean;
    createdAt: Date;
    completedAt: Date | null;
}

export interface CreateTodo {
    description: string | null;
    isCompleted: boolean;
}

export interface UpdateTodo {
    description: string | null;
    isCompleted: boolean;
}
