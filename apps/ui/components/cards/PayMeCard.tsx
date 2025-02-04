import type React from "react";

interface PayMeCardProps {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  className?: string;
  isReordering?: boolean;
}

export default function PayMeCard({
  draggable,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  className,
  isReordering,
}: PayMeCardProps) {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`bg-white rounded-2xl p-5 space-y-5 ${
        isReordering ? "border border-[#F5841F] drag-shadow" : ""
      } ${className}`}
    >
      <h2 className="text-3xl font-semibold">Pay Me</h2>
    </div>
  );
}
