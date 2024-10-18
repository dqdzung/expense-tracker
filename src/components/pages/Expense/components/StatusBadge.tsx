import { useMemo } from "react";
import { EnumStatus } from "../types";
import { Badge } from "@/components/ui/badge";

const StatusBadge = ({ value }: { value: EnumStatus }) => {
	const props = useMemo(() => {
		switch (value) {
			case EnumStatus.PENDING:
				return {
					variant: "outline",
					className:
						"text-blue-600 dark:text-blue-200 bg-blue-200 dark:bg-blue-800",
				};
			case EnumStatus.APPROVED:
				return {
					variant: "default",
					className:
						"text-green-600 dark:text-green-200 bg-green-200 dark:bg-green-800",
				};
			case EnumStatus.REJECTED:
				return {
					variant: "destructive",
				};
			default:
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return {} as any;
		}
	}, [value]);

	return (
		<Badge variant={props.variant} className={props.className}>
			{value}
		</Badge>
	);
};

export default StatusBadge;

