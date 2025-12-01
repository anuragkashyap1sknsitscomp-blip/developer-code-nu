"use client";

import Link from "next/link";
import { useState } from "react";

export default function ShippingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-black text-white min-h-screen pt-24 pb-20 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Shipping Details</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-sm opacity-70">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm opacity-70">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm opacity-70">Address</label>
            <textarea
              name="address"
              rows={3}
              onChange={handleChange}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none w-full"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm opacity-70">City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm opacity-70">Pincode</label>
            <input
              type="text"
              name="pincode"
              onChange={handleChange}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm opacity-70">State</label>
            <input
              type="text"
              name="state"
              onChange={handleChange}
              className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none w-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <Link href="/shop" className="text-sm underline opacity-70 hover:opacity-100">
            ← Continue Shopping
          </Link>

          <Link
            href="/checkout/payment"
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition"
          >
            Continue to Payment →
          </Link>
        </div>
      </div>
    </div>
  );
}
