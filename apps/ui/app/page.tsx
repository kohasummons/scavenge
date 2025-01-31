// Components
import LandingPageComponent from '@/components/pages_components/Landing'

export default function Home() {
  return <LandingPageComponent />
}

// import { truncateAddress } from '@/lib/utils'
// import { motion } from 'motion/react'
// import { BillaIcon } from '@/components/icons'
// import { NetworkBase, NetworkEthereum, NetworkSolana } from '@web3icons/react'

// const LIST = [
//   {
//     address: '0x4037D2daa35420Ee4A3b19F7c4137e1b36538f54',
//     network: 'Ethereum',
//     icon: <NetworkEthereum />,
//   },
//   {
//     address: '0xc1b731BAc627073558BDE08C4622f1341843b977',
//     network: 'Base',
//     icon: <NetworkBase />,
//   },
//   {
//     address: 'WsvEhmCkgXUn8cz5qc1PiBYXc2RnxsrQnxoMuWUUYV1',
//     network: 'Solana',
//     icon: <NetworkSolana />,
//   },
// ]

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// }

// const listItem = {
//   hidden: { opacity: 0, x: -50 },
//   show: { opacity: 1, x: 0 },
// }

// const handleItemClick = async (e: React.MouseEvent, item: { address: string }) => {
//   e.preventDefault()
//   await navigator.clipboard.writeText(item.address)
// }

// <div>
//   <header className="h-[90dvh] flex flex-col items-center justify-center">
//     <BillaIcon />
//     <motion.ul
//       layout
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="w-full max-w-[400px] flex flex-col font-[family-name:var(--font-geist-mono)] mt-10"
//     >
//       {LIST.map((item, index) => {
//         return (
//           <motion.li
//             variants={listItem}
//             whileHover={{ scale: 1.05, borderRadius: "8px" }}
//             key={index}
//             className="flex gap-2 bg-[#f6f6f6] px-4 py-2 first-of-type:rounded-t-lg last-of-type:rounded-b-lg cursor-pointer"
//             onClick={(e) => handleItemClick(e, item)}
//           >
//             <span>{item.icon}</span>
//             {truncateAddress(item.address, 6)}

//           </motion.li>
//         );
//       })}
//     </motion.ul>
//   </header>
//   <footer className="flex justify-center font-[family-name:var(--font-geist-mono)]">
//     <p className="text-xs text-[#e0e0e0]">NothingFactory</p>
//   </footer>
// </div>
