"use server";

interface Card {
  id: string;
  type: "pay-me" | "qr-code" | "my-wallet" | "fiat";
  order: number;
}

export async function saveCardOrder(cards: Card[]) {
  try {
    // Simulate API call to save card order
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real implementation, you would save to your database:
    // await db.cards.updateMany({
    //   data: cards.map(card => ({
    //     where: { id: card.id },
    //     data: { order: card.order }
    //   }))
    // })

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to save card order" };
  }
}
