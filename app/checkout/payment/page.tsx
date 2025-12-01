"use client";

import Link from "next/link";
import { useState } from "react";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");

  return (
    <div className="w-full bg-black text-white min-h-screen pt-24 pb-20 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Payment Method</h1>

        <div className="flex flex-col gap-6">

          {/* Payment Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["card", "upi", "cod"].map((opt) => (
              <button
                key={opt}
                onClick={() => setMethod(opt)}
                className={`border rounded-lg px-4 py-4 text-center capitalize transition 
                  ${
                    method === opt
                      ? "border-white bg-neutral-900"
                      : "border-neutral-700 hover:border-neutral-500"
                  }`}
              >
                {opt === "cod" ? "Cash on Delivery" : opt}
              </button>
            ))}
          </div>

          {/* Payment Inputs */}
          {method === "card" && (
            <div className="grid gap-4 mt-4">
              <input
                type="text"
                placeholder="Card Number"
                className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3"
                />
              </div>
            </div>
          )}

          {method === "upi" && (
            <input
              type="text"
              placeholder="Enter UPI ID (example@oksbi)"
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3"
            />
          )}

        </div>

        <div className="flex justify-between items-center mt-10">
          <Link href="/checkout/shipping" className="text-sm underline opacity-70 hover:opacity-100">
            ← Back to Shipping
          </Link>

          <Link
            href="/checkout/confirmation"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition"
          >
            Confirm Order →
          </Link>
        </div>
      </div>
    </div>
  );
}
