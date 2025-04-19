

export type OrderStatus = "New" | "Picking" | "Delivering" | "Delivered";

export interface Order {
  id: number;
  customerName: string;
  status: OrderStatus;
  items: string[];
  createdAt: string;
}
