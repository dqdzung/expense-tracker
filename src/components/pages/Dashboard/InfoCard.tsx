import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoCard = ({
	label,
	value,
	icon,
}: {
	label: string;
	value: string | number;
	icon?: React.ReactNode;
}) => {
	return (
		<Card>
			<CardHeader className="p-4">
				<CardTitle>
					<div className="flex justify-between items-center">
						<span>{label}</span>
						{icon}
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent className="px-4">
				<span className="text-3xl font-bold">{value}</span>
			</CardContent>
		</Card>
	);
};

export default InfoCard;
