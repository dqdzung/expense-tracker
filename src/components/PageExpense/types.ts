export type ExpenseItem = {
	amount: number;
	category: string;
	date: string;
	description: string;
	id: string;
	status: EnumStatus;
	employeeId: string;
	employeeName: string;
};

export enum EnumStatus {
	PENDING = "PENDING",
	APPROVED = "APPROVED",
	REJECTED = "REJECTED",
}
