import { useParamsStore } from "@/hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react";

type EmptyFilterProps = {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
};

export default function EmptyFilter({
    title = "No matches for this filter",
    subtitle = "Try changing or resetting the filter",
    showReset,
}: Readonly<EmptyFilterProps>) {
    const reset = useParamsStore((state) => state.reset);

    return (
        <div className="h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg">
            <Heading title={title} subtitle={subtitle} center />
            {showReset && (
                <div className="mt-4">
                    <Button onClick={reset} outline>
                        Reset filter
                    </Button>
                </div>
            )}
        </div>
    );
}
