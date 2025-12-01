import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="w-full bg-black text-white min-h-screen pt-28 pb-20 px-4 sm:px-10">
      <div className="max-w-xl mx-auto text-center">

        <div className="text-5xl mb-6">✅</div>

        <h1 className="text-3xl sm:text-4xl font-semibold">
          Order Placed Successfully!
        </h1>

        <p className="text-neutral-400 mt-4 leading-relaxed">
          Thank you for choosing <span className="font-semibold">Code Nutrition</span>.
          Your order has been confirmed and will be processed shortly.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <Link
            href="/shop"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition w-full"
          >
            Continue Shopping
          </Link>

          <Link
            href="/account/orders"
            className="px-6 py-3 rounded-lg border border-neutral-700 hover:border-white transition w-full"
          >
            View Your Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
