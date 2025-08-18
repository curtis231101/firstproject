import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { product, amount } = await req.json();

    const res = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,  // ✅ use secret key here
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tx_ref: Date.now().toString(),
        amount,
        currency: "NGN",
        redirect_url: "http://localhost:3000/payment-success",
        customer: {
          email: "customer@email.com",
          phonenumber: "08123456789",
          name: "Test Customer",
        },
        customizations: {
          title: "Farm Store",
          description: `Payment for ${product}`,
        },
      }),
    });

    const data = await res.json();

    if (data.status === "success") {
      return NextResponse.json({ link: data.data.link });
    } else {
      return NextResponse.json({ error: "Payment init failed", details: data });
    }
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err });
  }
}
