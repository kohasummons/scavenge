export function LinksList() {
  const links = [
    {
      id: 1,
      url: "billa.gg/txbo/pay/ethereum/eth/10",
      clicks: 21,
    },
    {
      id: 2,
      url: "billa.gg/txbo/pay/ethereum/eth/100",
      clicks: 7,
    },
  ];

  return (
    <div className="space-y-4 ">
      {links.map((link) => (
        <div
          key={link.id}
          className="flex items-center justify-between hover:bg-background px-2 py-1 rounded-lg"
        >
          <span className="text-sm">{link.url}</span>
          <span className="text-sm font-medium">{link.clicks}</span>
        </div>
      ))}
    </div>
  );
}
