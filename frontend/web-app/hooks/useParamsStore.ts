import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
    pageNumber: number;
    pageSize: number;
    pageCount: number;
    searchTerm: string;
    searchValue: string;
    orderBy: string;
    filterBy: string;
};

type Actions = {
    setParams: (params: Partial<State>) => void;
    reset: () => void;
    setSearchValue: (value: string) => void;
};

const initialState: State = {
    pageNumber: 1,
    pageSize: 12,
    pageCount: 1,
    searchTerm: "",
    searchValue: "",
    orderBy: "make",
    filterBy: "live",
};

export const useParamsStore = createWithEqualityFn<State & Actions>()(
    (set) => ({
        ...initialState,
        setParams: (newParams: Partial<State>) => {
            set((state) => ({
                ...state,
                ...newParams,
                pageNumber: newParams.pageNumber ?? 1,
            }));
        },
        reset: () => set(initialState),
        setSearchValue: (value: string) => set((state) => ({ ...state, searchValue: value })),
    }),
    shallow
);
