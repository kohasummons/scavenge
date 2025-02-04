import type React from "react";

interface FiatCardProps {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  className?: string;
  isReordering?: boolean;
}

export default function FiatCard({
  draggable,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  className,
  isReordering,
}: FiatCardProps) {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`bg-white rounded-2xl p-6 ${
        isReordering ? "border border-[#F5841F] drag-shadow" : ""
      } ${className}`}
    >
      <h2 className="text-3xl font-semibold">Fiat</h2>
    </div>
  );
}
