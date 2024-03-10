import Userprofile from "@/models/adminModel";
import connect from "@/backend/dbConnection/db";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req, res) {
  const { url, name, email, urlimage, bio, location, socialLinks } =
    await req.json();
  const user = await Userprofile.find({ url });
}
