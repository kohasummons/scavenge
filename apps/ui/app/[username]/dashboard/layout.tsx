import DashboardCustomLayout from "@/components/layout/DashboardCustomLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardCustomLayout>{children}</DashboardCustomLayout>;
}
